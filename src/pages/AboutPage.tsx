// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Leaf } from 'lucide-react';
import { ViewState } from '../types';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';

// Images
import barnImg from '../assets/farm-barn-v2.jpg';
import harvestImg from '../assets/farm-harvest-v2.jpg';
import sheepImg from '../assets/farm-sheep-new.jpg';
import carrotsImg from '../assets/farm-carrots-close.jpg';

interface AboutPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ t, setView }) => {
    return (
        <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full relative">
            <ScrollExpandMedia
                mediaType="image"
                mediaSrc={barnImg}
                bgImageSrc={harvestImg}
                title={t('about_banner_title')}
                date="Sinds 2024"
                scrollToExpand="Scrol om te ontdekken"
                textBlend={true}
            >
                <div className="max-w-4xl mx-auto pt-10 pb-20 px-4">
                    <div className="text-center mb-16">
                        <div className="bg-forest text-mint p-4 rounded-3xl inline-block shadow-xl mb-6">
                            <Heart size={32} />
                        </div>
                        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter drop-shadow-md">{t('mission_title')}</h1>
                        <p className="text-lg text-white font-medium max-w-xl mx-auto drop-shadow-md">{t('mission_text')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="relative overflow-hidden p-8 rounded-apple shadow-xl border border-white/10 group">
                            <div className="absolute inset-0 z-0">
                                <img src={sheepImg} alt="Eerlijke Handel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125" />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="relative z-10">
                                <ShieldCheck size={32} className="text-red-500 mb-4 drop-shadow-md" />
                                <h2 className="text-xl font-black text-white mb-2 drop-shadow-md">{t('no_farmer_no_food')}</h2>
                                <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                                    Door zijn kennis, passie en harde werk hebben wij elke dag vers eten op tafel. Wij geloven in direct respect voor de maker: een eerbetoon aan het fundament van onze voedselketen.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="relative overflow-hidden p-8 rounded-apple shadow-xl border border-white/10 group">
                            <div className="absolute inset-0 z-0">
                                <img src={carrotsImg} alt="Eerlijke Prijs" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125" />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="relative z-10">
                                <Leaf size={32} className="text-green-500 mb-4 drop-shadow-md" />
                                <h2 className="text-xl font-black text-white mb-2 drop-shadow-md">{t('fair_price')}</h2>
                                <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                                    Wij garanderen dat de boer een eerlijke prijs krijgt voor zijn harde werk.
                                    Geen onnodige tussenschakels, maar directe waarde voor de maker.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mb-16 px-4">
                        <p className="text-2xl md:text-3xl font-serif italic text-white drop-shadow-md leading-relaxed">
                            "Wij zetten de boer terug in het hart van onze gemeenschap."
                        </p>
                    </div>

                    <div className="bg-forest text-white p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center border border-white/10">
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight">{t('about_banner_title')}</h2>
                            <p className="text-lg text-mint/80 font-medium max-w-lg leading-relaxed">{t('about_banner_text')}</p>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={() => setView('discover')} className="bg-mint text-forest px-10 py-5 rounded-3xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">{t('about_banner_btn')}</motion.button>
                        </div>
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none"><Leaf size={450} /></div>
                    </div>
                </div>
            </ScrollExpandMedia>
        </motion.div>
    );
};
