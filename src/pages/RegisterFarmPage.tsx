import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tractor, MapPin, Phone, Save, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RegisterFarmPageProps {
    email: string;
    onSuccess: () => void;
    onLogout: () => void;
    lang: string;
}

export const RegisterFarmPage: React.FC<RegisterFarmPageProps> = ({ email, onSuccess, onLogout }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        lat: 50.8503,
        lng: 4.3517
    });
    const addressInputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    // Initialize Google Places Autocomplete
    useEffect(() => {
        // Inject CSS to hide Google Maps error banner
        const style = document.createElement('style');
        style.textContent = `
            .pac-container { z-index: 10000 !important; }
            .gm-err-container, .gm-err-title, .gm-err-message, 
            .dismissButton, div[style*="This page can't load Google Maps correctly"] { 
                display: none !important; 
            }
            .pac-container::after { display: none !important; }
        `;
        document.head.appendChild(style);

        if (window.google && window.google.maps && window.google.maps.places && addressInputRef.current) {
            autocompleteRef.current = new window.google.maps.places.Autocomplete(addressInputRef.current, {
                types: ['address'],
                componentRestrictions: { country: ['be', 'nl'] }, // Belgium and Netherlands
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
        if (!formData.name || !formData.address) return;

        setLoading(true);
        try {
            // 1. Insert new farm linked to this email
            const { error } = await supabase
                .from('farms')
                .insert({
                    name: formData.name,
                    address: formData.address,
                    phone: formData.phone, // Optional
                    lat: formData.lat,
                    lng: formData.lng,
                    owner_email: email,
                    is_verified: false, // Default false, needs approval
                    products: [],
                    status_update: { status: 'open', message: 'Welkom bij Farm Connect' }
                });

            if (error) throw error;

            onSuccess(); // Switch view to pending

        } catch (err) {
            console.error('Error registering farm:', err);
            alert('Er ging iets mis. Probeer het opnieuw.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
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
