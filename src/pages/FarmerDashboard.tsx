// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Share2, TrendingUp, Sparkles, Heart, Eye, Store, Edit2, Upload, Phone, MapPin, Clock, ToggleRight, ToggleLeft, User, Copy, Gift, AlertTriangle, ShieldCheck, Box } from 'lucide-react';
import { Farm, UserProfile, DaySchedule } from '../types';
import { supabase } from '../lib/supabase';
import { DEFAULT_SCHEDULE } from '../constants';

interface FarmerDashboardProps {
    t: (key: string) => string;
    farms: Farm[];
    setFarms: React.Dispatch<React.SetStateAction<Farm[]>>;
    userProfile: UserProfile;
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
    fetchHarvestAdvice: () => void;
    setIsAddFarmOpen: (isOpen: boolean) => void;
    setIsReferralModalOpen: (isOpen: boolean) => void;
    showToast: (msg: string) => void;
    isVerified?: boolean;
    onUpdateFarm?: (farm: Farm) => void;
}

export const FarmerDashboard: React.FC<FarmerDashboardProps> = ({
    t, farms, setFarms, userProfile, setUserProfile, fetchHarvestAdvice, setIsAddFarmOpen, setIsReferralModalOpen, showToast, isVerified = true, onUpdateFarm
}) => {
    const [isEditingFarm, setIsEditingFarm] = useState(false);
    const [isEditingSchedule, setIsEditingSchedule] = useState(false);
    const profileImgInputRef = useRef<HTMLInputElement>(null);

    const [stats, setStats] = useState({
        favoritesCount: 0,
        viewsCount: '0',
        growth: '0%',
        routesCount: 0,
        visitorsCount: 0,
        conversion: '0%'
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [statusDuration, setStatusDuration] = useState('1');

    // INTELLIGENT FARM SELECTION - STRICT OWNERSHIP
    // We selecteren ALLEEN de farm die matcht met de ingelogde user ID.
    // Als de farms nog niet geladen zijn, geven we null terug (geen demo data fallback!)
    const myFarm = farms.find(f => f.owner_id === userProfile.id);

    // Debug
    useEffect(() => {
        console.log("🚜 FarmerDashboard Active Farm:", myFarm);
        console.log("👤 User ID:", userProfile.id);
    }, [myFarm, userProfile.id]);

    useEffect(() => {
        const fetchStats = async () => {
            if (!myFarm?.id) return;
            try {
                // Fetch favorites
                const { count: favoritesCount } = await supabase
                    .from('favorites')
                    .select('*', { count: 'exact', head: true })
                    .eq('farm_id', myFarm.id);

                // Fetch analytics (history for growth calc)
                const now = new Date();
                const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
                const firstDayCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

                const { data: analytics } = await supabase
                    .from('farm_stats')
                    .select('views, visitors, date')
                    .eq('farm_id', myFarm.id)
                    .gte('date', firstDayLastMonth);

                let totalViews = 0;
                let totalVisitors = 0;
                let growthString = '0%';

                if (analytics) {
                    // Totals (from the fetched range, which is last 2 months. 
                    // ideally we'd fetch all-time for totals, but for now this is improved)
                    totalViews = analytics.reduce((acc, curr) => acc + (curr.views || 0), 0);
                    totalVisitors = analytics.reduce((acc, curr) => acc + (curr.visitors || 0), 0);

                    // Calculate Growth (Month over Month)
                    const currentMonthStats = analytics.filter(r => r.date >= firstDayCurrentMonth.split('T')[0]);
                    const lastMonthStats = analytics.filter(r => r.date >= firstDayLastMonth.split('T')[0] && r.date < firstDayCurrentMonth.split('T')[0]);

                    const currentViews = currentMonthStats.reduce((sum, r) => sum + (r.views || 0), 0);
                    const lastViews = lastMonthStats.reduce((sum, r) => sum + (r.views || 0), 0);

                    if (lastViews > 0) {
                        const growth = Math.round(((currentViews - lastViews) / lastViews) * 100);
                        growthString = (growth > 0 ? '+' : '') + growth + '%';
                    } else if (currentViews > 0) {
                        growthString = '+100%';
                    }
                }

                setStats(prev => ({
                    ...prev,
                    favoritesCount: favoritesCount || 0,
                    viewsCount: totalViews > 1000 ? (totalViews / 1000).toFixed(1) + 'K' : totalViews.toString(),
                    visitorsCount: totalVisitors,
                    growth: growthString
                }));

            } catch (err) {
                console.error('Error fetching stats:', err);
            }
        };
        fetchStats();
    }, [myFarm?.id]);

    const handleProfileImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUserProfile(prev => ({ ...prev, photoUrl: URL.createObjectURL(file) }));
            showToast(t('update_profile'));
        }
    };

    const handleUpdatePhone = (val: string) => {
        if (!myFarm) return;
        setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, phone: val } : f));
    };

    const handleUpdateSchedule = (day: string, isOpen: boolean, o: string, c: string) => {
        if (!myFarm) return;
        setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, schedule: (f.schedule || DEFAULT_SCHEDULE).map(s => s.day === day ? { ...s, isOpen, openTime: o, closeTime: c } : s) } : f));
        showToast(t('save'));
    };

    const handleUpdateName = (val: string) => {
        if (!myFarm) return;
        setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, name: val } : f));
    };

    const handleUpdateVendingMachine = (enabled: boolean) => {
        if (!myFarm) return;
        const updatedFarm = { ...myFarm, heeft_automaat: enabled };
        if (onUpdateFarm) onUpdateFarm(updatedFarm);
        else setFarms(prev => prev.map(f => f.id === myFarm.id ? updatedFarm : f));
        showToast(enabled ? 'Automaat geactiveerd' : 'Automaat gedeactiveerd');
    };

    const handleSaveProfile = () => {
        if (!myFarm) return setIsEditingFarm(false);
        if (onUpdateFarm) onUpdateFarm(myFarm);
        setIsEditingFarm(false);
        showToast(t('save'));
    };

    const handleSaveSchedule = () => {
        if (!myFarm) return setIsEditingSchedule(false);
        if (onUpdateFarm) onUpdateFarm(myFarm);
        setIsEditingSchedule(false);
        showToast(t('save'));
    };


    const copyReferralCode = () => {
        if (myFarm?.referralCode) {
            navigator.clipboard.writeText(myFarm.referralCode);
            showToast('Referral code gekopieerd!');
        }
    };

    const shareFacebookProfile = () => {
        if (!myFarm) return;
        const baseUrl = window.location.origin;
        const farmProfileUrl = `${baseUrl}/?farm=${myFarm.id}`;
        const shareText = `🌾 Ontdek ${myFarm.name}! Verse producten, eerlijke prijzen, rechtstreeks van de boer. Zonder de boer geen eten! 🚜🥬`;
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(farmProfileUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(facebookShareUrl, '_blank', 'width=600,height=400,scrollbars=yes');
        showToast('Facebook delen geopend!');
    };

    const copyProfileLink = () => {
        if (!myFarm) return;
        const baseUrl = window.location.origin;
        const farmProfileUrl = `${baseUrl}/?farm=${myFarm.id}`;
        navigator.clipboard.writeText(farmProfileUrl);
        showToast('Profiel link gekopieerd!');
    };

    // Safe access to myFarm properties
    const phoneValue = myFarm?.phone || '';
    const addressValue = myFarm?.address || '';

    return (
        <motion.div key="farmer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen w-full flex flex-col pt-24 pb-10 overflow-y-auto scrollbar-hide">

            {/* HERO HEADER */}
            <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-forest px-4 sm:px-8 py-16 mb-10">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div onClick={() => profileImgInputRef.current?.click()} className="relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 shadow-2xl cursor-pointer group overflow-hidden flex-shrink-0">
                            {userProfile.photoUrl ? (
                                <img src={userProfile.photoUrl} className="w-full h-full object-cover" alt="Profile" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/50"><User size={48} /></div>
                            )}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Upload size={24} />
                            </div>
                            <input type="file" ref={profileImgInputRef} className="hidden" accept="image/*" onChange={handleProfileImageFile} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap items-center gap-3 mb-2 justify-center md:justify-start">
                                <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg m-0">
                                    Welkom terug, {(!myFarm || myFarm.id === '1') ? userProfile.name.split(' ')[0] : myFarm.name}! 👋
                                </h1>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsReferralModalOpen(true)}
                                    className="bg-amber-400 text-amber-900 text-xs sm:text-sm px-4 py-2 rounded-full font-black uppercase tracking-wide shadow-lg hover:bg-amber-300 transition-colors flex items-center gap-2 border-2 border-amber-200"
                                >
                                    <Gift size={16} /> Nodig uit & Verdien €20
                                </motion.button>
                            </div>
                            <p className="text-emerald-100 text-lg font-medium mb-6 max-w-2xl leading-relaxed">Bedankt dat je deel uitmaakt van dit initiatief. Samen maken we een vuist voor eerlijke prijzen en kortere ketens.</p>


                        </div>

                        {(!myFarm || myFarm.id === '1') && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsAddFarmOpen(true)}
                                className="bg-white text-forest px-8 py-4 rounded-2xl font-black uppercase tracking-wide shadow-xl flex items-center gap-2 whitespace-nowrap"
                            >
                                <Store size={20} /> Registreer mijn boerderij
                            </motion.button>
                        )}
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full space-y-8">

                {/* NO FARM BANNER */}
                {myFarm?.id === '1' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 rounded-3xl shadow-xl overflow-hidden border border-emerald-500/30">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                                <MapPin size={32} className="text-emerald-100" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-black text-white mb-2">Je hebt nog geen boerderij geregistreerd</h3>
                                <p className="text-emerald-100/90 text-lg">Zet jezelf vandaag nog op de kaart en laat de buurt zien waar hun eten vandaan komt!</p>
                            </div>
                            <button onClick={() => setIsAddFarmOpen(true)} className="bg-white text-emerald-800 px-6 py-3 rounded-xl font-black uppercase text-sm shadow-lg hover:bg-emerald-50 transition-colors">
                                Registreer Nu
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* VERIFICATION PENDING BANNER */}
                {!isVerified && (
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="relative bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-3xl shadow-lg overflow-hidden border-2 border-amber-300"
                    >
                        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl">
                                <ShieldCheck size={32} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-black text-white mb-1 flex items-center gap-2">
                                    <AlertTriangle size={18} /> Verificatie In Behandeling
                                </h3>
                                <p className="text-amber-100 text-sm leading-relaxed">
                                    Je profiel is nog niet publiek zichtbaar. We verifiëren je gegevens binnen 24 uur.
                                    In de tussentijd kun je alvast je profiel en producten volledig invullen.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -right-8 -bottom-8 text-white/10 pointer-events-none">
                            <ShieldCheck size={120} />
                        </div>
                    </motion.div>
                )}

                {/* COMPACT REFERRAL - MOVED TO MENU */}

                {/* SOCIAL SHARE SECTION */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-3xl shadow-lg overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Share2 size={20} className="text-white" />
                                <h3 className="text-lg font-black text-white">Deel je Boerderij</h3>
                            </div>
                            <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                                Laat de wereld weten waar ze verse, eerlijke producten kunnen vinden.
                                <span className="font-bold"> Zonder de boer geen eten!</span> 🌾
                            </p>
                        </div>

                        <div className="flex gap-3 flex-wrap">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={shareFacebookProfile}
                                className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-5 py-3 rounded-xl font-bold uppercase text-xs flex items-center gap-2 shadow-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Deel op Facebook
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={copyProfileLink}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-3 rounded-xl font-bold uppercase text-xs flex items-center gap-2 border border-white/30 transition-colors"
                            >
                                <Copy size={16} />
                                Kopieer Link
                            </motion.button>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">Preview van je bericht:</p>
                        <p className="text-sm text-white italic">
                            🌾 Ontdek {myFarm?.name || 'je boerderij'}! Verse producten, eerlijke prijzen, rechtstreeks van de boer. Zonder de boer geen eten! 🚜🥬
                        </p>
                    </div>

                    <div className="absolute -right-8 -bottom-8 text-white/5 pointer-events-none">
                        <Share2 size={120} />
                    </div>
                </motion.div>

                {/* EXPANDED STATS */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3">
                            <TrendingUp size={24} className="text-emerald-400" /> {t('dashboard_overview')}
                        </h2>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={fetchHarvestAdvice} className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-black uppercase text-xs shadow-lg">
                            <Sparkles size={18} /> {t('smart_tips')}
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-pink-500/20 p-4 rounded-2xl"><Heart size={32} className="text-pink-300" fill="currentColor" /></div>
                                <span className="text-sm font-bold text-emerald-300">Actueel</span>
                            </div>
                            <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-2">{t('stat_favorites')}</p>
                            <p className="text-5xl font-black text-white mb-1">{stats.favoritesCount}</p>
                            <p className="text-xs text-white/60">Real-time data</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-blue-500/20 p-4 rounded-2xl"><Eye size={32} className="text-blue-300" /></div>
                                <span className="text-sm font-bold text-emerald-300">Totaal</span>
                            </div>
                            <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-2">{t('stat_views')}</p>
                            <p className="text-5xl font-black text-white mb-3">{stats.viewsCount}</p>

                            <svg className="w-full h-16" viewBox="0 0 200 40" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="viewsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(147 197 253)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="rgb(147 197 253)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0,35 L 20,30 L 40,28 L 60,25 L 80,20 L 100,18 L 120,15 L 140,12 L 160,8 L 180,5 L 200,3" fill="none" stroke="rgb(147 197 253)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 0,35 L 20,30 L 40,28 L 60,25 L 80,20 L 100,18 L 120,15 L 140,12 L 160,8 L 180,5 L 200,3 L 200,40 L 0,40 Z" fill="url(#viewsGradient)" />
                            </svg>
                            <p className="text-xs text-white/60 mt-2">{t('last_7_days')}</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.02 }} className="bg-emerald-500/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-emerald-500/30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-emerald-400/20 p-4 rounded-2xl"><TrendingUp size={32} className="text-emerald-300" /></div>
                                <span className="text-sm font-bold text-emerald-200">{t('monthly')}</span>
                            </div>
                            <p className="text-xs font-black text-emerald-100/40 uppercase tracking-widest mb-2">{t('total_growth')}</p>
                            <p className="text-5xl font-black text-white mb-1">{stats.growth}</p>
                            <p className="text-xs text-emerald-200/60">{t('compared_last_month')}</p>
                        </motion.div>
                    </div>

                    {/* ROUTES & CONVERSION STATS REMOVED (Coming Soon) */}
                </div>

                {/* STATUS UPDATE SECTION */}
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20">
                    <h3 className="text-2xl font-bold text-forest mb-6 flex items-center gap-3">
                        <TrendingUp size={28} className="text-orange-500" /> Status Update
                    </h3>
                    <p className="text-sm text-slate-600 mb-6">
                        Deel een tijdelijke actie of boodschap met je klanten. Deze verschijnt prominent op je boerderijkaart.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase ml-2 mb-2 block">Boodschap</label>
                            <input
                                type="text"
                                placeholder="Bijv: Verse aardbeien nu beschikbaar! 🍓"
                                className="w-full bg-slate-50 px-4 py-3 rounded-2xl outline-none ring-2 ring-transparent focus:ring-orange-500/20 transition-all font-bold text-slate-700"
                                value={statusMessage}
                                onChange={(e) => setStatusMessage(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase ml-2 mb-2 block">Geldig voor</label>
                                <select
                                    className="w-full bg-slate-50 px-4 py-3 rounded-2xl outline-none ring-2 ring-transparent focus:ring-orange-500/20 transition-all font-bold text-slate-700"
                                    value={statusDuration}
                                    onChange={(e) => setStatusDuration(e.target.value)}
                                >
                                    <option value="1">1 dag</option>
                                    <option value="2">2 dagen</option>
                                    <option value="3">3 dagen</option>
                                    <option value="5">5 dagen</option>
                                    <option value="7">7 dagen</option>
                                </select>
                            </div>

                            <div className="flex items-end">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        if (statusMessage && myFarm) {
                                            const days = parseInt(statusDuration);
                                            const expiresAt = new Date();
                                            expiresAt.setDate(expiresAt.getDate() + days);

                                            // Optimistic Update
                                            const updatedFarm = {
                                                ...myFarm,
                                                statusUpdate: { message: statusMessage, expiresAt: expiresAt.toISOString() }
                                            };

                                            // Call global update handler or local setFarms
                                            if (onUpdateFarm) {
                                                onUpdateFarm(updatedFarm);
                                            } else {
                                                setFarms(prev => prev.map(f => f.id === myFarm.id ? updatedFarm : f));
                                            }

                                            showToast(`Status update gepubliceerd voor ${days} dag${days > 1 ? 'en' : ''}!`);
                                            setStatusMessage(''); // Clear input
                                        }
                                    }}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-black uppercase text-sm shadow-lg whitespace-nowrap"
                                >
                                    Publiceer
                                </motion.button>
                            </div>
                        </div>

                        {myFarm?.statusUpdate && new Date(myFarm.statusUpdate.expiresAt) > new Date() && (
                            <div className="mt-4 p-4 bg-orange-50 border-2 border-orange-200 rounded-2xl">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-xs font-black text-orange-600 uppercase mb-1">Actieve Status</p>
                                        <p className="text-sm font-bold text-orange-900">{myFarm.statusUpdate.message}</p>
                                        <p className="text-xs text-orange-600 mt-1">
                                            Vervalt op: {new Date(myFarm.statusUpdate.expiresAt).toLocaleDateString('nl-NL')}
                                        </p>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            if (myFarm) {
                                                setFarms(prev => prev.map(f =>
                                                    f.id === myFarm.id ? { ...f, statusUpdate: undefined } : f
                                                ));
                                                showToast('Status update verwijderd');
                                            }
                                        }}
                                        className="text-orange-600 hover:text-orange-800 font-black text-xs"
                                    >
                                        ✕
                                    </motion.button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* FARM DETAILS */}
                {/* FARM DETAILS & SCHEDULE MOVED TO 'Mijn Boerderij' PAGE */}
            </div>
        </motion.div>
    );
};
