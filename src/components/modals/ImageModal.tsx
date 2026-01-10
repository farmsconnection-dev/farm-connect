import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ProductImage } from '../shared/ProductImage';

interface ImageModalProps {
    selectedImage: string | null;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
    if (!selectedImage) return null;
    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="bg-white/10 backdrop-blur-3xl p-2 rounded-[32px] shadow-2xl max-w-4xl w-full aspect-auto relative overflow-hidden border border-white/20"
                onClick={(e) => e.stopPropagation()}
            >
                <ProductImage
                    layoutId={`image-${selectedImage}`}
                    src={selectedImage}
                    className="w-full h-full object-contain rounded-[24px] max-h-[80vh]"
                    alt="Product Detail"
                    onClick={() => { }}
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg text-white hover:bg-black/70 transition-colors"
                >
                    <X size={24} />
                </motion.button>
            </motion.div>
        </div>
    );
};
