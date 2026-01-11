import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBasket, Tractor, X } from 'lucide-react';

interface RoleSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectRole: (role: 'discoverer' | 'farmer') => void;
}

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({ isOpen, onClose, onSelectRole }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
                    >
                        <div className="relative h-32 bg-forest flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                            <h2 className="text-3xl font-black text-white drop-shadow-md relative z-10">Welkom! 👋</h2>
                            <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8">
                            <p className="text-center text-slate-600 mb-8 font-medium">
                                We zijn blij dat je er bent. Vertel ons, hoe wil je Farm Connect gebruiken?
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#f0fdf4' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onSelectRole('discoverer')}
                                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border-2 border-emerald-100 bg-white hover:border-emerald-500 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        <ShoppingBasket size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-forest text-lg">Ik wil ontdekken</h3>
                                        <p className="text-xs text-slate-500 mt-1">Koop verse producten direct van de boer</p>
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#fff7ed' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onSelectRole('farmer')}
                                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border-2 border-amber-100 bg-white hover:border-amber-500 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        <Tractor size={32} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-amber-900 text-lg">Ik ben boer</h3>
                                        <p className="text-xs text-slate-500 mt-1">Verkoop je producten en beheer je boerderij</p>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
