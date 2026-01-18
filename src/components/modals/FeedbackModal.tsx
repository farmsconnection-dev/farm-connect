// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    googleSheetsUrl: string;
    t: (key: string) => string;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, googleSheetsUrl, t }) => {
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!feedback.trim()) return;

        setIsSubmitting(true);

        try {
            const timestamp = new Date().toISOString();
            const response = await fetch(googleSheetsUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    feedback: feedback.trim(),
                    timestamp: timestamp
                })
            });

            // no-cors mode doesn't return readable response, assume success
            setIsSuccess(true);
            setFeedback('');

            // Auto-close after 2 seconds
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Feedback submission error:', error);
            // Still show success since no-cors doesn't allow error detection
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg w-full bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl shadow-2xl border-2 border-emerald-500/30 overflow-hidden relative"
            >
                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/10 rounded-full text-white hover:bg-emerald-500 transition-colors"
                >
                    <X size={20} />
                </motion.button>

                {/* Success State */}
                <AnimatePresence>
                    {isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-emerald-600 flex flex-col items-center justify-center z-40"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                            >
                                <CheckCircle2 size={64} className="text-white mb-4" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white">{t('feedback_success_title')}</h3>
                            <p className="text-emerald-100 mt-2">{t('feedback_success_text')}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Header */}
                <div className="p-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-500/20 rounded-2xl">
                            <MessageCircle size={28} className="text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white tracking-tight">{t('feedback_title')}</h2>
                            <p className="text-emerald-200/70 text-sm">{t('feedback_subtitle')}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder={t('feedback_placeholder')}
                        className="w-full h-40 bg-white/10 border-2 border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                        disabled={isSubmitting}
                    />

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onClose}
                            className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors"
                            disabled={isSubmitting}
                        >
                            {t('cancel')}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleSubmit}
                            disabled={!feedback.trim() || isSubmitting}
                            className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                    {t('sending')}
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    {t('send')}
                                </>
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
