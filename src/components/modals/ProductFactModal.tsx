import React from 'react';
import { motion } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';
import { PRODUCT_FACTS } from '../../constants';

interface ProductFactModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: string | null;
}

export const ProductFactModal: React.FC<ProductFactModalProps> = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;
    const fact = PRODUCT_FACTS[product.toLowerCase()] || PRODUCT_FACTS['default'];

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-8 rounded-[40px] shadow-2xl max-w-sm w-full relative overflow-hidden text-center"
            >
                <motion.button whileHover={{ scale: 1.1 }} onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></motion.button>
                <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-forest">
                    <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">{product}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{fact}</p>
            </motion.div>
        </div>
    );
};
