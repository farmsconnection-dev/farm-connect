import React from 'react';
import { motion } from 'framer-motion';
import { X, Apple, Lightbulb } from 'lucide-react';

interface AppleAuraModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AppleAuraModal: React.FC<AppleAuraModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-[40px] shadow-2xl shadow-gold/50 max-w-lg w-full relative overflow-hidden text-center border-4 border-white/50"
            >
                <motion.button whileHover={{ scale: 1.1 }} onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/50 rounded-full text-red-900/50 hover:text-red-900 transition-colors"><X size={24} /></motion.button>

                <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white border-4 border-white">
                    <Apple size={48} />
                </div>

                <h3 className="text-3xl font-black text-red-900 mb-2 tracking-tight">Belgische Trots</h3>
                <p className="text-red-800/60 font-bold uppercase text-xs tracking-widest mb-8">Direct van de boomgaard</p>

                <div className="space-y-4 mb-8 text-left">
                    {[
                        { name: 'Jonagold', desc: 'De koning van de Belgische appels. Zoet, knapperig en perfect voor in de hand of in de taart.' },
                        { name: 'Elstar', desc: 'Friszuur en aromatisch. Een echte herfstfavoriet met een prachtige rode blos.' },
                        { name: 'Pink Lady', desc: 'Unieke roze kleur en een heerlijke zoete smaak. Blijft lang knapperig.' }
                    ].map((apple, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white/60 p-4 rounded-2xl flex gap-4 items-start shadow-sm border border-red-100">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold shrink-0">{i + 1}</div>
                            <div>
                                <h4 className="font-bold text-red-900">{apple.name}</h4>
                                <p className="text-xs text-red-800/70 font-medium leading-relaxed">{apple.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-amber-100/50 p-4 rounded-2xl border border-amber-200">
                    <p className="text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Lightbulb size={16} className="text-amber-600" />
                        Wist je dat?
                    </p>
                    <p className="text-amber-900/70 text-xs mt-1 italic">Oogsttijd: September - Oktober. De koelere nachten geven ze hun perfecte blos.</p>
                </div>
            </motion.div>
        </div>
    );
};
