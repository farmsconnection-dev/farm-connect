// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Apple, Tractor } from 'lucide-react';
import logo from '../assets/logo-landing.png';

interface LandingPageProps {
    t: (key: string) => string;
    handleRoleSelect: (role: 'discoverer' | 'farmer') => void;
    landingLogoError: boolean;
    setLandingLogoError: (error: boolean) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ t, handleRoleSelect, landingLogoError, setLandingLogoError }) => {
    return (
        <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative h-screen max-h-screen w-full flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover scale-105" alt="Belgian Farm Landscape" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-between h-full pt-4 pb-6 md:pt-8 md:pb-8">
                <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center flex-1 justify-center -mt-24">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className='mb-4 flex justify-center'
                    >
                        <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center relative z-10">
                            <div className="absolute inset-0 bg-amber-400/20 blur-[60px] rounded-full" />
                            <img
                                src={logo}
                                alt="Farm Connect Logo"
                                className="w-full h-full object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 ease-out"
                                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))' }}
                                onError={() => setLandingLogoError(true)}
                            />
                        </div>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-400 mb-0 tracking-tighter drop-shadow-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Farm Connect</h1>
                    <p className="text-sm md:text-xl text-mint font-black tracking-[0.3em] uppercase italic drop-shadow-lg mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{t('tagline_caps')}</p>
                    <p className="text-sm md:text-lg text-white font-bold max-w-lg drop-shadow-lg leading-relaxed shadow-black/50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] px-4 opacity-90">
                        {t('landing_intro')}
                    </p>
                </motion.div>

                <div className="flex flex-col gap-3 w-full px-6 max-w-sm mt-auto z-20 mb-8 md:mb-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                        onClick={() => handleRoleSelect('discoverer')}
                        className="bg-white/10 backdrop-blur-xl text-white py-3.5 rounded-3xl font-black text-lg shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-3 border border-white/20 group hover:bg-white/20"
                    >
                        <Apple size={22} className="group-hover:rotate-12 transition-transform text-red-400" />
                        {t('btn_discoverer')}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                        onClick={() => handleRoleSelect('farmer')}
                        className="bg-emerald-900/80 backdrop-blur-xl text-white py-3.5 rounded-3xl font-black text-lg shadow-[0_8px_32px_0_rgba(255,165,0,0.3)] transition-all flex items-center justify-center gap-3 group border border-emerald-500/50 hover:bg-emerald-800/80"
                    >
                        <Tractor size={22} className="group-hover:scale-110 transition-transform text-mint" />
                        {t('btn_farmer')}
                    </motion.button>
                </div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 z-10 text-center opacity-40 flex flex-col items-center gap-0.5 pb-2">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.3em]">{t('premium_platform')}</p>
                <p className="text-white text-[9px] font-bold tracking-wider">© {new Date().getFullYear()} Farm Connect. Alle rechten voorbehouden.</p>
            </div>
        </motion.div>
    );
};
