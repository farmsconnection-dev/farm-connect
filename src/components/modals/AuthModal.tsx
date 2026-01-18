// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, User, Mail, Lock, UserPlus, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';


interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    pendingRole: 'discoverer' | 'farmer' | null;
    handleLogin: (email: string, name: string) => void;
    onRegisterNewFarm: () => void;
    t: (key: string) => string;
    showToast: (msg: string) => void;
    onContinueAsGuest?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, pendingRole, handleLogin, onRegisterNewFarm, t, showToast, onContinueAsGuest }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEmailLogin, setShowEmailLogin] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [localMessage, setLocalMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
    const [farmerChoice, setFarmerChoice] = useState<'existing' | 'new' | null>(null);
    const [stayLoggedIn, setStayLoggedIn] = useState(true);

    if (!isOpen) return null;

    const showLocalMessage = (type: 'error' | 'success', text: string) => {
        setLocalMessage({ type, text });
        // Auto-clear after 5 seconds
        setTimeout(() => setLocalMessage(null), 5000);
    };

    const handleGoogleLogin = async () => {
        setLocalMessage(null);
        if (stayLoggedIn) {
            localStorage.setItem('fc_stay_logged_in', 'true');
        } else {
            localStorage.removeItem('fc_stay_logged_in');
        }
        try {
            const redirectUrl = window.location.hostname === 'localhost'
                ? 'http://localhost:3001'
                : window.location.origin;

            console.log('🔄 Starting Google Login ->', redirectUrl);
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectUrl,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    }
                }
            });

            if (error) {
                // Aggressive alert for mobile debugging
                alert(`Google Login Error: ${error.message}`);
                showLocalMessage('error', `Login mislukt: ${error.message}`);
                console.error(error);
            }
        } catch (err: any) {
            alert(`Unexpected Login Error: ${err.message || JSON.stringify(err)}`);
            showLocalMessage('error', 'Er ging iets mis met Google login.');
            console.error(err);
        }
    };

    const handleEmailSubmit = async () => {
        setLocalMessage(null);

        if (!email || !password) {
            showLocalMessage('error', 'Vul email en wachtwoord in.');
            return;
        }

        if (password.length < 6) {
            showLocalMessage('error', 'Wachtwoord moet minstens 6 tekens zijn.');
            return;
        }

        setIsLoading(true);

        try {
            if (isRegistering) {
                // Registration
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: window.location.origin
                    }
                });

                if (error) {
                    if (error.message.includes('already registered')) {
                        showLocalMessage('error', 'Dit emailadres is al geregistreerd. Probeer in te loggen.');
                    } else {
                        showLocalMessage('error', `Registratie mislukt: ${error.message}`);
                    }
                    console.error(error);
                } else if (data.user) {
                    showLocalMessage('success', 'Account aangemaakt! Controleer je email om te bevestigen.');
                    setIsRegistering(false);
                }
            } else {
                // Login
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });

                if (error) {
                    if (error.message.includes('Invalid login credentials')) {
                        showLocalMessage('error', 'Ongeldige email of wachtwoord. Controleer je gegevens.');
                    } else if (error.message.includes('Email not confirmed')) {
                        showLocalMessage('error', 'Bevestig eerst je email via de link die we stuurden.');
                    } else {
                        showLocalMessage('error', `Inloggen mislukt: ${error.message}`);
                    }
                    console.error(error);
                } else if (data.user) {
                    const name = data.user.user_metadata?.full_name || email.split('@')[0];
                    if (stayLoggedIn) {
                        localStorage.setItem('fc_stay_logged_in', 'true');
                    } else {
                        localStorage.removeItem('fc_stay_logged_in');
                    }
                    showLocalMessage('success', `Welkom terug, ${name}!`);
                    setTimeout(() => {
                        handleLogin(email, name);
                        showToast(`✅ Welkom terug, ${name}!`);
                    }, 500);
                }
            }
        } catch (err) {
            console.error('Auth error:', err);
            showLocalMessage('error', 'Er ging iets mis. Probeer opnieuw.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-10 rounded-[48px] max-w-md w-full shadow-2xl relative text-center max-h-[90vh] overflow-y-auto">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={24} /></motion.button>
                <div className="bg-emerald-100 w-20 h-20 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
                    {farmerChoice === 'new' || isRegistering ? <UserPlus size={40} /> : <LogIn size={40} />}
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">
                    {pendingRole === 'farmer' && farmerChoice === 'new'
                        ? 'Boerderij Registreren'
                        : pendingRole === 'farmer' && farmerChoice === 'existing'
                            ? 'Inloggen'
                            : isRegistering ? t('create_account') : t('login')}
                </h2>
                {pendingRole === 'discoverer' && <p className="text-slate-500 font-medium mb-4 leading-relaxed px-2">{t('auth_gate_text')}</p>}

                {/* Local Message Display */}
                <AnimatePresence>
                    {localMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className={`mb-4 p-4 rounded-2xl flex items-center gap-3 text-left ${localMessage.type === 'error'
                                ? 'bg-red-50 border-2 border-red-200 text-red-700'
                                : 'bg-emerald-50 border-2 border-emerald-200 text-emerald-700'
                                }`}
                        >
                            {localMessage.type === 'error'
                                ? <AlertCircle size={20} className="shrink-0" />
                                : <CheckCircle size={20} className="shrink-0" />
                            }
                            <span className="font-medium text-sm">{localMessage.text}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Farmer Choice Screen */}
                {pendingRole === 'farmer' && !farmerChoice ? (
                    <div className="space-y-4">
                        <p className="text-slate-600 font-medium mb-6">Kies wat van toepassing is:</p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFarmerChoice('existing')}
                            className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors"
                        >
                            <LogIn size={20} />
                            Ga naar mijn boerderij
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onRegisterNewFarm}
                            className="w-full bg-blue-500 text-white py-5 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors"
                        >
                            <UserPlus size={20} />
                            Ik wil een nieuwe boerderij registreren
                        </motion.button>
                    </div>
                ) : !showEmailLogin ? (
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
                            onClick={() => { setShowEmailLogin(true); setIsRegistering(false); setLocalMessage(null); }}
                            className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors"
                        >
                            <Mail size={16} />
                            Inloggen met Email
                        </motion.button>

                        {pendingRole === 'discoverer' && (
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { setShowEmailLogin(true); setIsRegistering(true); setLocalMessage(null); }}
                                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors"
                            >
                                <UserPlus size={16} />
                                Nieuw Account Maken
                            </motion.button>
                        )}

                        {pendingRole !== 'farmer' && (
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onContinueAsGuest}
                                className="w-full bg-slate-100 text-slate-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm flex items-center justify-center gap-3 hover:bg-slate-200 transition-colors"
                            >
                                <User size={16} />
                                {t('guest_mode')}
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
                                    onChange={(e) => { setEmail(e.target.value); setLocalMessage(null); }}
                                    placeholder="je@email.com"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-medium"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="text-left">
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Wachtwoord</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setLocalMessage(null); }}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-medium"
                                    disabled={isLoading}
                                    onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
                                />
                            </div>

                            <div className="flex items-center gap-3 px-1">
                                <input
                                    type="checkbox"
                                    id="stayLoggedIn"
                                    checked={stayLoggedIn}
                                    onChange={(e) => setStayLoggedIn(e.target.checked)}
                                    className="w-5 h-5 rounded-md border-2 border-slate-200 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                                />
                                <label htmlFor="stayLoggedIn" className="text-sm font-bold text-slate-600 cursor-pointer select-none">
                                    Aangemeld blijven
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleEmailSubmit}
                                disabled={isLoading}
                                className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="animate-spin">⏳</span>
                                ) : (
                                    <>
                                        <Lock size={16} />
                                        {isRegistering ? 'Registreren' : 'Inloggen'}
                                    </>
                                )}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { setIsRegistering(!isRegistering); setLocalMessage(null); }}
                                disabled={isLoading}
                                className="w-full py-2 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:text-emerald-700"
                            >
                                {isRegistering ? '← Ik heb al een account' : 'Nog geen account? Registreer →'}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { setShowEmailLogin(false); setIsRegistering(false); setLocalMessage(null); }}
                                disabled={isLoading}
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
