// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MessageCircle, ChevronRight, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import { ViewState, UserType } from '../types';

interface SupportPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
    previousView: ViewState;
    setIsManualModalOpen: (isOpen: boolean) => void;
    userType: UserType;
}

export const SupportPage: React.FC<SupportPageProps> = ({ t, setView, previousView, setIsManualModalOpen, userType }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <motion.div key="support" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen w-full flex flex-col pt-24 px-4 sm:px-8 pb-10 max-w-4xl mx-auto overflow-y-auto scrollbar-hide">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setView(previousView)} className="flex items-center gap-2 text-white/80 font-black text-xs uppercase tracking-widest mb-8"><ChevronLeft size={16} /> {t('cancel')}</motion.button>
            <h1 className="text-4xl font-black text-white mb-10 tracking-tighter drop-shadow-md">{t('menu_support')}</h1>
            <div className="space-y-4">
                <motion.a href="mailto:support@farmconnect.be" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 flex items-center justify-between group transition-all"><div className="flex items-center gap-4"><div className="bg-blue-50 text-blue-500 p-3 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors"><MessageCircle size={24} /></div><div><h3 className="font-black text-slate-800">{t('support_ask')}</h3><p className="text-xs text-slate-400 font-bold">{t('support_email')}</p></div></div><ChevronRight size={20} className="text-slate-300" /></motion.a>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsManualModalOpen(true)} className="bg-forest p-6 rounded-3xl shadow-2xl flex items-center justify-between text-left group transition-all w-full border border-white/10"><div className="flex items-center gap-4 text-white"><div className="bg-mint text-forest p-3 rounded-2xl"><Sparkles size={24} /></div><div><h3 className="font-black">{t('support_guide_title')}</h3><p className="text-xs text-mint/60 font-bold">{t('support_guide_desc')}</p></div></div><ChevronRight size={20} className="text-mint/40" /></motion.button>
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20 mt-12">
                    <h3 className="text-2xl font-black text-forest mb-8 flex items-center gap-3"><HelpCircle size={28} className="text-mint" />{t('faq_title')}</h3>
                    <div className="space-y-4">
                        {(userType === 'farmer'
                            ? [
                                { q: t('faq_referral_q'), a: t('faq_referral_a') },
                                { q: t('faq_costs_q'), a: t('faq_costs_a') },
                                { q: t('faq_privacy_q'), a: t('faq_privacy_a') },
                                { q: t('faq_switch_q'), a: t('faq_switch_a') },
                                { q: t('faq_annual_q'), a: t('faq_annual_a') },
                                { q: t('faq_payments_q'), a: t('faq_payments_a') }
                            ]
                            : [
                                { q: t('faq_1_q'), a: t('faq_1_a') },
                                { q: t('faq_stock_q'), a: t('faq_stock_a') },
                                { q: t('faq_3_q'), a: t('faq_3_a') },
                                { q: t('faq_4_q'), a: t('faq_4_a') },
                                { q: t('faq_order_q'), a: t('faq_order_a') }
                            ]
                        ).map((faq, i) => (
                            <div key={i} className="border-b border-slate-100 last:border-0">
                                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full py-4 flex items-center justify-between text-left group transition-colors"><span className="font-bold text-slate-700 group-hover:text-forest">{faq.q}</span><ChevronDown size={18} className={`text-slate-300 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} /></motion.button>
                                <AnimatePresence>{openFaq === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-4 text-slate-500 text-sm font-medium leading-relaxed">{faq.a}</p></motion.div>)}</AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-12 text-center text-white/40 font-bold text-[10px] uppercase tracking-widest">{t('support_version')}</p>
        </motion.div>
    );
};
