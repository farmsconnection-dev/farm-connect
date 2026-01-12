import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Box, MapPin, Save, ToggleLeft, ToggleRight, Check } from 'lucide-react';
import { Farm, ViewState } from '../types';

interface VendingPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
    farms: Farm[];
    setFarms: React.Dispatch<React.SetStateAction<Farm[]>>;
    showToast: (msg: string) => void;
    userProfile: { id?: string };
}

export const VendingPage: React.FC<VendingPageProps> = ({ t, setView, farms, setFarms, showToast, userProfile }) => {
    // Select correct farm by owner ID
    const myFarm = farms.find(f => f.owner_id === userProfile.id);

    // Local state for edits
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState(myFarm?.automaat_adres || myFarm?.address || '');
    const [isActive, setIsActive] = useState(myFarm?.heeft_automaat || false);

    const handleSave = () => {
        if (!myFarm) return;

        setFarms(prev => prev.map(f => f.id === myFarm.id ? {
            ...f,
            heeft_automaat: isActive,
            automaat_adres: address // Assuming this field exists or we reuse address conceptually?Ideally should be separate.
            // Note: DB schema might need 'automaat_adres' column if not present.
            // For now we persist it in state.
        } : f));

        setIsEditing(false);
        showToast("Automaat instellingen opgeslagen");
    };

    const toggleProductInVending = (productId: string) => {
        if (!myFarm) return;
        // Logic to toggle 'in_vending' property on products (requires Product interface update)
        // For now, this is a placeholder for visual UI
        showToast("Product beschikbaarheid aangepast");
    };

    if (!myFarm) return <div className="p-8 text-white">Laden...</div>;

    return (
        <motion.div key="vending" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} className="h-screen w-full flex flex-col pt-32 px-4 sm:px-8 pb-10 max-w-4xl mx-auto overflow-y-auto scrollbar-hide">
            <div className="mb-8 flex items-center gap-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setView('farmer')} className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm text-white hover:bg-white/30 transition-all border border-white/20"><ArrowLeft size={24} /></motion.button>
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md">Mijn Automaat</h1>
                    <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">Beheer je 24/7 Verkoop</p>
                </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-forest flex items-center gap-2"><Box size={24} className="text-mint" /> Instellingen</h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsActive(!isActive)}
                        className={`text-3xl transition-colors ${isActive ? 'text-emerald-500' : 'text-slate-300'}`}
                    >
                        {isActive ? <ToggleRight size={48} /> : <ToggleLeft size={48} />}
                    </motion.button>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Locatie Automaat</label>
                        <div className="relative">
                            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => { setAddress(e.target.value); setIsEditing(true); }}
                                className="w-full bg-slate-50 pl-12 pr-4 py-3 rounded-2xl outline-none transition-all font-bold text-slate-700 focus:ring-2 focus:ring-forest/10"
                                placeholder="Adres automaat (indien anders dan hoeve)"
                            />
                        </div>
                        <p className="text-[10px] text-slate-400 italic ml-2">Laat leeg als de automaat op de hoeve staat.</p>
                    </div>
                </div>

                {(isEditing || isActive !== myFarm.heeft_automaat) && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={handleSave}
                        className="mt-6 w-full bg-forest text-mint py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                        <Save size={18} /> Opslaan
                    </motion.button>
                )}
            </div>

            {isActive && (
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20">
                    <h3 className="text-xl font-bold text-forest mb-6 flex items-center gap-2">📦 Producten in Automaat</h3>
                    <p className="text-sm text-slate-500 mb-4">Selecteer welke producten beschikbaar zijn in de automaat.</p>

                    <div className="grid grid-cols-1 gap-3">
                        {myFarm.products.map(p => (
                            <div key={p.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden">
                                        <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                                    </div>
                                    <span className="font-bold text-slate-700">{p.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-transparent hover:border-emerald-500 hover:text-emerald-500">
                                        <Check size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {myFarm.products.length === 0 && (
                            <div className="text-center text-slate-400 py-4 italic text-sm">Geen producten gevonden in voorraad.</div>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
};
