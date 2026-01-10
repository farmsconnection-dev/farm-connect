import React from 'react';
import { motion } from 'framer-motion';
import { X, Share2, MessageCircle, Copy } from 'lucide-react';

interface ReferralModalProps {
    isOpen: boolean;
    onClose: () => void;
    t: (key: string) => string;
    showToast: (msg: string) => void;
    referralCode?: string;
    referralBalance?: number;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, t, showToast, referralCode, referralBalance }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 rounded-[32px] shadow-2xl max-w-md w-full relative overflow-hidden text-center"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
                <motion.button whileHover={{ scale: 1.1 }} onClick={onClose} className="absolute top-4 right-4 text-amber-900/50 hover:text-amber-900"><X size={24} /></motion.button>

                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner text-amber-700">
                    <Share2 size={32} />
                </div>
                <h3 className="text-2xl font-black text-amber-900 mb-2">{t('referral_modal_title')}</h3>
                <p className="text-amber-800/80 font-medium mb-6">Nodig een collega uit voor een jaarabonnement en ontvang €20 direct cash op je rekening als motivatie.</p>

                {/* Balance Display */}
                <div className="bg-white/60 p-4 rounded-xl border border-amber-200 flex items-center justify-between mb-4 shadow-sm">
                    <div className="text-left">
                        <p className="text-amber-900 font-bold text-sm">{t('current_balance')}</p>
                        <p className="text-amber-700/60 text-xs font-medium">Direct Beschikbaar</p>
                    </div>
                    <span className="text-3xl font-black text-amber-600">€{referralBalance || 0}</span>
                </div>

                <div className="bg-white p-4 rounded-xl border-2 border-amber-200 flex items-center justify-between mb-6 shadow-sm">
                    <span className="font-mono text-xl font-bold text-amber-900 tracking-widest">{referralCode || 'FARM-XXXX-XX'}</span>
                    <motion.button whileTap={{ scale: 0.95 }} onClick={() => { navigator.clipboard.writeText(referralCode || ''); showToast("Code gekopieerd!"); }} className="text-amber-600 hover:text-amber-800"><Copy size={20} /></motion.button>
                </div>

                <div className="flex gap-3">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2" onClick={() => showToast("WhatsApp geopend...")}>
                        <MessageCircle size={18} /> WhatsApp
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 bg-amber-900 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2" onClick={() => { navigator.clipboard.writeText(`https://farmconnect.be/invite/${referralCode}`); showToast("Link gekopieerd!"); }}>
                        <Copy size={18} /> {t('referral_copy')}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};
