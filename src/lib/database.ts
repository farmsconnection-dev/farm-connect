import { supabase } from './supabase';
import { Farm, UserProfile } from '../types';

// ============================================
// FARMS
// ============================================

export const getFarms = async () => {
    const { data, error } = await supabase
        .from('farms')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching farms:', error);
        return [];
    }

    return data as Farm[];
};

export const getFarmById = async (id: string) => {
    const { data, error } = await supabase
        .from('farms')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching farm:', error);
        return null;
    }

    return data as Farm;
};

export const createFarm = async (farm: Partial<Farm>) => {
    const { data, error } = await supabase
        .from('farms')
        .insert([farm])
        .select()
        .single();

    if (error) {
        console.error('Error creating farm:', error);
        throw error;
    }

    return data as Farm;
};

export const updateFarm = async (id: string, updates: Partial<Farm>) => {
    const { data, error } = await supabase
        .from('farms')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating farm:', error);
        throw error;
    }

    return data as Farm;
};

export const deleteFarm = async (id: string) => {
    const { error } = await supabase
        .from('farms')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting farm:', error);
        throw error;
    }
};

// ============================================
// USER PROFILES
// ============================================

export const getUserProfile = async (userId: string) => {
    const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }

    return data as UserProfile;
};

export const createUserProfile = async (profile: Partial<UserProfile>) => {
    const { data, error } = await supabase
        .from('user_profiles')
        .insert([profile])
        .select()
        .single();

    if (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }

    return data as UserProfile;
};

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
    const { data, error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

    if (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }

    return data as UserProfile;
};

// ============================================
// FAVORITES
// ============================================

export const getUserFavorites = async (userId: string) => {
    const { data, error } = await supabase
        .from('favorites')
        .select('farm_id')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }

    return data.map(f => f.farm_id);
};

export const addFavorite = async (userId: string, farmId: string) => {
    const { error } = await supabase
        .from('favorites')
        .insert([{ user_id: userId, farm_id: farmId }]);

    if (error) {
        console.error('Error adding favorite:', error);
        throw error;
    }
};

export const removeFavorite = async (userId: string, farmId: string) => {
    const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', userId)
        .eq('farm_id', farmId);

    if (error) {
        console.error('Error removing favorite:', error);
        throw error;
    }
};

// ============================================
// REALTIME SUBSCRIPTIONS
// ============================================

export const subscribeFarms = (callback: (farms: Farm[]) => void) => {
    const channel = supabase
        .channel('farms-changes')
        .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'farms' },
            async () => {
                const farms = await getFarms();
                callback(farms);
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
};
