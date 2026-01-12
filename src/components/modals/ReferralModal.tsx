import React from 'react';
import { motion } from 'framer-motion';
import { X, Share2, MessageCircle, Copy, Gift, Sparkles } from 'lucide-react';

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
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-0 rounded-[32px] shadow-2xl max-w-md w-full relative overflow-hidden text-center border-4 border-amber-100"
            >
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-b-[50%] scale-150 -translate-y-12 opacity-90" />

                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} onClick={onClose} className="absolute top-4 right-4 text-white hover:text-white/80 z-20 transition-colors"><X size={24} /></motion.button>

                <div className="relative z-10 mt-8 mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl text-amber-500 border-4 border-amber-100">
                        <Gift size={36} className="ml-1" />
                    </div>
                </div>

                <div className="px-8 pb-8">
                    <h3 className="text-2xl font-black text-slate-800 mb-2">{t('referral_modal_title')}</h3>
                    <p className="text-slate-500 font-medium mb-6 text-sm leading-relaxed">
                        Nodig een collega uit en ontvang <span className="text-amber-600 font-bold">€20 direct cash</span>.
                        Samen maken we de keten korter!
                    </p>

                    {/* Balance Display */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-100 flex items-center justify-between mb-6 shadow-sm group hover:shadow-md transition-shadow">
                        <div className="text-left flex items-center gap-3">
                            <div className="bg-white p-2 rounded-xl text-amber-500 shadow-sm"><Sparkles size={20} /></div>
                            <div>
                                <p className="text-amber-900 font-black text-xs uppercase tracking-wide opacity-70">{t('current_balance')}</p>
                                <p className="text-amber-900 font-bold text-lg leading-none">Beschikbaar</p>
                            </div>
                        </div>
                        <span className="text-3xl font-black text-amber-500 drop-shadow-sm">€{referralBalance || 0}</span>
                    </div>

                    {/* Code Box */}
                    <div className="mb-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 text-left ml-2">Jouw Code</p>
                        <div className="bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-between group hover:border-amber-300 transition-colors relative">
                            <span className="font-mono text-xl font-black text-slate-700 tracking-wider flex-1 text-center select-all">{referralCode || 'LOADING...'}</span>
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => { navigator.clipboard.writeText(referralCode || ''); showToast("Code gekopieerd!"); }} className="text-slate-400 hover:text-amber-500 transition-colors absolute right-4">
                                <Copy size={20} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-black shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors" onClick={() => {
                            const url = `https://wa.me/?text=${encodeURIComponent(t('referral_wa_msg') + ' ' + (referralCode || ''))}`;
                            window.open(url, '_blank');
                        }}>
                            <MessageCircle size={20} /> Deel via WhatsApp
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-slate-800 text-white py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors" onClick={() => { navigator.clipboard.writeText(`https://farmconnect.be/invite/${referralCode}`); showToast("Promotie-link gekopieerd!"); }}>
                            <Share2 size={18} className="text-slate-400" /> {t('referral_copy')} Link
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
