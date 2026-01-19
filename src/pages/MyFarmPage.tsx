// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Edit2, Save, MapPin, Store, Clock, ToggleLeft, ToggleRight, Loader2, Trash2, Camera, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Farm, ViewState } from '../types';
import { DEFAULT_SCHEDULE } from '../constants';

interface MyFarmPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
    farms: Farm[];
    setFarms: React.Dispatch<React.SetStateAction<Farm[]>>;
    onUpdateFarm?: (farm: Farm) => void;
    showToast: (msg: string) => void;
    userProfile: { id?: string };
    setIsReferralModalOpen: (open: boolean) => void;
}

export const MyFarmPage: React.FC<MyFarmPageProps> = ({ t, setView, farms, setFarms, onUpdateFarm, showToast, userProfile, setIsReferralModalOpen }) => {
    const myFarm = farms.find(f => f.owner_id === userProfile.id);

    const [isEditingFarm, setIsEditingFarm] = useState(false);
    const [isEditingSchedule, setIsEditingSchedule] = useState(false);

    // Initial load check
    if (!myFarm) return <div className="p-8 text-white flex items-center gap-2"><Loader2 className="animate-spin" /> Profiel laden...</div>;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                const updatedFarm = { ...myFarm, image: base64 };
                setFarms(prev => prev.map(f => f.id === myFarm.id ? updatedFarm : f));
                // Persist to database
                if (onUpdateFarm) {
                    onUpdateFarm(updatedFarm);
                }
                showToast('Profielfoto opgeslagen');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateName = (val: string) => {
        setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, name: val } : f));
    };

    const handleSaveProfile = () => {
        if (onUpdateFarm) onUpdateFarm(myFarm);
        setIsEditingFarm(false);
        showToast(t('save'));
    };

    const handleSaveSchedule = () => {
        // Get the current farm state (myFarm might be stale)
        const currentFarm = farms.find(f => f.id === myFarm.id);
        if (onUpdateFarm && currentFarm) {
            onUpdateFarm(currentFarm);
        }
        setIsEditingSchedule(false);
        showToast(t('save'));
    };

    const handleDeleteFarm = async () => {
        if (!window.confirm("Weet je zeker dat je je boerderij wilt verwijderen? Dit kan niet ongedaan worden gemaakt.")) {
            return;
        }

        try {
            const { error } = await supabase.from('farms').delete().eq('id', myFarm.id);

            if (error) {
                console.error("Delete error:", error);
                // Fallback for demo mode or RLS issues:
                setFarms(prev => prev.filter(f => f.id !== myFarm.id));
                setView('landing');
                showToast("Boerderij verwijderd (lokaal)");
                return;
            }

            setFarms(prev => prev.filter(f => f.id !== myFarm.id));
            setView('landing');
            showToast("Boerderij succesvol verwijderd");
        } catch (err) {
            console.error(err);
            showToast("Er ging iets mis.");
        }
    };

    // Helper to ensure schedule exists
    const hasSchedule = myFarm.schedule && myFarm.schedule.length > 0;
    // Use default schedule for rendering if missing (but don't save automatically unless user clicks)
    const displaySchedule = hasSchedule ? myFarm.schedule : DEFAULT_SCHEDULE;

    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} className="h-screen w-full flex flex-col pt-32 px-4 sm:px-8 pb-20 max-w-4xl mx-auto overflow-y-auto scrollbar-hide">
            <div className="mb-8 flex items-center gap-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setView('farmer')} className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm text-white hover:bg-white/30 transition-all border border-white/20"><ArrowLeft size={24} /></motion.button>
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md">Mijn Boerderij</h1>
                    <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">Beheer je profiel & uren</p>
                </div>
            </div>

            {/* --- Farm Profile Section --- */}
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2"><Store size={24} className="text-emerald-500" /> Profiel Gegevens</h3>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => isEditingFarm ? handleSaveProfile() : setIsEditingFarm(true)} className="text-xs font-black text-emerald-700 uppercase flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-xl">
                        {isEditingFarm ? <><Save size={14} /> {t('save')}</> : <><Edit2 size={14} /> Wijzig</>}
                    </motion.button>
                </div>

                <div className="space-y-6">

                    <div className="flex justify-center mb-2">
                        <div className="relative group">
                            <img
                                src={myFarm.image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef"}
                                alt={myFarm.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg bg-emerald-100"
                            />
                            {isEditingFarm && (
                                <label className="absolute bottom-0 right-0 p-2 bg-emerald-500 text-white rounded-full cursor-pointer hover:bg-emerald-600 shadow-md transition-all hover:scale-110">
                                    <Camera size={18} />
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                </label>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1 mb-1 block">Naam Boerderij</label>
                        <input
                            type="text"
                            disabled={!isEditingFarm}
                            value={myFarm.name}
                            onChange={(e) => handleUpdateName(e.target.value)}
                            className={`w-full bg-slate-50 px-4 py-3 rounded-xl outline-none font-bold text-slate-800 transition-all ${isEditingFarm ? 'ring-2 ring-emerald-500/20 bg-white' : ''}`}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1 mb-1 block">Adres</label>
                        <div className="w-full bg-slate-50 px-4 py-3 rounded-xl font-bold text-slate-600 flex items-center gap-2 border border-slate-100">
                            <MapPin size={16} /> {myFarm.address}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Privacy Settings Section --- */}
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 mb-8">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2 mb-2">
                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Privacy Instellingen
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Beheer wat klanten kunnen zien</p>
                </div>

                <div className="space-y-4">
                    {/* Phone Visibility Toggle */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex-1">
                            <p className="font-bold text-slate-800 mb-1">Telefoonnummer zichtbaar</p>
                            <p className="text-xs text-slate-500">Toon je telefoonnummer aan klanten op je profiel</p>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const newValue = !(myFarm.phone_visible ?? true);
                                setFarms(prev => prev.map(f =>
                                    f.id === myFarm.id ? { ...f, phone_visible: newValue } : f
                                ));
                                if (onUpdateFarm) {
                                    onUpdateFarm({ ...myFarm, phone_visible: newValue });
                                }
                                showToast(newValue ? 'Telefoonnummer is nu zichtbaar' : 'Telefoonnummer is nu verborgen');
                            }}
                            className={`relative w-14 h-8 rounded-full transition-colors ${(myFarm.phone_visible ?? true) ? 'bg-emerald-500' : 'bg-slate-300'
                                }`}
                        >
                            <motion.div
                                animate={{ x: (myFarm.phone_visible ?? true) ? 24 : 2 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                            />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* --- Opening Hours Section --- */}
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2"><Clock size={24} className="text-emerald-500" /> {t('opening_hours')}</h3>

                    {/* Always show edit button if we have a schedule (even if it's default fallback visible) OR allow creating one */}
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => isEditingSchedule ? handleSaveSchedule() : setIsEditingSchedule(true)} className="text-xs font-black text-emerald-700 uppercase flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-xl">
                        {isEditingSchedule ? <><Save size={14} /> {t('save')}</> : <><Edit2 size={14} /> Wijzig</>}
                    </motion.button>
                </div>

                {!hasSchedule && !isEditingSchedule ? (
                    <div className="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-500 mb-4 text-sm font-bold">Nog geen openingsuren ingesteld.</p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                const newSchedule = DEFAULT_SCHEDULE;
                                const updatedFarm = { ...myFarm, schedule: newSchedule };
                                setFarms(prev => prev.map(f => f.id === myFarm.id ? updatedFarm : f));
                                if (onUpdateFarm) onUpdateFarm(updatedFarm);
                                showToast("Standaard uren geladen");
                            }} className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg">
                            Laad Standaard Uren
                        </motion.button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                        {displaySchedule.map((s, index) => (
                            <div key={s.day || index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded-lg transition-colors">
                                <span className="text-sm font-bold text-slate-500 w-24 capitalize">{t(`day_${s.day}`) || s.day}</span>
                                {isEditingSchedule ? (
                                    <div className="flex items-center gap-2">
                                        <input type="time" value={s.openTime} onChange={(e) => {
                                            const newS = [...(myFarm.schedule || DEFAULT_SCHEDULE)];
                                            newS[index] = { ...s, openTime: e.target.value };
                                            setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, schedule: newS } : f));
                                        }} className="bg-white border border-slate-200 rounded-lg p-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20" />
                                        <span className="text-slate-300 font-bold">-</span>
                                        <input type="time" value={s.closeTime} onChange={(e) => {
                                            const newS = [...(myFarm.schedule || DEFAULT_SCHEDULE)];
                                            newS[index] = { ...s, closeTime: e.target.value };
                                            setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, schedule: newS } : f));
                                        }} className="bg-white border border-slate-200 rounded-lg p-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20" />
                                        <button onClick={() => {
                                            const newS = [...(myFarm.schedule || DEFAULT_SCHEDULE)];
                                            newS[index] = { ...s, isOpen: !s.isOpen };
                                            setFarms(prev => prev.map(f => f.id === myFarm.id ? { ...f, schedule: newS } : f));
                                        }} className="ml-1 p-1 hover:bg-slate-100 rounded-full">
                                            {s.isOpen ? <ToggleRight className="text-emerald-500" size={26} /> : <ToggleLeft className="text-slate-300" size={26} />}
                                        </button>
                                    </div>
                                ) : (
                                    <span className={`font-black text-sm ${s.isOpen ? 'text-emerald-700' : 'text-slate-300'}`}>
                                        {s.isOpen ? `${s.openTime} - ${s.closeTime}` : t('closed')}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col items-center justify-center pb-24 gap-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsReferralModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-200 flex items-center justify-center gap-3 uppercase tracking-wide border-b-4 border-orange-600 active:border-b-0 active:translate-y-1 transition-all"
                >
                    <Sparkles size={24} className="animate-pulse" /> {t('referral_share_promo') || "Maak mijn boerderij zichtbaar"}
                </motion.button>
                <p className="text-slate-400 text-xs font-bold max-w-xs text-center">
                    Deel je unieke code en ontvang bonussen voor elke nieuwe boerderij die zich aansluit!
                </p>

                <button onClick={handleDeleteFarm} className="mt-8 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-red-300 hover:text-red-500 hover:bg-red-50 font-bold transition-all text-[10px] uppercase tracking-widest">
                    <Trash2 size={14} />
                    Verwijder mijn boerderij
                </button>
            </div>
        </motion.div>
    );
};
