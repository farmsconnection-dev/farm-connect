import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface ProductImageProps {
    src: string;
    alt: string;
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    layoutId?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className, onClick, layoutId }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <motion.div layoutId={layoutId} className={`flex items-center justify-center bg-slate-100 text-slate-300 ${className}`} onClick={onClick}>
                <Leaf size={24} />
            </motion.div>
        );
    }

    return (
        <motion.img
            layoutId={layoutId}
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            onClick={onClick}
        />
    );
};
