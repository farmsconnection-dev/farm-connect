// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Heart } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { Farm } from '../../types';
import { getLiveStatus, isNew, getFilterIcon } from '../../utils/helpers';
import { translateProduct } from '../../utils/translations';

interface FarmCardProps {
    farm: Farm;
    setDetailFarm: (farm: Farm) => void;
    toggleFavorite: (id: string) => void;
    favorites: Set<string>;
    handleRouteClick: (farm: Farm) => void;
    t: (key: string) => string;
    lang: string;
}

export const FarmCard: React.FC<FarmCardProps> = ({ farm, setDetailFarm, toggleFavorite, favorites, handleRouteClick, t, lang }) => {
    const live = getLiveStatus(farm.schedule || []);
    const topProducts = farm.products.slice(0, 3);
    const categories = Array.from(new Set(farm.products.map(p => p.category))).slice(0, 3);

    return (
        <motion.div
            layoutId={farm.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            onClick={() => setDetailFarm(farm)}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group flex flex-row relative cursor-pointer hover:shadow-lg transition-all h-32"
        >
            {/* Image Section - Fixed Width */}
            <div className="w-32 h-32 relative overflow-hidden shrink-0">
                <ProductImage
                    layoutId={`image-${farm.id}`}
                    src={farm.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={farm.name}
                />

                {/* Status Badge */}
                <div className="absolute top-1.5 left-1.5 z-10">
                    <div className={`px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wide ${live.color === 'bg-emerald-500 text-white' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                        {t(live.label)}
                    </div>
                </div>

                {/* New Badge */}
                {isNew(farm.joinedDate) && (
                    <div className="absolute bottom-1.5 left-1.5 z-10">
                        <div className="px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wide bg-amber-500 text-white">
                            {t('new_badge')}
                        </div>
                    </div>
                )}

                {/* 24/7 Automaat Badge */}
                {farm.heeft_automaat && (
                    <div className="absolute top-1.5 right-1.5 z-10" title="24/7 Automaat">
                        <div className="bg-blue-500 text-white p-1 rounded-md shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="9" y1="9" x2="15" y2="9" />
                                <line x1="9" y1="15" x2="15" y2="15" />
                                <circle cx="12" cy="12" r="1" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section - Flexible Width */}
            <div className="flex-1 p-3 flex flex-col justify-between overflow-hidden">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 overflow-hidden">
                        <h3 className="text-base font-bold text-slate-900 leading-tight truncate mb-0.5">{farm.name}</h3>

                        {/* Address */}
                        <div className="flex items-center gap-1 text-slate-500 text-[10px] font-medium mb-0.5">
                            <MapPin size={10} className="shrink-0" />
                            <span className="truncate">{farm.address}</span>
                        </div>

                        {/* Distance */}
                        {farm.distance && (
                            <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
                                <Navigation size={10} className="shrink-0" />
                                <span>{farm.distance.toFixed(1)} km</span>
                            </div>
                        )}

                        {/* Status Update - Contrasting Orange */}
                        {farm.statusUpdate && new Date(farm.statusUpdate.expiresAt) > new Date() && (
                            <div className="mt-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-0.5 rounded-md text-[9px] font-black shadow-sm animate-pulse">
                                ⚡ {farm.statusUpdate.message}
                            </div>
                        )}
                    </div>

                    {/* Favorite Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(farm.id); }}
                        className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors shrink-0"
                    >
                        <Heart size={14} fill={favorites.has(farm.id) ? '#d4af37' : 'none'} className={favorites.has(farm.id) ? 'text-yellow-500' : 'text-slate-400'} />
                    </motion.button>
                </div>

                {/* Bottom Row - Categories & Products */}
                <div className="flex items-center gap-2 overflow-hidden">
                    {/* Category Badges */}
                    <div className="flex gap-1 shrink-0">
                        {categories.map((cat: string) => {
                            const colorClass = cat === 'fruit' ? 'text-red-500' :
                                cat === 'vegetables' ? 'text-green-500' :
                                    cat === 'dairy' ? 'text-blue-400' :
                                        cat === 'meat' ? 'text-orange-700' :
                                            cat === 'eggs' ? 'text-yellow-500' : 'text-slate-500';

                            return (
                                <span key={cat} className={`w-5 h-5 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center ${colorClass} text-xs`}>
                                    {getFilterIcon(cat)}
                                </span>
                            );
                        })}
                    </div>

                    {/* Top Products */}
                    <div className="flex gap-2 overflow-hidden flex-1">
                        {topProducts.map((product, idx) => (
                            <span key={idx} className="text-[9px] font-semibold text-slate-600 whitespace-nowrap flex items-center gap-1">
                                {product.in_vending_machine && <span title="Beschikbaar in automaat">📦</span>}
                                {translateProduct(product.name, lang)} <span className="text-emerald-600">€{product.price}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
