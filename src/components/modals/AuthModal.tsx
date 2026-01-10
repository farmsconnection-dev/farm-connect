import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, LogIn, User, Mail, Lock } from 'lucide-react';
import { supabase } from '../../lib/supabase';


interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    pendingRole: 'discoverer' | 'farmer' | null;
    handleLogin: (email: string, name: string) => void;
    handleGuestContinue: () => void;
    t: (key: string) => string;
    showToast: (msg: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, pendingRole, handleLogin, handleGuestContinue, t, showToast }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEmailLogin, setShowEmailLogin] = useState(false);

    if (!isOpen) return null;

    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin
            }
        });

        if (error) {
            showToast('❌ Google login mislukt');
            console.error(error);
        }
    };

    const handleEmailSubmit = () => {
        if (!email || !password) {
            showToast('⚠️ Vul email en wachtwoord in');
            return;
        }
        // Haal naam af van email
        const name = email.split('@')[0];
        handleLogin(email, name);
    };

    return (
        <div className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-10 rounded-[48px] max-w-md w-full shadow-2xl relative text-center">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={24} /></motion.button>
                <div className="bg-emerald-100 w-20 h-20 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-6"><LogIn size={40} /></div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">{t('login')}</h2>
                {pendingRole === 'discoverer' && <p className="text-slate-500 font-medium mb-6 leading-relaxed px-2">{t('auth_gate_text')}</p>}

                {!showEmailLogin ? (
                    // Google Login View
                    <div className="space-y-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleGoogleLogin}
                            className="w-full bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors"
                        >
                            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="G" />
                            {t('login_google')}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setShowEmailLogin(true)}
                            className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors"
                        >
                            <Mail size={16} />
                            Inloggen met Email
                        </motion.button>

                        {pendingRole === 'discoverer' && (
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleGuestContinue}
                                className="w-full bg-forest text-mint py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
                            >
                                <User size={16} /> {t('guest_mode')}
                            </motion.button>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onClose}
                            className="w-full py-2 text-slate-300 font-bold text-[10px] uppercase tracking-widest"
                        >
                            {t('cancel')}
                        </motion.button>
                    </div>
                ) : (
                    // Email Login View
                    <>
                        <div className="space-y-4 mb-6">
                            <div className="text-left">
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="je@email.com"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-medium"
                                />
                            </div>
                            <div className="text-left">
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Wachtwoord</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleEmailSubmit}
                                className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors"
                            >
                                <Lock size={16} /> Inloggen
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowEmailLogin(false)}
                                className="w-full py-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest"
                            >
                                ← Terug
                            </motion.button>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};
