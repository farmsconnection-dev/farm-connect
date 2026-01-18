import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Store, HelpCircle, ChevronDown } from 'lucide-react';
import { Farm } from '../../types';

interface SubscriptionSectionProps {
    farm: Farm;
    onUpdate: (updates: Partial<Farm>) => void;
    showToast: (msg: string) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ farm, onUpdate, showToast }) => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(farm.subscription === 'annual' ? 'annual' : 'monthly');
    const [extraMachines, setExtraMachines] = useState(farm.extra_automaten || 0);
    const [isExpanded, setIsExpanded] = useState(false);

    // Sync internal state if props change (e.g. from loading)
    useEffect(() => {
        if (farm.subscription && (farm.subscription === 'monthly' || farm.subscription === 'annual')) {
            setBillingCycle(farm.subscription);
        }
        if (farm.extra_automaten !== undefined) {
            setExtraMachines(farm.extra_automaten);
        }
    }, [farm.subscription, farm.extra_automaten]);

    const BASE_PRICE_MONTHLY = 10;
    const BASE_PRICE_ANNUAL = 80;
    const EXTRA_MACHINE_PRICE_MONTHLY = 3;
    const EXTRA_MACHINE_PRICE_ANNUAL = 24; // 2 * 12

    const calculateTotal = () => {
        if (billingCycle === 'monthly') {
            return BASE_PRICE_MONTHLY + (extraMachines * EXTRA_MACHINE_PRICE_MONTHLY);
        } else {
            return BASE_PRICE_ANNUAL + (extraMachines * EXTRA_MACHINE_PRICE_ANNUAL);
        }
    };

    const handleSave = () => {
        onUpdate({
            subscription: billingCycle,
            extra_automaten: extraMachines
        });
        showToast('Abonnement voorkeur opgeslagen');
    };

    return (
        <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 mb-8 relative overflow-hidden">
            {/* Trial Banner */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black uppercase px-4 py-2 rounded-bl-2xl shadow-lg z-10 flex items-center gap-2">
                <Zap size={12} fill="currentColor" /> Proefperiode Actief
            </div>

            {/* Collapsed Header - Always Visible */}
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between pt-4 pb-2 group"
                >
                    <div className="text-left">
                        <h2 className="text-2xl font-black text-emerald-900 mb-1">Kies je Groeiplan</h2>
                        <p className="text-sm text-slate-600 font-medium">
                            {isExpanded ? 'Klik om in te klappen' : `Huidig plan: ${billingCycle === 'monthly' ? 'Flexibel' : 'Jaarabonnement'} - €${calculateTotal()}/${billingCycle === 'monthly' ? 'mnd' : 'jaar'}`}
                        </p>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-emerald-600"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6">
                                <p className="text-slate-600 font-medium max-w-xl mx-auto text-center mb-6">Geniet nu van de gratis testfase. Kies alvast je plan voor later om naadloos door te groeien.</p>

                                {/* Toggle */}
                                <div className="flex justify-center mb-8">
                                    <div className="bg-slate-100 p-1 rounded-xl flex items-center relative shadow-inner">
                                        <motion.div
                                            className="absolute bg-white shadow-sm rounded-lg h-8 w-1/2 top-1 left-0"
                                            initial={false}
                                            animate={{ x: billingCycle === 'monthly' ? 4 : '96%' }}
                                            style={{ width: '48%' }}
                                        />
                                        <button
                                            onClick={() => setBillingCycle('monthly')}
                                            className={`relative z-10 px-6 py-1.5 text-xs font-bold transition-colors w-32 ${billingCycle === 'monthly' ? 'text-emerald-700' : 'text-slate-400'}`}
                                        >
                                            Maandelijks
                                        </button>
                                        <button
                                            onClick={() => setBillingCycle('annual')}
                                            className={`relative z-10 px-6 py-1.5 text-xs font-bold transition-colors w-32 flex items-center justify-center gap-1 ${billingCycle === 'annual' ? 'text-emerald-700' : 'text-slate-400'}`}
                                        >
                                            Jaarlijks <span className="text-[9px] text-amber-500 px-1 bg-amber-100 rounded-full">-33%</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                                    <div className={`p-6 rounded-3xl border-2 transition-all cursor-pointer h-full ${billingCycle === 'monthly' ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-1 ring-emerald-500/20' : 'border-slate-200 hover:border-emerald-200'}`}
                                        onClick={() => setBillingCycle('monthly')}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-black text-slate-800">Flexibel</h3>
                                                <p className="text-xs text-slate-500 font-bold">Maandelijks opzegbaar</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-3xl font-black text-emerald-600">€10</span>
                                                <span className="text-xs text-slate-400 font-bold">/mnd</span>
                                            </div>
                                        </div>
                                        <div className="h-px bg-slate-200 my-4" />
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> 1 Automaat inbegrepen</li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> Onbeperkt producten</li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> AI Oogst Advies</li>
                                        </ul>
                                    </div>

                                    <div className={`p-6 rounded-3xl border-2 transition-all cursor-pointer relative h-full ${billingCycle === 'annual' ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-1 ring-emerald-500/20' : 'border-slate-200 hover:border-emerald-200'}`}
                                        onClick={() => setBillingCycle('annual')}>
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                            <Zap size={10} fill="currentColor" /> Beste Waarde
                                        </div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-black text-slate-800">Jaarabonnement</h3>
                                                <p className="text-xs text-slate-500 font-bold">Bespaar €40 per jaar</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-3xl font-black text-emerald-600">€80</span>
                                                <span className="text-xs text-slate-400 font-bold">/jaar</span>
                                            </div>
                                        </div>
                                        <div className="h-px bg-slate-200 my-4" />
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> Alle voordelen van Flexibel</li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> Prioriteit Support</li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-slate-600"><div className="bg-emerald-100 p-1 rounded-full"><Check size={12} className="text-emerald-600" /></div> Vroegtijdige toegang features</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Extra Machines Calculator */}
                                <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-800 flex items-center gap-2"><Store size={20} className="text-emerald-500" /> Extra Automaten?</h4>
                                            <p className="text-xs text-slate-500 mt-1 font-medium max-w-md">
                                                Heb je meer dan 1 automaat? Voeg ze hier toe. <br />
                                                <span className="text-emerald-600 font-bold">Tip:</span> Kies jaarlijks voor de beste prijs (€24/jaar vs €3/maand per automaat).
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                                            <button onClick={() => setExtraMachines(Math.max(0, extraMachines - 1))} className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-lg hover:bg-slate-200 font-black text-slate-600 transition-colors">-</button>
                                            <span className="w-8 text-center font-black text-xl text-slate-800">{extraMachines}</span>
                                            <button onClick={() => setExtraMachines(extraMachines + 1)} className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg hover:bg-emerald-200 font-black text-emerald-600 transition-colors">+</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary & Action */}
                                <div className="mt-8 flex flex-col items-center">
                                    <div className="text-center mb-6 p-6 bg-emerald-900/5 rounded-3xl w-full max-w-md">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Jouw Toekomstig Totaal</p>
                                        <div className="text-5xl font-black text-emerald-900 mb-2">
                                            €{calculateTotal()}
                                            <span className="text-sm text-slate-400 font-bold ml-1">/{billingCycle === 'monthly' ? 'maand' : 'jaar'}</span>
                                        </div>
                                        {extraMachines > 0 && (
                                            <p className="text-xs text-emerald-600 font-bold bg-emerald-100/50 px-3 py-1 rounded-full inline-block">
                                                + {extraMachines} extra automaten inbegrepen
                                            </p>
                                        )}
                                    </div>

                                    <button onClick={handleSave} className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 w-full sm:w-auto justify-center group">
                                        <Zap size={20} fill="currentColor" className="group-hover:text-yellow-300 transition-colors" />
                                        Bevestig Plan & Opslaan
                                    </button>
                                    <p className="text-[10px] text-slate-400 mt-4 text-center max-w-sm font-medium leading-relaxed">
                                        Je wordt <span className="text-emerald-600 font-bold">nog niets aangerekend</span>. De eerste maand is volledig gratis (testperiode). We sturen een herinnering voordat de effectieve betaling van start gaat.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
