import React from 'react';
import { motion } from 'framer-motion';
import { X, Bot, Sparkles, Loader2, Copy } from 'lucide-react';
import { AiHarvestAdvice } from '../../types';

interface AiAdviceModalProps {
    isOpen: boolean;
    onClose: () => void;
    advice: AiHarvestAdvice | null;
    isLoading: boolean;
    t: (key: string) => string;
}

export const AiAdviceModal: React.FC<AiAdviceModalProps> = ({ isOpen, onClose, advice, isLoading, t }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={e => e.stopPropagation()} className="bg-gradient-to-br from-emerald-900 to-black p-8 rounded-[32px] shadow-2xl max-w-lg w-full border border-emerald-500/30 relative text-white">
                <button onClick={onClose} className="absolute top-4 right-4 text-emerald-500/50 hover:text-emerald-500"><X size={24} /></button>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-400"><Bot size={24} /></div>
                    <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-400">Harvest AI</h3>
                </div>
                {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-emerald-500/50">
                        <Loader2 size={48} className="animate-spin mb-4" />
                        <p className="text-xs font-black uppercase tracking-widest animate-pulse">Analyseren van seizoensdata...</p>
                    </div>
                ) : advice ? (
                    <div className="space-y-6">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Sparkles size={12} /> Dagelijkse Tip</h4>
                            <p className="font-medium text-emerald-50 leading-relaxed">{advice.dailyTip}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">Verkooptips voor nu</h4>
                            <ul className="space-y-3">
                                {advice.suggestions?.slice(0, 3).map((s: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm text-emerald-100/80">
                                        <span className="bg-emerald-500/20 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0">{i + 1}</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 p-4 rounded-2xl border border-emerald-500/20">
                            <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Marketing Copy</h4>
                            <p className="italic text-emerald-200/60 text-xs">"{advice.marketingDescription}"</p>
                            <button onClick={() => { navigator.clipboard.writeText(advice.marketingDescription); }} className="mt-3 flex items-center gap-2 text-[10px] font-bold text-emerald-400 hover:text-white transition-colors"><Copy size={12} /> Tekst kopiëren</button>
                        </div>
                    </div>
                ) : null}
            </motion.div>
        </div>
    );
};
