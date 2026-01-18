import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart, MapPin, Navigation, Leaf, Clock } from 'lucide-react';
import { ProductImage } from '../shared/ProductImage';
import { Farm } from '../../types';

import { translateProduct } from '../../utils/translations';

interface FarmDetailModalProps {
    farm: Farm;
    onClose: () => void;
    t: (key: string) => string;
    toggleFavorite: (id: string) => void;
    isFavorite: boolean;
    handleRouteClick: (farm: Farm) => void;
    lang: string;
}

export const FarmDetailModal: React.FC<FarmDetailModalProps> = ({ farm, onClose, t, toggleFavorite, isFavorite, handleRouteClick, lang }) => (
    <div className="fixed inset-0 z-[300] flex justify-end pointer-events-none">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={onClose} />
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="w-full max-w-md bg-white h-full shadow-2xl pointer-events-auto overflow-y-auto relative flex flex-col">
            <div className="h-64 relative shrink-0">
                <ProductImage src={farm.image} className="w-full h-full object-cover" alt={farm.name} />
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md text-white rounded-full"><X size={20} /></button>
                <button onClick={() => toggleFavorite(farm.id)} className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg text-emerald-900">
                    <Heart size={20} fill={isFavorite ? '#d4af37' : 'none'} className={isFavorite ? 'text-yellow-500' : 'text-slate-300'} />
                </button>
            </div>
            <div className="p-8 flex-1">
                <h2 className="text-3xl font-black text-slate-800 mb-2">{farm.name}</h2>
                <p className="flex items-center gap-2 text-slate-500 font-medium mb-6"><MapPin size={18} /> {farm.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button onClick={() => handleRouteClick(farm)} className="bg-emerald-900 text-emerald-50 py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-800 transition-colors"><Navigation size={16} /> {t('btn_route')}</button>
                    <div className="bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-2 border border-slate-100">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('distance')}</span>
                        <span className="font-black text-xl text-slate-800">{farm.distance || 12} km</span>
                    </div>
                </div>

                <h3 className="font-black text-lg text-slate-800 mb-4 flex items-center gap-2"><Leaf size={20} className="text-emerald-500" /> {t('products')}</h3>
                <div className="space-y-4 mb-8">
                    {farm.products.map((p: any, index: number) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={p.id}
                            className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100/50 shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-white shadow-inner p-1">
                                <img src={p.image} className="w-full h-full object-cover rounded-xl" alt={p.name} />
                            </div>
                            <div className="flex-1">
                                <p className="font-extrabold text-slate-800 text-lg leading-tight mb-1">{translateProduct(p.name, lang)}</p>
                                {p.price && <p className="text-sm font-bold text-slate-400">€{p.price} {p.unit}</p>}
                            </div>
                            {p.available ? (
                                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-black text-[10px] uppercase tracking-wide">
                                    {t('in_stock')}
                                </span>
                            ) : (
                                <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-black text-[10px] uppercase tracking-wide">
                                    {t('sold_out')}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>

                <h3 className="font-black text-lg text-slate-800 mb-4 flex items-center gap-2"><Clock size={20} className="text-blue-500" /> {t('opening_hours')}</h3>
                <div className="space-y-2 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                    {farm.schedule?.map((s: any) => {
                        const dayKey = `day_${s.day.toLowerCase().slice(0, 3)}`;
                        return (
                            <div key={s.day} className="flex justify-between text-sm py-1">
                                <span className="capitalize text-slate-500 font-bold">{t(dayKey)}</span>
                                <span className={`font-bold ${s.isOpen ? 'text-slate-800' : 'text-slate-300'}`}>{s.isOpen ? `${s.openTime} - ${s.closeTime}` : t('closed')}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    </div>
);
