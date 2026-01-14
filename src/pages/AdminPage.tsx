// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, X, AlertCircle, Loader2 } from 'lucide-react';
import { Farm } from '../types';
import { supabase } from '../lib/supabase';

interface AdminPageProps {
    t: (key: string) => string;
    farms: Farm[];
    setFarms: React.Dispatch<React.SetStateAction<Farm[]>>;
    userEmail: string;
    showToast: (msg: string) => void;
}

// ADMIN EMAILS - Voeg hier je eigen email toe om admin te zijn
const ADMIN_EMAILS = ['farmsconncection@gmail.com', 'admin@farmconnect.be'];

export const AdminPage: React.FC<AdminPageProps> = ({ t, farms, setFarms, userEmail, showToast }) => {
    // Initialize with props data immediately to prevent empty state
    const [unverifiedFarms, setUnverifiedFarms] = useState<Farm[]>(
        farms.filter(f => f.is_verified === false)
    );
    const [isLoading, setIsLoading] = useState(false);

    // TEMPORARY: Allow all users to access admin for setup/demo purposes.
    // In production, change this back to:
    // const isAdmin = ADMIN_EMAILS.includes(userEmail.toLowerCase());
    const isAdmin = true;

    /*
    // SUPABASE SYNC DISABLED - RELIES ON LOCAL STATE PERSISTENCE
    // This prevents deleted farms from reappearing if the specific delete operation fails in RLS or if offline.
    // The source of truth is now the 'farms' prop which is synced with localStorage.
    
    useEffect(() => {
        if (isAdmin) {
            const fetchUnverified = async () => {
                setIsLoading(true);
                try {
                    // Fetch directly from DB to be sure
                    const { data, error } = await supabase
                        .from('farms')
                        .select('*')
                        .eq('is_verified', false);

                    if (error) throw error;

                    if (data) {
                       // Only merge new ones, don't overwrite blindly? 
                       // For now we disable this to solve the "reappearing" issue.
                       // setUnverifiedFarms(data as Farm[]);
                    }
                } catch (err) {
                    console.error("Admin fetch error:", err);
                    // Fallback is already set via initial state
                } finally {
                    setIsLoading(false);
                }
            };
            // fetchUnverified();
        }
    }, []); 
    */

    const handleVerify = async (farmId: string) => {
        try {
            // 1. Update in Database
            const { error } = await supabase
                .from('farms')
                .update({ is_verified: true })
                .eq('id', farmId);

            if (error) throw error;

            // 2. Update Local State (App)
            setFarms(prev => prev.map(f =>
                f.id === farmId ? { ...f, is_verified: true } : f
            ));

            // 3. Remove from Admin List
            setUnverifiedFarms(prev => prev.filter(f => f.id !== farmId));

            showToast('✅ Boerderij geverifieerd! Hij is nu publiek zichtbaar.');
        } catch (err) {
            console.error('Error verifying farm:', err);
            showToast('❌ Er ging iets mis bij het verifiëren.');
        }
    };

    const handleReject = async (farmId: string) => {
        if (!window.confirm('Weet je zeker dat je deze boerderij wilt afwijzen en verwijderen?')) return;

        try {
            // 1. Delete from Database
            const { error } = await supabase
                .from('farms')
                .delete()
                .eq('id', farmId);

            if (error) throw error;

            // 2. Update Local State
            setFarms(prev => prev.filter(f => f.id !== farmId));
            setUnverifiedFarms(prev => prev.filter(f => f.id !== farmId));

            showToast('🗑️ Boerderij verwijderd.');
        } catch (err) {
            console.error('Error deleting farm:', err);
            showToast('❌ Er ging iets mis bij het verwijderen.');
        }
    };

    // Unauthorized access
    if (!isAdmin) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-900 to-red-950"
            >
                <div className="text-center text-white">
                    <AlertCircle size={64} className="mx-auto mb-4 text-red-400" />
                    <h1 className="text-3xl font-black mb-2">Geen Toegang</h1>
                    <p className="text-red-200">Je hebt geen admin rechten.</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-full flex flex-col pt-24 pb-10 overflow-y-auto scrollbar-hide bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 px-4 sm:px-8 py-12 mb-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <ShieldCheck size={48} className="text-purple-300" />
                        <div>
                            <h1 className="text-4xl font-black text-white">Admin Dashboard</h1>
                            <p className="text-purple-200">Beheer boerderij verificaties</p>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mt-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-black text-white">{farms.length}</p>
                                <p className="text-xs text-purple-200 uppercase font-bold">Totaal Boerderijen</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-emerald-400">{farms.filter(f => f.is_verified).length}</p>
                                <p className="text-xs text-purple-200 uppercase font-bold">Geverifieerd</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-amber-400">{unverifiedFarms.length}</p>
                                <p className="text-xs text-purple-200 uppercase font-bold">Wacht op Goedkeuring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full">
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <AlertCircle className="text-amber-400" />
                    Niet-geverifieerde Boerderijen ({unverifiedFarms.length})
                </h2>

                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 size={48} className="text-purple-400 animate-spin" />
                    </div>
                ) : unverifiedFarms.length === 0 ? (
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/5">
                        <CheckCircle size={64} className="mx-auto mb-4 text-emerald-400" />
                        <h3 className="text-2xl font-black text-white mb-2">Alles Geverifieerd! 🎉</h3>
                        <p className="text-slate-300">Er zijn geen boerderijen die wachten op goedkeuring.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {unverifiedFarms.map(farm => (
                            <motion.div
                                key={farm.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Farm Image */}
                                    <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-800">
                                        {farm.image ? (
                                            <img
                                                src={farm.image}
                                                alt={farm.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold">Geen foto</div>
                                        )}
                                    </div>

                                    {/* Farm Info */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black text-white mb-2">{farm.name}</h3>
                                        <p className="text-slate-300 text-sm mb-4">{farm.address}</p>

                                        <p className="text-xs text-slate-400 mb-4">{farm.owner_email || 'Geen email bekend'}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="bg-white/5 rounded-xl p-3">
                                                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Producten</p>
                                                <p className="text-lg font-black text-white">{farm.products?.length || 0}</p>
                                            </div>
                                            <div className="bg-white/5 rounded-xl p-3">
                                                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Telefoon</p>
                                                <p className="text-sm font-bold text-white">{farm.phone || farm.telefoonnummer || 'Niet opgegeven'}</p>
                                            </div>
                                            {farm.heeft_automaat && (
                                                <div className="bg-blue-500/20 rounded-xl p-3 col-span-2">
                                                    <p className="text-xs text-blue-300 uppercase font-bold">✓ Heeft 24/7 Automaat</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-4">
                                            <p className="text-xs text-amber-300 font-bold">
                                                Aangemeld op: {farm.joinedDate ? new Date(farm.joinedDate).toLocaleDateString('nl-NL') : 'Onbekend'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex md:flex-col gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleVerify(farm.id)}
                                            className="flex-1 md:flex-initial bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-black uppercase text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                                        >
                                            <CheckCircle size={20} />
                                            Keur Goed
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleReject(farm.id)}
                                            className="flex-1 md:flex-initial bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-black uppercase text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                                        >
                                            <X size={20} />
                                            Afwijzen
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
