import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Compass, Tractor } from 'lucide-react';

interface LoginPromptModalProps {
    onClose: () => void;
    onLoginDiscoverer: () => void;
    onLoginFarmer: () => void;
    t: (key: string) => string;
}

export const LoginPromptModal: React.FC<LoginPromptModalProps> = ({ onClose, onLoginDiscoverer, onLoginFarmer, t }) => (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-2xl p-8 rounded-[32px] shadow-2xl max-w-md w-full text-center border border-white/20 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white"><X size={24} /></button>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <Sparkles size={40} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">{t('login_for_more')}</h3>
            <p className="text-emerald-100/80 mb-8 font-medium">{t('auth_gate_text')}</p>
            <div className="space-y-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onLoginDiscoverer} className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3">
                    <Compass size={20} className="text-emerald-600" /> {t('btn_discoverer')}
                </motion.button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onLoginFarmer} className="w-full bg-emerald-800 text-mint py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 border border-emerald-500/30">
                    <Tractor size={20} /> {t('btn_farmer')}
                </motion.button>
            </div>
        </motion.div>
    </div>
);
