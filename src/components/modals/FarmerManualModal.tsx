import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FarmerManualModalProps {
    onClose: () => void;
    t: (key: string) => string;
}

export const FarmerManualModal: React.FC<FarmerManualModalProps> = ({ onClose, t }) => (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={e => e.stopPropagation()} className="bg-white w-full max-w-2xl h-[80vh] rounded-[32px] overflow-hidden flex flex-col relative">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-xl font-black text-slate-800">{t('support_guide_title')}</h3>
                <button onClick={onClose}><X size={24} className="text-slate-400" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 prose prose-slate max-w-none">
                <h4>1. {t('tip_1')}</h4>
                <p>Presentatie is alles. Zorg voor een nette uitstalling.</p>
                <hr />
                <h4>2. Foto's maken</h4>
                <p>Gebruik natuurlijk licht. Ochtendzon is het beste.</p>
                <hr />
                <h4>3. {t('tip_3')}</h4>
                <p>Kleine attenties maken een groot verschil in klantenbinding.</p>
            </div>
        </motion.div>
    </div>
);
