import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Autocomplete } from '@react-google-maps/api';

interface AddFarmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (name: string, address: string, referralCode: string, isAnnual: boolean) => void;
    t: (key: string) => string;
    showToast: (msg: string) => void;
}

export const AddFarmModal: React.FC<AddFarmModalProps> = ({ isOpen, onClose, onAdd, t, showToast }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [isAnnual, setIsAnnual] = useState(true);
    const autocompleteRef = useRef<any>(null);

    const handlePlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place.formatted_address) {
                setAddress(place.formatted_address);
            }
        }
    };

    const handleRegister = () => {
        onAdd(name, address, referralCode, isAnnual);
        setName('');
        setAddress('');
        setReferralCode('');
        setIsAnnual(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/10 backdrop-blur-2xl p-8 rounded-[32px] shadow-2xl max-w-md w-full relative border border-white/20 text-white"
            >
                <h3 className="text-2xl font-black mb-6">{t('add_farm_title')}</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{t('farm_name')}</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors" placeholder="De Groene Weide" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{t('address_label')}</label>
                        <Autocomplete
                            onLoad={(autocomplete) => { autocompleteRef.current = autocomplete; }}
                            onPlaceChanged={handlePlaceChanged}
                        >
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Dorpstraat 1, 9000 Gent" />
                        </Autocomplete>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {/* Trial - Prominent */}
                        <div
                            onClick={() => {
                                setIsAnnual(false);
                                showToast('🎉 Gratis testmaand geselecteerd!');
                            }}
                            className={`p-4 rounded-xl border cursor-pointer transition-all relative overflow-hidden ${!isAnnual ? 'bg-emerald-500/30 border-emerald-400 ring-2 ring-emerald-400' : 'bg-black/20 border-white/10'}`}
                        >
                            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[7px] font-black px-1.5 py-0.5">GRATIS</div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Trial</p>
                            <p className="font-black text-sm">€0.00</p>
                            <p className="text-[8px] text-white/60 mt-1">1 maand</p>
                        </div>

                        {/* Monthly */}
                        <div
                            onClick={() => showToast('Coming Soon - Maandelijks abonnement')}
                            className="p-4 rounded-xl border cursor-pointer transition-all bg-black/20 border-white/10 hover:bg-black/30 relative"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Maandelijks</p>
                            <p className="font-black text-sm">€10.00</p>
                            <p className="text-[7px] text-yellow-300 font-black mt-2">COMING SOON</p>
                        </div>

                        {/* Annual */}
                        <div
                            onClick={() => showToast('Coming Soon - Jaarlijks abonnement')}
                            className="p-4 rounded-xl border cursor-pointer transition-all relative overflow-hidden bg-black/20 border-white/10 hover:bg-black/30"
                        >
                            <div className="absolute top-0 right-0 bg-amber-500 text-[7px] font-black px-1.5 py-0.5 text-black">-20%</div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Jaarlijks</p>
                            <p className="font-black text-sm">€100.00</p>
                            <p className="text-[7px] text-yellow-300 font-black mt-2">COMING SOON</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Referral Code (Optioneel)</label>
                        <input type="text" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Bv. FARM-JAN-X8" />
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleRegister} className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-4 rounded-xl font-black shadow-lg mt-4 uppercase tracking-widest text-xs">Registreren & Betalen</motion.button>
                </div>
            </motion.div>
        </div>
    );
};
