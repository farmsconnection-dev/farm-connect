// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, List as ListIcon, Map as MapIcon, Clock, Navigation, Heart, MapPin, Leaf, AlertTriangle, Loader2, Banknote, QrCode, CheckCircle2 } from 'lucide-react';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { ProductImage } from '../components/shared/ProductImage';
import { FarmCard } from '../components/shared/FarmCard';
import { getLiveStatus, isNew, getFilterIcon, getFarmCategoryIcon, calculateDistance, getCategoryColor } from '../utils/helpers';
import { Farm, Coordinate, UserProfile } from '../types';

interface DiscoverPageProps {
    t: (key: string) => string;
    farms: Farm[];
    isLoaded: boolean;
    loadError: Error | undefined;
    userLocation: Coordinate | null;
    setDetailFarm: (farm: Farm) => void;
    toggleFavorite: (id: string) => void;
    favorites: Set<string>;
    handleRouteClick: (farm: Farm) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    userProfile?: UserProfile;
}

const mapContainerStyle = { width: '100%', height: '100%' };
const defaultCenter = { lat: 50.8503, lng: 4.3517 }; // Brussel Centraal
const googleMapsOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
        { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
        { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] } // Simplified map style
    ]
};

export const DiscoverPage: React.FC<DiscoverPageProps> = ({
    t, farms, isLoaded, loadError, userLocation, setDetailFarm, toggleFavorite, favorites, handleRouteClick,
    searchQuery, setSearchQuery, userProfile
}) => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'open' | 'fruit' | 'vegetables' | 'dairy' | 'nearby'>('all');
    const [isMapView, setIsMapView] = useState(false);
    const [showOpenOnly, setShowOpenOnly] = useState(false);
    const [show24_7Only, setShow24_7Only] = useState(false); // 24/7 Automaten filter
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);

    const filterList = ['all', 'fruit', 'vegetables', 'dairy', 'meat', 'eggs', 'honey', 'nuts'];

    const searchSuggestions = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const query = searchQuery.toLowerCase();
        const suggestions = new Set<string>();
        farms.forEach(farm => {
            if (farm.name.toLowerCase().includes(query)) suggestions.add(farm.name);
            farm.products.forEach(p => {
                if (p.name.toLowerCase().includes(query)) suggestions.add(p.name);
            });
        });
        return Array.from(suggestions).slice(0, 5);
    }, [searchQuery, farms]);

    const filteredFarms = useMemo(() => {
        let result = farms;

        // IMPORTANT: Only show verified farms to public, BUT always show user's own farm
        result = result.filter(f => f.is_verified !== false || (userProfile?.id && f.owner_id === userProfile.id));

        // Filter for 24/7 automaten
        if (show24_7Only) {
            result = result.filter(f => f.heeft_automaat === true);
        }

        if (showOpenOnly || activeFilter === 'open') {
            result = result.filter(f => getLiveStatus(f.schedule).label === 'OPEN');
        }

        if (activeFilter === 'nearby' && userLocation) {
            // Filter farms within 20km radius
            result = result.filter(f => {
                const distance = calculateDistance(userLocation.lat, userLocation.lng, f.lat, f.lng);
                return distance <= 20;
            });
        } else if (activeFilter !== 'all' && activeFilter !== 'open' && activeFilter !== 'nearby') {
            result = result.filter(f => f.products.some(p => p.category === activeFilter));
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(f =>
                f.name.toLowerCase().includes(query) ||
                f.products.some(p => p.name.toLowerCase().includes(query))
            );
        }


        // Calculate distance and sort (use Brussels center as default if no user location)
        const referenceLocation = userLocation || { lat: 50.8503, lng: 4.3517 }; // Brussels center
        result = result.map(f => ({
            ...f,
            distance: calculateDistance(referenceLocation.lat, referenceLocation.lng, f.lat, f.lng)
        })).sort((a, b) => (a.distance || 0) - (b.distance || 0));


        return result;
    }, [farms, searchQuery, activeFilter, showOpenOnly, show24_7Only, userLocation]);

    const handleSearchSelect = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    const resetFilters = () => {
        setActiveFilter('all');
        setShowOpenOnly(false);
        setSearchQuery('');
    };

    return (
        <motion.div key="discover" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="h-[100dvh] w-full flex flex-col pt-24 px-4 sm:px-8 pb-4 max-w-7xl mx-auto">
            <div className="sticky top-0 z-30 pt-4 pb-2 bg-gradient-to-b from-transparent to-transparent space-y-4">
                <div className="relative group z-50">
                    <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-slate-600"><Search size={16} /></div>
                    <input
                        type="text"
                        placeholder={t('search_placeholder')}
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (activeFilter !== 'all') setActiveFilter('all');
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        className="w-full bg-white pl-12 pr-40 py-3 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-forest/30 text-sm font-medium transition-all text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-forest/50"
                    />

                    {/* Search Suggestions Dropdown */}
                    <AnimatePresence>
                        {showSuggestions && searchSuggestions.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden z-50 py-1"
                            >
                                {searchSuggestions.map((suggestion, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSearchSelect(suggestion)}
                                        className="w-full text-left px-3 py-2 hover:bg-slate-100 text-slate-700 font-medium text-sm flex items-center gap-3 transition-colors group"
                                    >
                                        <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                                            <Search size={16} />
                                        </div>
                                        <span className="text-base">{suggestion}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {searchQuery && (
                        <button
                            onClick={() => { setSearchQuery(''); setShowSuggestions(false); }}
                            className="absolute right-[200px] top-1/2 -translate-y-1/2 p-2 text-white bg-slate-600 hover:bg-slate-700 rounded-full transition-colors z-20 shadow-md"
                        >
                            <X size={16} />
                        </button>
                    )}
                    <div className="absolute right-3 top-3 bottom-3 bg-white/50 backdrop-blur-sm rounded-2xl p-1 flex gap-1 shadow-inner">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsMapView(false)} className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${!isMapView ? 'bg-forest text-mint shadow-md' : 'text-slate-500 hover:bg-white/50'}`}><ListIcon size={18} />{t('view_list')}</motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsMapView(true)} className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${isMapView ? 'bg-forest text-mint shadow-md' : 'text-slate-500 hover:bg-white/50'}`}><MapIcon size={18} />{t('view_map')}</motion.button>
                    </div>
                </div>

                {/* Filter Section - Two Rows */}
                <div className="space-y-2">
                    {/* Row 1: Primary Filters (Nu Open, In de buurt, 24/7 Automaten) */}
                    <div className="flex gap-2 flex-wrap">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setShowOpenOnly(!showOpenOnly)} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-sm flex items-center gap-2 transition-all active:scale-95 ${showOpenOnly ? 'bg-emerald-500 text-white' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'}`}><Clock size={16} />{t('filter_open_now')}</motion.button>

                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setActiveFilter(activeFilter === 'nearby' ? 'all' : 'nearby')} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-sm flex items-center gap-2 transition-all active:scale-95 ${activeFilter === 'nearby' ? 'bg-purple-500 text-white' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'}`}><Navigation size={16} />Dichtbij</motion.button>

                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setShow24_7Only(!show24_7Only)} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-sm flex items-center gap-2 transition-all active:scale-95 ${show24_7Only ? 'bg-blue-500 text-white' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="9" y1="9" x2="15" y2="9" />
                                <line x1="9" y1="15" x2="15" y2="15" />
                                <circle cx="12" cy="12" r="1" />
                            </svg>
                            24/7 Automaten
                        </motion.button>
                    </div>

                    {/* Row 2: Category Filters */}
                    <div className="flex gap-2 flex-wrap">
                        {filterList.map(cat => {
                            const activeColor = getCategoryColor(cat);
                            // Force specific colors on text/icon for each category
                            const colorClass = cat === 'fruit' ? 'text-red-500' :
                                cat === 'vegetables' ? 'text-green-500' :
                                    cat === 'dairy' ? 'text-blue-400' :
                                        cat === 'meat' ? 'text-orange-700' :
                                            cat === 'eggs' ? 'text-yellow-500' :
                                                cat === 'honey' ? 'text-amber-500' : 'text-white';

                            const activeClass = activeFilter === cat ? activeColor : `bg-white/10 backdrop-blur-md ${colorClass} border border-white/20 hover:bg-white/20`;
                            return (
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} key={cat} onClick={() => setActiveFilter(cat as any)} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-sm flex items-center gap-2 transition-all active:scale-95 ${activeClass}`}>
                                    <span className={activeFilter === cat ? 'text-current' : colorClass}>{getFilterIcon(cat)}</span>
                                    {t(`filter_${cat}`)}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden relative bg-white/5 backdrop-blur-xl rounded-apple shadow-2xl border border-white/10">
                {!isMapView ? (
                    <div className="h-full overflow-y-auto pb-24 px-6 pt-4 scrollbar-hide">
                        {filteredFarms.length > 0 ? (
                            <div className="flex flex-col gap-3">
                                {filteredFarms.map((farm, index) => (
                                    <motion.div
                                        key={farm.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <FarmCard
                                            farm={farm}
                                            setDetailFarm={setDetailFarm}
                                            toggleFavorite={toggleFavorite}
                                            favorites={favorites}
                                            handleRouteClick={handleRouteClick}
                                            t={t}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                    <Search size={40} className="text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('no_farms_found')}</h3>
                                <p className="text-sm text-slate-500 max-w-sm">
                                    {t('try_different_search')}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="absolute inset-0 rounded-apple overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-100 min-h-[500px] h-full">
                        {isLoaded ? (
                            <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation || defaultCenter} zoom={11} options={googleMapsOptions}>
                                {userLocation && <MarkerF position={userLocation} label="👋" />}
                                {filteredFarms.map(farm => {
                                    // Determine most common category
                                    const categoryCounts: Record<string, number> = {};
                                    farm.products.forEach(p => {
                                        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
                                    });

                                    // Find category with highest count
                                    const primaryCategory = Object.entries(categoryCounts)
                                        .sort((a, b) => b[1] - a[1])[0]?.[0] || 'all';

                                    // Helper function to get color for a category
                                    const getColorForCategory = (category: string) => {
                                        switch (category) {
                                            case 'fruit': return '#ef4444';
                                            case 'vegetables': return '#22c55e';
                                            case 'dairy': return '#60a5fa';
                                            case 'meat': return '#c2410c';
                                            case 'eggs': return '#eab308';
                                            case 'honey': return '#f59e0b';
                                            default: return '#f59e0b';
                                        }
                                    };

                                    // Determine marker color based on active filter or farm's primary category
                                    let markerColor: string;

                                    if (activeFilter !== 'all' && activeFilter !== 'open' && activeFilter !== 'nearby') {
                                        // Use the active filter's color
                                        markerColor = getColorForCategory(activeFilter);
                                    } else {
                                        // Use farm's most common category color
                                        const primaryCategory = Object.entries(categoryCounts)
                                            .sort((a, b) => b[1] - a[1])[0]?.[0] || 'all';
                                        markerColor = getColorForCategory(primaryCategory);
                                    }

                                    return (
                                        <MarkerF
                                            key={`${farm.id}-${activeFilter}`}
                                            position={{ lat: farm.lat, lng: farm.lng }}
                                            onClick={() => setSelectedFarm(farm)}
                                            icon={{
                                                path: google.maps.SymbolPath.CIRCLE,
                                                fillColor: markerColor,
                                                fillOpacity: 1,
                                                strokeColor: '#ffffff',
                                                strokeWeight: 3,
                                                scale: 14,
                                            }}
                                            label={{
                                                text: (activeFilter !== 'all' && activeFilter !== 'open' && activeFilter !== 'nearby')
                                                    ? getFilterIcon(activeFilter)
                                                    : getFarmCategoryIcon(farm),
                                                fontSize: '22px',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                        />
                                    );
                                })}
                                {selectedFarm && (<InfoWindowF position={{ lat: selectedFarm.lat, lng: selectedFarm.lng }} onCloseClick={() => setSelectedFarm(null)}><div className="w-64 p-2 font-sans"><img onClick={() => setDetailFarm(selectedFarm)} src={selectedFarm.image} className="w-full h-32 rounded-xl object-cover mb-3 shadow-md cursor-pointer" alt={selectedFarm.name} /><h3 onClick={() => setDetailFarm(selectedFarm)} className="font-black text-forest mb-1 cursor-pointer">{selectedFarm.name}</h3><p className="text-xs text-slate-400 mb-3">{selectedFarm.address}</p><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setDetailFarm(selectedFarm)} className="w-full bg-mint text-forest py-2 rounded-xl font-bold text-xs">{t('products')}</motion.button></div></InfoWindowF>)}
                            </GoogleMap>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50">
                                {loadError ? (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4"><div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600"><AlertTriangle size={40} /></div><div className="space-y-2"><h3 className="text-lg font-black text-slate-800">{t('map_service_unavailable')}</h3><p className="text-sm text-slate-500 max-w-xs mx-auto">{t('map_config_problem')}</p></div><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsMapView(false)} className="bg-forest text-mint px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg">{t('view_list_view')}</motion.button></motion.div>) : (<div className="space-y-4"><Loader2 size={40} className="text-forest animate-spin mx-auto" /><p className="text-xs font-black text-forest uppercase tracking-widest">{t('map_loading')}</p></div>)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
