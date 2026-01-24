// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tractor, MapPin, Phone, Save, Loader2, Mail, Home, Store } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { sanitizeFormData, validateEmail, validatePhone, MAX_LENGTHS } from '../utils/security';

interface RegisterFarmPageProps {
    email: string;
    userId?: string;
    onSuccess: (email: string) => void;
    onLogout: () => void;
    lang: string;
    t: (key: string) => string;
    initialName?: string; // New prop for claim link
}

export const RegisterFarmPage: React.FC<RegisterFarmPageProps> = ({ email: authEmail, userId, onSuccess, onLogout, lang, t, initialName = '' }) => {
    const [loading, setLoading] = useState(false);
    const [registrationType, setRegistrationType] = useState<'boerderij' | 'automaat'>('boerderij');
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
    const automaatAddressInputRef = useRef<HTMLInputElement>(null);
    const automaatAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

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

        // Basic presence validation
        if (!formData.name || !formData.address || !formData.email) {
            alert('Vul alle verplichte velden in (naam, e-mail en adres).');
            return;
        }

        // Sanitize and validate all inputs
        try {
            const sanitized = sanitizeFormData({
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                email: formData.email
            });

            setLoading(true);

            // Timeout after 15 seconds
            const timeout = setTimeout(() => {
                setLoading(false);
                alert('Registratie duurt te lang. Probeer opnieuw of check je internetverbinding.');
            }, 15000);

            try {
                console.log('🚜 Submitting farm registration...', {
                    name: sanitized.name,
                    address: sanitized.address,
                    authEmail: authEmail, // from props (logged in user)
                    formEmail: sanitized.email,
                    userId
                });

                // Build insert data with sanitized values
                const insertData: any = {
                    name: sanitized.name,
                    address: sanitized.address,
                    phone: sanitized.phone || sanitized.email,
                    lat: formData.lat,
                    lng: formData.lng,
                    owner_email: sanitized.email || authEmail, // Use form email first
                    products: [],
                    is_verified: false // New farms hidden until admin verifies
                };

                // Add optional fields if they have values
                if (userId) insertData.owner_id = userId;
                if (formData.heeft_automaat !== undefined) insertData.heeft_automaat = formData.heeft_automaat;
                if (formData.heeft_automaat && formData.automaat_locatie) {
                    insertData.automaat_locatie = formData.automaat_locatie;
                }
                if (formData.automaat_locatie === 'anders' && formData.automaat_adres) {
                    insertData.automaat_adres = formData.automaat_adres;
                }

                console.log('🚀 Starting Supabase RAW FETCH insert...', insertData);

                // GEBRUIK RAW FETCH OM CLIENT ISSUES TE OMZEILEN
                const restUrl = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/farms`;

                const response = await fetch(restUrl, {
                    method: 'POST',
                    headers: {
                        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify(insertData)
                });

                console.log('🏁 Raw Fetch status:', response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('❌ Raw Fetch Error Body:', errorText);
                    throw new Error(`Server reageerde met status ${response.status}: ${errorText}`);
                }

                console.log('✅ Farm registered successfully via Raw Fetch!');
                clearTimeout(timeout);

                // Succesvol geregistreerd -> ga naar dashboard
                onSuccess(formData.email || authEmail);

            } catch (err) {
                clearTimeout(timeout);
                console.error('❌ Error registering farm:', err);

                // More helpful error messages
                let errorMessage = err.message || 'Onbekende fout';
                if (err.code === '42501' || err.message?.includes('policy')) {
                    errorMessage = 'Toegang geweigerd. Zorg dat je bent ingelogd met hetzelfde e-mailadres.';
                } else if (err.code === '23505') {
                    errorMessage = 'Deze boerderij bestaat al.';
                }

                alert(`Er ging iets mis: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        } catch (validationError) {
            // Handle validation/sanitization errors
            alert(validationError.message || 'Ongeldige invoer. Controleer je gegevens.');
        }
    };

    return (
        <div className="min-h-screen bg-emerald-50 flex items-start justify-center p-4 pt-28 sm:pt-32">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-[40px] shadow-2xl p-8 max-w-lg w-full"
            >
                {/* Registration Type Switch */}
                <div className="mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">Type Registratie</p>
                    <div className="bg-slate-100 p-1 rounded-xl flex items-center relative">
                        <motion.div
                            className="absolute bg-emerald-500 shadow-lg rounded-lg h-[calc(100%-8px)] w-[calc(50%-4px)] top-1"
                            initial={false}
                            animate={{ x: registrationType === 'boerderij' ? 4 : 'calc(100% + 4px)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setRegistrationType('boerderij');
                                setFormData(prev => ({ ...prev, heeft_automaat: false }));
                            }}
                            className={`relative z-10 flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 rounded-lg ${registrationType === 'boerderij' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <Home size={18} />
                            Boerderij
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setRegistrationType('automaat');
                                setFormData(prev => ({ ...prev, heeft_automaat: true }));
                            }}
                            className={`relative z-10 flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 rounded-lg ${registrationType === 'automaat' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <Store size={18} />
                            Solo Automaat
                        </button>
                    </div>
                    <p className="text-xs text-slate-400 text-center mt-2">
                        {registrationType === 'boerderij'
                            ? 'Volledige boerderijpagina met 1 automaat inbegrepen'
                            : 'Alleen automaat registreren, zonder boerderijprofiel'}
                    </p>
                </div>

                {/* Dynamic Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${registrationType === 'boerderij' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                        {registrationType === 'boerderij' ? <Tractor size={32} /> : <Store size={32} />}
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-slate-800">
                            {registrationType === 'boerderij' ? 'Registreer je Boerderij' : 'Registreer je Automaat'}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {registrationType === 'boerderij' ? t('register_farm_subtitle') : 'Maak je automaat vindbaar'}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field - Dynamic label */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            {registrationType === 'boerderij' ? t('farm_name') : 'Naam Automaat'}
                        </label>
                        <div className="relative">
                            {registrationType === 'boerderij'
                                ? <Tractor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                : <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            }
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder={registrationType === 'boerderij' ? t('farm_name_placeholder') : 'Aardappelautomaat De Bie'}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('email_label')}</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder={t('email_placeholder')}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('address_label')}</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                ref={addressInputRef}
                                type="text"
                                required
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder={t('address_placeholder')}
                            />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{t('address_hint')}</p>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('phone_label')}</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-emerald-500 focus:outline-none font-bold text-slate-700"
                                placeholder={t('phone_placeholder')}
                            />
                        </div>
                    </div>

                    {/* Automaat Sectie - Only show for Boerderij */}
                    {registrationType === 'boerderij' ? (
                        <div className="bg-white/50 p-4 rounded-2xl border-2 border-emerald-100">
                            <div
                                className="flex items-center gap-4 cursor-pointer hover:bg-emerald-50 rounded-xl p-2 -m-2 transition-colors"
                                onClick={() => setFormData({ ...formData, heeft_automaat: !formData.heeft_automaat })}
                            >
                                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.heeft_automaat ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'}`}>
                                    {formData.heeft_automaat && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-black text-slate-700">{t('vending_machine_title')}</p>
                                    <p className="text-xs text-slate-400 font-medium">{t('vending_machine_subtitle')}</p>
                                </div>
                            </div>

                            {/* Automaat Locatie (alleen zichtbaar als automaat is aangevinkt) */}
                            {formData.heeft_automaat && (
                                <div className="mt-4 pt-4 border-t border-emerald-100 space-y-3">
                                    <p className="text-xs font-bold text-slate-500 uppercase">{t('vending_machine_location_q')}</p>

                                    <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-emerald-50">
                                        <input
                                            type="radio"
                                            name="automaat_locatie"
                                            checked={formData.automaat_locatie === 'hoeve'}
                                            onChange={() => setFormData({ ...formData, automaat_locatie: 'hoeve', automaat_adres: '' })}
                                            className="w-4 h-4 text-emerald-500"
                                        />
                                        <span className="text-sm font-bold text-slate-700">{t('vending_machine_at_farm')}</span>
                                    </label>

                                    <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-emerald-50">
                                        <input
                                            type="radio"
                                            name="automaat_locatie"
                                            checked={formData.automaat_locatie === 'anders'}
                                            onChange={() => setFormData({ ...formData, automaat_locatie: 'anders' })}
                                            className="w-4 h-4 text-emerald-500"
                                        />
                                        <span className="text-sm font-bold text-slate-700">{t('vending_machine_other_location')}</span>
                                    </label>

                                    {formData.automaat_locatie === 'anders' && (
                                        <div className="mt-2">
                                            <input
                                                ref={automaatAddressInputRef}
                                                type="text"
                                                value={formData.automaat_adres || ''}
                                                onChange={e => setFormData({ ...formData, automaat_adres: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none font-bold text-slate-700 text-sm"
                                                placeholder={t('vending_machine_other_placeholder')}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Solo Automaat - Locked indicator */
                        <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-200">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-lg bg-amber-500 border-2 border-amber-500 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-black text-slate-700">Automaat registratie</p>
                                    <p className="text-xs text-slate-400 font-medium">Zonder boerderijprofiel - Het adres hierboven is de locatie van je automaat</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-200 transform active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> {t('submit_registration')}</>}
                    </button>
                </form>

                <button onClick={onLogout} className="mt-6 w-full text-center text-slate-400 text-sm font-bold hover:text-slate-600">
                    {t('cancel_logout')}
                </button>
            </motion.div >
        </div >
    );
};
