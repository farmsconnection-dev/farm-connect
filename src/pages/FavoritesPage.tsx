
// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, MapPin, Navigation, Star } from 'lucide-react';
import { Farm, ViewState } from '../types';
import { FarmCard } from '../components/shared/FarmCard';

interface FavoritesPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
    favorites: Set<string>;
    farms: Farm[];
    setDetailFarm: (farm: Farm | null) => void;
    toggleFavorite: (id: string) => void;
    handleRouteClick: (farm: Farm) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
    t, setView, favorites, farms, setDetailFarm, toggleFavorite, handleRouteClick
}) => {

    const favoriteFarms = farms.filter(f => favorites.has(f.id) && f.is_verified !== false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-screen w-full flex flex-col pt-32 px-4 sm:px-8 pb-10 max-w-6xl mx-auto overflow-y-auto scrollbar-hide"
        >
            <div className="mb-8 flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('discover')}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm text-white hover:bg-white/30 transition-all border border-white/20"
                >
                    <ArrowLeft size={24} />
                </motion.button>
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md flex items-center gap-3">
                        <Heart className="fill-red-500 text-red-500" /> {t('stat_favorites')}
                    </h1>
                    <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">
                        {t('menu_favorites')}
                    </p>
                </div>
            </div>

            {favoriteFarms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteFarms.map(farm => (
                        <FarmCard
                            key={farm.id}
                            farm={farm}
                            t={t}
                            setDetailFarm={setDetailFarm}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            handleRouteClick={handleRouteClick}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/10 m-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                        <Heart size={48} className="text-white/40" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{t('favorites_empty_title')}</h3>
                    <p className="text-white/60 max-w-md mb-8">
                        {t('favorites_empty_desc')}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setView('discover')}
                        className="px-8 py-3 bg-white text-forest font-bold rounded-2xl shadow-lg"
                    >
                        {t('favorites_add_btn')}
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
};
