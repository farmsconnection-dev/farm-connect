import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Autocomplete } from '@react-google-maps/api';
import { Store, Home, Check, Zap } from 'lucide-react';

interface AddFarmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (name: string, address: string, referralCode: string, isAnnual: boolean, packageType: string) => void;
    t: (key: string) => string;
    showToast: (msg: string) => void;
}

// Pricing constants
const FARM_PACKAGES = [
    { id: 'trial', label: 'Trial', price: 0, period: '1 maand', badge: 'GRATIS', perMonth: 0 },
    { id: 'monthly', label: 'Maandelijks', price: 10, period: '/maand', perMonth: 10 },
    { id: 'annual', label: 'Jaarlijks', price: 96, period: '/jaar', perMonth: 8, savings: 24, badge: '-20%' },
];

const AUTOMAAT_PACKAGES = [
    { id: 'trial', label: 'Trial', price: 0, period: '1 maand', badge: 'GRATIS', perMonth: 0 },
    { id: '1month', label: '1 Maand', price: 5, period: '/maand', perMonth: 5 },
    { id: '6months', label: '6 Maanden', price: 18, period: '/halfjaar', perMonth: 3, savings: 12, badge: '-40%' },
    { id: '12months', label: '12 Maanden', price: 24, period: '/jaar', perMonth: 2, savings: 36, badge: '-60%' },
];

export const AddFarmModal: React.FC<AddFarmModalProps> = ({ isOpen, onClose, onAdd, t, showToast }) => {
    const [registrationType, setRegistrationType] = useState<'boerderij' | 'automaat'>('boerderij');
    const [selectedPlan, setSelectedPlan] = useState('trial');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [heeftAutomaat, setHeeftAutomaat] = useState(false);
    const autocompleteRef = useRef<any>(null);

    const packages = registrationType === 'boerderij' ? FARM_PACKAGES : AUTOMAAT_PACKAGES;
    const selectedOption = packages.find(o => o.id === selectedPlan) || packages[0];

    const handlePlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place.formatted_address) {
                setAddress(place.formatted_address);
            }
        }
    };

    const handleTypeChange = (type: 'boerderij' | 'automaat') => {
        setRegistrationType(type);
        setSelectedPlan('trial'); // Reset plan when type changes
        if (type === 'automaat') {
            setHeeftAutomaat(true); // Auto-select for solo automaat
        }
    };

    const handleRegister = () => {
        const isAnnual = selectedPlan === 'annual' || selectedPlan === '12months';
        const packageName = registrationType === 'boerderij'
            ? `Boerderij Pakket - ${selectedOption.label}`
            : `Solo Automaat - ${selectedOption.label}`;

        onAdd(name, address, referralCode, isAnnual, packageName);

        // Reset form
        setRegistrationType('boerderij');
        setSelectedPlan('trial');
        setName('');
        setAddress('');
        setReferralCode('');
        setHeeftAutomaat(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/10 backdrop-blur-2xl p-6 sm:p-8 rounded-[32px] shadow-2xl max-w-md w-full relative border border-white/20 text-white max-h-[90vh] overflow-y-auto"
            >
                {/* Type Registration Switch - Top of form */}
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 text-center">Type Registratie</p>
                    <div className="bg-black/30 p-1 rounded-xl flex items-center relative">
                        <motion.div
                            className="absolute bg-emerald-500 shadow-lg rounded-lg h-[calc(100%-8px)] w-[calc(50%-4px)] top-1"
                            initial={false}
                            animate={{ x: registrationType === 'boerderij' ? 4 : 'calc(100% + 4px)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => handleTypeChange('boerderij')}
                            className={`relative z-10 flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 rounded-lg ${registrationType === 'boerderij' ? 'text-white' : 'text-white/50 hover:text-white/70'
                                }`}
                        >
                            <Home size={18} />
                            <span className="hidden sm:inline">Boerderij</span>
                            <span className="sm:hidden">🏠</span>
                        </button>
                        <button
                            onClick={() => handleTypeChange('automaat')}
                            className={`relative z-10 flex-1 py-3 px-4 text-sm font-bold transition-colors flex items-center justify-center gap-2 rounded-lg ${registrationType === 'automaat' ? 'text-white' : 'text-white/50 hover:text-white/70'
                                }`}
                        >
                            <Store size={18} />
                            <span className="hidden sm:inline">Solo Automaat</span>
                            <span className="sm:hidden">🤖</span>
                        </button>
                    </div>
                    <p className="text-[10px] text-white/40 text-center mt-2">
                        {registrationType === 'boerderij'
                            ? 'Volledige boerderijpagina met 1 automaat inbegrepen'
                            : 'Alleen automaat registreren, zonder boerderijprofiel'}
                    </p>
                </div>

                {/* Dynamic Title */}
                <h3 className="text-2xl font-black mb-6">
                    {registrationType === 'boerderij' ? 'Registreer je Boerderij' : 'Registreer je Automaat'}
                </h3>

                <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                            {registrationType === 'boerderij' ? 'Naam boerderij' : 'Naam automaat'}
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors"
                            placeholder={registrationType === 'boerderij' ? 'De Groene Weide' : 'Aardappelautomaat De Bie'}
                        />
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                            {registrationType === 'boerderij' ? 'Adres boerderij' : 'Locatie automaat'}
                        </label>
                        <Autocomplete
                            onLoad={(autocomplete) => { autocompleteRef.current = autocomplete; }}
                            onPlaceChanged={handlePlaceChanged}
                            options={{ componentRestrictions: { country: 'be' } }}
                        >
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors"
                                placeholder="Dorpstraat 1, 9000 Gent"
                            />
                        </Autocomplete>
                    </div>

                    {/* Automaat Checkbox - Only for Boerderij */}
                    {registrationType === 'boerderij' && (
                        <div
                            onClick={() => setHeeftAutomaat(!heeftAutomaat)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${heeftAutomaat
                                    ? 'border-emerald-400 bg-emerald-500/20'
                                    : 'border-white/10 bg-black/20 hover:border-white/30'
                                }`}
                        >
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${heeftAutomaat ? 'border-emerald-400 bg-emerald-500' : 'border-white/30'
                                }`}>
                                {heeftAutomaat && <Check size={12} />}
                            </div>
                            <div>
                                <p className="font-bold text-sm">Ik heb een automaat (24/7)</p>
                                <p className="text-[10px] text-white/50">1 automaat is inbegrepen in je pakket</p>
                            </div>
                        </div>
                    )}

                    {/* Solo Automaat - Locked indicator */}
                    {registrationType === 'automaat' && (
                        <div className="p-4 rounded-xl border border-emerald-400/50 bg-emerald-500/10 flex items-center gap-3">
                            <div className="w-5 h-5 rounded border-2 border-emerald-400 bg-emerald-500 flex items-center justify-center">
                                <Check size={12} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Automaat registratie</p>
                                <p className="text-[10px] text-white/50">Zonder boerderijprofiel</p>
                            </div>
                        </div>
                    )}

                    {/* Pricing Options */}
                    <div className="bg-black/30 rounded-2xl p-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Kies je plan</h4>
                        <div className="space-y-2">
                            {packages.map((option) => (
                                <motion.div
                                    key={option.id}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        setSelectedPlan(option.id);
                                        if (option.id === 'trial') {
                                            showToast('🎉 Gratis testmaand geselecteerd!');
                                        }
                                    }}
                                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${selectedPlan === option.id
                                            ? 'border-emerald-400 bg-emerald-500/20'
                                            : 'border-white/10 bg-black/20 hover:border-white/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === option.id ? 'border-emerald-400 bg-emerald-500' : 'border-white/30'
                                            }`}>
                                            {selectedPlan === option.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{option.label}</p>
                                            {option.perMonth > 0 && (
                                                <p className="text-[10px] text-white/50">€{option.perMonth}/maand</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {option.badge && (
                                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${option.badge === 'GRATIS' ? 'bg-yellow-400 text-yellow-900' : 'bg-amber-500 text-black'
                                                }`}>
                                                {option.badge}
                                            </span>
                                        )}
                                        <div className="text-right">
                                            <p className="font-black">€{option.price}</p>
                                            <p className="text-[9px] text-white/50">{option.period}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Referral Code */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Referral Code (Optioneel)</label>
                        <input
                            type="text"
                            value={referralCode}
                            onChange={(e) => setReferralCode(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 transition-colors"
                            placeholder="Bv. FARM-JAN-X8"
                        />
                    </div>

                    {/* Summary */}
                    <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-widest">Te betalen</p>
                                <p className="font-black text-2xl">
                                    €{selectedOption.price}
                                    <span className="text-sm font-normal text-white/60">{selectedOption.period}</span>
                                </p>
                            </div>
                            {selectedOption.savings && (
                                <div className="text-right">
                                    <p className="text-xs text-emerald-400 font-bold">Je bespaart</p>
                                    <p className="font-black text-emerald-400">€{selectedOption.savings}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleRegister}
                        disabled={!name || !address}
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-4 rounded-xl font-black shadow-lg uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Zap size={16} fill="currentColor" />
                        {selectedOption.price === 0 ? 'Start Gratis Trial' : 'Registreren & Betalen'}
                    </motion.button>

                    {selectedOption.price === 0 && (
                        <p className="text-[10px] text-white/40 text-center">
                            Je wordt nog niets aangerekend. De eerste maand is volledig gratis.
                        </p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
