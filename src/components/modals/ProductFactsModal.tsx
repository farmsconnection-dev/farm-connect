// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';
import { MeteorCard } from '../shared/MeteorCard';
import { PRODUCT_FACTS } from '../../constants';

interface ProductFactsModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    t: (key: string) => string;
}

// Helper function to get translated fact
const getProductFact = (productName: string, t: (key: string) => string) => {
    const lowerName = productName.toLowerCase();
    const factKey = `fact_${lowerName}`;
    const titleKey = `fact_${lowerName}_title`;

    const title = t(titleKey);
    const fact = t(factKey);

    // If translation exists, use it (priority for multilanguage)
    if (!title.startsWith('fact_') && !fact.startsWith('fact_')) {
        return { title, fact };
    }

    // Fallback to simple PRODUCT_FACTS map if available
    if (PRODUCT_FACTS[lowerName]) {
        return {
            title: `${productName} - Wist je dat?`,
            fact: PRODUCT_FACTS[lowerName]
        };
    }

    // Default Fallback
    return {
        title: `${productName} - ${t('fact_fresh_from_land')}`,
        fact: t('fact_default_text').replace('{product}', productName)
    };
};

export const ProductFactsModal: React.FC<ProductFactsModalProps> = ({ isOpen, onClose, productName, t }) => {
    if (!isOpen) return null;

    const facts = getProductFact(productName, t);

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full relative"
            >
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute -top-4 -right-4 z-50 p-3 bg-white rounded-full text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors shadow-2xl"
                >
                    <X size={24} />
                </motion.button>

                <MeteorCard
                    title={
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/20 rounded-full">
                                <Lightbulb size={24} className="text-emerald-400" />
                            </div>
                            <span>{facts.title}</span>
                        </div>
                    }
                    description={facts.fact}
                    className="shadow-2xl"
                />
            </motion.div>
        </div>
    );
};
