import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, HelpCircle, TrendingUp, Box, Heart, Users, Compass, Calendar, Leaf, LogIn, LogOut, User, ShieldCheck } from 'lucide-react';
import { UserType, UserProfile, ViewState } from '../../types';

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    action?: () => void;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    view: ViewState;
    setView: (view: ViewState) => void;
    userType: UserType;
    userProfile: UserProfile;
    handleLogout: () => void;
    handleLogin: () => void;
    setIsSeasonCalendarOpen: (open: boolean) => void;
    setIsReferralModalOpen: (open: boolean) => void;
    t: (key: string) => string;
}

export const Sidebar: React.FC<SidebarProps> = ({
    isOpen, onClose, view, setView, userType, userProfile,
    handleLogout, handleLogin, setIsSeasonCalendarOpen, setIsReferralModalOpen, t
}) => {
    const menuItems = useMemo((): MenuItem[] => {
        // ADMIN EMAIL - Vervang met je echte email!
        const ADMIN_EMAIL = 'farmsconncection@gmail.com';
        // TEMPORARY: Allow all users to see admin button for testing
        const isAdmin = true; // userProfile.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

        const common = [
            { id: 'support', label: t('menu_support'), icon: <HelpCircle size={20} /> },
        ];

        if (userType === 'farmer') {
            const farmerItems = [
                { id: 'farmer', label: 'Dashboard', icon: <TrendingUp size={20} /> },
                { id: 'inventory', label: t('menu_inventory'), icon: <Box size={20} /> },
                { id: 'favorites', label: t('menu_favorites'), icon: <Heart size={20} /> },
                { id: 'referral', label: 'Referral Programma', icon: <Users size={20} />, action: () => setIsReferralModalOpen(true) },
                { id: 'calendar', label: t('menu_calendar'), icon: <Calendar size={20} />, action: () => setIsSeasonCalendarOpen(true) },
                ...common
            ];
            // Add admin at the end if user is admin
            if (isAdmin) {
                farmerItems.push({ id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> });
            }
            return farmerItems;
        }

        const discovererItems = [
            { id: 'discover', label: t('menu_discover'), icon: <Compass size={20} /> },
            { id: 'calendar', label: t('menu_calendar'), icon: <Calendar size={20} />, action: () => setIsSeasonCalendarOpen(true) },
            { id: 'favorites', label: t('menu_favorites'), icon: <Heart size={20} /> },
            { id: 'about', label: t('menu_about'), icon: <Leaf size={20} /> },
            ...common
        ];
        // Add admin at the end if user is admin
        if (isAdmin) {
            discovererItems.push({ id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> });
        }
        return discovererItems;
    }, [userType, userProfile.email, t, setIsSeasonCalendarOpen, setIsReferralModalOpen]);

    /* isOpen check handled by AnimatePresence in parent usually, or we can return null here. 
       The original code had AnimatePresence wrapping it, so this component returns the motion.div directly.
    */
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[100] w-80 bg-emerald-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col text-white"
        >
            <div className="p-8 flex items-center justify-end">
                <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-amber-400"><X size={24} /></button>
            </div>
            <div className="px-8 pb-8 flex flex-col items-center text-center border-b border-white/10 mb-4 -mt-6">
                <div className="w-24 h-24 rounded-apple bg-white/10 border-4 border-white/20 shadow-xl overflow-hidden mb-4 p-2 flex items-center justify-center">
                    {userProfile.photoUrl ? (
                        <img src={userProfile.photoUrl} className="w-full h-full object-cover rounded-[32px]" alt="Profile" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-transparent text-mint rounded-[32px]">
                            <User size={64} />
                        </div>
                    )}
                </div>
                {userProfile.isLoggedIn ? (
                    <div>
                        <p className="font-bold text-white text-xl mb-1">{userProfile.name}</p>
                        <p className="text-xs text-white/50 font-medium uppercase tracking-widest">{userType === 'farmer' ? t('btn_farmer') : t('btn_discoverer')}</p>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="w-full bg-forest text-mint py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg mt-2"><LogIn size={16} /> {t('login')}</button>
                )}
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {menuItems.map(item => (
                    <button key={item.id} onClick={() => { if (item.action) item.action(); else setView(item.id as ViewState); onClose(); }} className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all text-white hover:bg-white/10 ${view === item.id ? 'bg-white/10 text-amber-400' : ''}`}>
                        <span className={view === item.id ? 'text-amber-400' : 'text-mint'}>{item.icon}</span> {item.label}
                    </button>
                ))}
            </div>
            {userProfile.isLoggedIn && (
                <div className="p-6 border-t border-white/10">
                    <button onClick={handleLogout} className="w-full flex items-center gap-4 p-4 rounded-xl font-bold text-red-400 hover:bg-red-500/10 transition-colors"><LogOut size={20} /> {t('logout')}</button>
                </div>
            )}
        </motion.div>
    );
};
