// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LogOut, Clock, CheckCircle } from 'lucide-react';

interface VerificationPendingPageProps {
    onLogout: () => void;
    t: (key: string) => string;
}

export const VerificationPendingPage: React.FC<VerificationPendingPageProps> = ({ onLogout, t }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
            >
                <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock size={48} className="text-amber-600" />
                </div>

                <h1 className="text-2xl font-black text-slate-800 mb-4">{t('verification_title')}</h1>

                <p className="text-slate-600 mb-8 leading-relaxed">
                    {t('verification_desc')}
                </p>

                <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left border border-slate-100">
                    <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-500" /> {t('verification_next_steps')}
                    </h3>
                    <ul className="text-sm text-slate-500 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle size={14} className="mt-1 text-emerald-400" />
                            {t('verification_step_1')}
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle size={14} className="mt-1 text-emerald-400" />
                            {t('verification_step_2')}
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle size={14} className="mt-1 text-emerald-400" />
                            {t('verification_step_3')}
                        </li>
                    </ul>
                </div>

                <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center gap-2 text-slate-400 font-bold hover:text-slate-600 transition-colors pt-4 border-t border-slate-100"
                >
                    <LogOut size={18} /> {t('verification_logout')}
                </button>
            </motion.div>
        </div>
    );
};
