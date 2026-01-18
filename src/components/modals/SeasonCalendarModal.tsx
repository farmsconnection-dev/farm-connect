// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Leaf, Sprout, Carrot } from 'lucide-react';
import { SEASONAL_DATA } from '../../constants';
import { getSeasonalImage } from '../../utils/helpers';
import { translateProduct } from '../../utils/translations';

interface SeasonCalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
    t: (key: string) => string;
    handleSeasonalItemClick: (itemText: string) => void;
    currentMonthIndex: number;
    lang: string;
}

// Translation helper for months (can be moved to translations.ts if needed more broadly)
const translateMonth = (month: string, t: (key: string) => string): string => {
    const monthMap: Record<string, string> = {
        'Januari': t('month_january'),
        'Februari': t('month_february'),
        'Maart': t('month_march'),
        'April': t('month_april'),
        'Mei': t('month_may'),
        'Juni': t('month_june'),
        'Juli': t('month_july'),
        'Augustus': t('month_august'),
        'September': t('month_september'),
        'Oktober': t('month_october'),
        'November': t('month_november'),
        'December': t('month_december')
    };
    return monthMap[month] || month;
};

export const SeasonCalendarModal: React.FC<SeasonCalendarModalProps> = ({ isOpen, onClose, t, handleSeasonalItemClick, currentMonthIndex, lang }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[200] bg-emerald-950/90 backdrop-blur-2xl flex flex-col overflow-hidden" onClick={(e) => { e.stopPropagation(); onClose(); }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-12 flex justify-between items-center border-b border-white/10 shrink-0 bg-black/20" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-amber-500/20 p-5 rounded-[2rem] text-amber-400 shadow-lg shadow-amber-500/10 border border-amber-500/20"><Calendar size={40} /></motion.div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">{t('menu_calendar')}</h2>
                        <p className="text-emerald-200 font-bold uppercase tracking-widest text-xs mt-1">{t('fresh_harvest')}</p>
                    </div>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="p-4 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"><X size={40} /></motion.button>
            </motion.div>

            <div className="flex-1 w-full flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-white/5 pb-4 p-8 md:p-16 gap-8 md:gap-12 items-center" onClick={(e) => e.stopPropagation()}>
                {SEASONAL_DATA.map((data, i) => {
                    const isCurrentMonth = i === currentMonthIndex;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: isCurrentMonth ? 1.05 : 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`snap-center shrink-0 w-[75vw] md:w-[360px] h-[55vh] rounded-[32px] p-4 flex flex-col relative overflow-hidden transition-all duration-500
                        ${isCurrentMonth
                                    ? 'bg-gradient-to-b from-amber-500/20 to-emerald-900/80 border-2 border-amber-500 shadow-[0_0_60px_rgba(212,175,55,0.3)] scale-105 z-10'
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 scale-95 opacity-70 hover:opacity-100 hover:scale-100'
                                }`}
                        >
                            {isCurrentMonth && (
                                <div className="absolute top-4 right-4 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg z-20">{t('now_from_land')}</div>
                            )}
                            <h3 className="text-2xl font-bold mb-6 tracking-tight text-white">{translateMonth(data.month, t)}</h3>

                            <div className="flex-1 space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
                                {data.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => handleSeasonalItemClick(item)}
                                        className="flex items-center gap-3 group cursor-pointer bg-black/20 p-2 rounded-2xl hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10 shadow-inner shrink-0 relative flex items-center justify-center">
                                            <img src={getSeasonalImage(item)} alt={item} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                        </div>
                                        <span className={`font-bold text-base ${isCurrentMonth ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>{translateProduct(item, lang)}</span>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Background decoration */}
                            <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none rotate-12">
                                <Leaf size={300} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            {/* Mobile floating close button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[210] bg-white text-emerald-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-2xl flex items-center gap-2 border-2 border-emerald-500"
            >
                <X size={20} />
                {t('cancel')}
            </motion.button>
        </div>
    );
};
