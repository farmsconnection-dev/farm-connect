// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tractor, MapPin, Phone, Save, Loader2, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RegisterFarmPageProps {
    email: string;
    userId?: string;
    onSuccess: () => void;
    onLogout: () => void;
    lang: string;
    initialName?: string; // New prop for claim link
}

export const RegisterFarmPage: React.FC<RegisterFarmPageProps> = ({ email, userId, onSuccess, onLogout, initialName = '' }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: initialName,
        email: '',
        address: '',
        phone: '',
        lat: 50.8503,
        lng: 4.3517,
        heeft_automaat: false,
        automaat_locatie: 'hoeve', // 'hoeve' or 'anders'
        automaat_adres: ''
    });
    const addressInputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    // Initialize Google Places Autocomplete
    useEffect(() => {
        // Inject CSS to hide Google Maps error banner and fix z-index
        const style = document.createElement('style');
        style.textContent = `
            .pac-container { 
                z-index: 99999 !important; 
                pointer-events: auto !important;
                background-color: white !important;
            }
            .pac-item { 
                cursor: pointer !important; 
                pointer-events: auto !important;
            }
            .pac-item:hover {
                background-color: #f5f5f5 !important;
            }
            .gm-err-container, .gm-err-title, .gm-err-message, 
            .dismissButton, div[style*="This page can't load Google Maps correctly"],
            div[class*="gm-style"] > div:first-child { 
                display: none !important; 
                pointer-events: none !important;
            }
            .pac-container::after { display: none !important; }
        `;
        document.head.appendChild(style);

        if (window.google && window.google.maps && window.google.maps.places && addressInputRef.current) {
            autocompleteRef.current = new window.google.maps.places.Autocomplete(addressInputRef.current, {
                types: ['address'],
                componentRestrictions: { country: 'be' }, // Belgium only
                fields: ['formatted_address', 'geometry']
            });

            autocompleteRef.current.addListener('place_changed', () => {
                const place = autocompleteRef.current?.getPlace();
                if (place && place.geometry && place.geometry.location) {
                    const lat = place.geometry.location.lat();
                    const lng = place.geometry.location.lng();
                    setFormData(prev => ({
                        ...prev,
                        address: place.formatted_address || '',
                        lat,
                        lng
                    }));
                    console.log('📍 Address selected:', place.formatted_address, lat, lng);
                }
            });
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.address || !formData.email) {
            alert('Vul alle verplichte velden in (naam, e-mail en adres).');
            return;
        }

        setLoading(true);

        // Timeout after 15 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
            alert('Registratie duurt te lang. Probeer opnieuw of check je internetverbinding.');
        }, 15000);

        try {
            const { error } = await supabase
                .from('farms')
                .insert({
                    name: formData.name,
                    address: formData.address,
                    phone: formData.phone,
                    lat: formData.lat,
                    lng: formData.lng,
                    owner_email: formData.email,
                    owner_id: userId,
                    heeft_automaat: formData.heeft_automaat,
                    automaat_locatie: formData.heeft_automaat ? formData.automaat_locatie : null,
                    automaat_adres: formData.automaat_locatie === 'anders' ? formData.automaat_adres : null,
                    is_verified: false,
                    products: [],
                    status_update: { status: 'open', message: 'Welkom bij Farm Connect' }
                });

            clearTimeout(timeout);

            if (error) throw error;

            onSuccess();

        } catch (err: any) {
            clearTimeout(timeout);
            console.error('Error registering farm:', err);
            alert(`Er ging iets mis: ${err.message || 'Onbekende fout'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-emerald-50 flex items-start justify-center p-4 pt-28 sm:pt-32">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-[40px] shadow-2xl p-8 max-w-lg w-full"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <Tractor size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-slate-800">Registreer je Boerderij</h1>
                        <p className="text-slate-500 font-medium">Start met verkopen op Farm Connect</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Naam Boerderij</label>
                        <div className="relative">
                            <Tractor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder="Hoe heet je boerderij?"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">E-mailadres</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder="jandeboer@hoeve.be"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Adres</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                ref={addressInputRef}
                                type="text"
                                required
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder="Begin met typen voor suggesties..."
                            />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">📍 Selecteer je adres uit de suggesties voor nauwkeurige locatie</p>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Telefoonnummer (voor verificatie)</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder="Op welk nummer kunnen we je bereiken?"
                            />
                        </div>
                    </div>

                    {/* Automaat Sectie */}
                    <div className="bg-white/50 p-4 rounded-2xl border-2 border-emerald-100">
                        <div
                            className="flex items-center gap-4 cursor-pointer hover:bg-emerald-50 rounded-xl p-2 -m-2 transition-colors"
                            onClick={() => setFormData({ ...formData, heeft_automaat: !formData.heeft_automaat })}
                        >
                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.heeft_automaat ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'}`}>
                                {formData.heeft_automaat && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-black text-slate-700">Ik heb een automaat (24/7)</p>
                                <p className="text-xs text-slate-400 font-medium">Klanten kunnen ook buiten openingsuren kopen</p>
                            </div>
                        </div>

                        {/* Automaat Locatie (alleen zichtbaar als automaat is aangevinkt) */}
                        {formData.heeft_automaat && (
                            <div className="mt-4 pt-4 border-t border-emerald-100 space-y-3">
                                <p className="text-xs font-bold text-slate-500 uppercase">Waar staat de automaat?</p>

                                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-emerald-50">
                                    <input
                                        type="radio"
                                        name="automaat_locatie"
                                        checked={formData.automaat_locatie === 'hoeve'}
                                        onChange={() => setFormData({ ...formData, automaat_locatie: 'hoeve', automaat_adres: '' })}
                                        className="w-4 h-4 text-emerald-500"
                                    />
                                    <span className="text-sm font-bold text-slate-700">Op het hoeve-adres</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-emerald-50">
                                    <input
                                        type="radio"
                                        name="automaat_locatie"
                                        checked={formData.automaat_locatie === 'anders'}
                                        onChange={() => setFormData({ ...formData, automaat_locatie: 'anders' })}
                                        className="w-4 h-4 text-emerald-500"
                                    />
                                    <span className="text-sm font-bold text-slate-700">Op een andere locatie</span>
                                </label>

                                {formData.automaat_locatie === 'anders' && (
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={formData.automaat_adres || ''}
                                            onChange={e => setFormData({ ...formData, automaat_adres: e.target.value })}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-bold text-slate-700 text-sm"
                                            placeholder="Vul het adres van de automaat in..."
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-200 transform active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Registratie Versturen</>}
                    </button>
                </form>

                <button onClick={onLogout} className="mt-6 w-full text-center text-slate-400 text-sm font-bold hover:text-slate-600">
                    Annuleren en uitloggen
                </button>
            </motion.div>
        </div>
    );
};
