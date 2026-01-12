import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Camera, Heart, ShoppingBag, Info, Clock, Star } from 'lucide-react';

interface FarmerManualModalProps {
    onClose: () => void;
    t: (key: string) => string;
}

export const FarmerManualModal: React.FC<FarmerManualModalProps> = ({ onClose, t }) => {
    const sections = [
        {
            title: "Visuele Kracht & Presentatie",
            icon: <Camera className="text-blue-500" />,
            tips: [
                { q: t('tip_1'), desc: "De eerste indruk is cruciaal. Producten op ooghoogte verkopen statistisch gezien 30% beter." },
                { q: t('tip_2'), desc: "Gebruik heldere foto's bij daglicht. Klanten kopen met hun ogen." },
                { q: t('tip_5'), desc: "Toon het echte werk. Foto's van de oogst bouwen een emotionele band op." }
            ]
        },
        {
            title: "Klantenbinding & Activeren",
            icon: <Heart className="text-rose-500" />,
            tips: [
                { q: t('tip_8'), desc: "Beloon trouwe klanten. Een simpele stempelkaart zorgt ervoor dat mensen vaker terugkomen." },
                { q: t('tip_9'), desc: "Organiseer kleinschalige proefmomenten. Vertrouwen in smaak is de beste verkooptool." },
                { q: t('tip_3'), desc: "Help de klant kiezen. Receptkaarten bij seizoensgroenten inspireren tot aankoop." }
            ]
        },
        {
            title: "Gemak & Pricing",
            icon: <ShoppingBag className="text-emerald-500" />,
            tips: [
                { q: t('tip_4'), desc: "Bundel producten. 'Soeppakketten' of 'Ontbijtmanden' nemen de keuzestress weg." },
                { q: t('tip_6'), desc: "Beloon de vroege vogels of dalmomenten met een kleine extra bij de automaat." }
            ]
        },
        {
            title: "Vertrouwen & Informatie",
            icon: <Info className="text-amber-500" />,
            tips: [
                { q: t('tip_10'), desc: "Deel je kennis. Bordjes met feiten over je producten verhogen de ervaren waarde." },
                { q: t('tip_7'), desc: "Houd je uren up-to-date. Niets is vervelender voor een klant dan een gesloten deur." }
            ]
        }
    ];

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-xl" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-white w-full max-w-3xl h-[85vh] rounded-[48px] overflow-hidden flex flex-col relative shadow-2xl border border-white/20"
            >
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-forest to-emerald-800 text-white">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-2xl shadow-inner">
                            <Sparkles size={32} className="text-mint" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black tracking-tight">{t('support_guide_title')}</h3>
                            <p className="text-mint/80 text-sm font-bold uppercase tracking-widest">Succes-strategieën voor boeren</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12 bg-slate-50/50">
                    <div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-3xl mb-8">
                        <p className="text-emerald-800 font-bold leading-relaxed">
                            💡 <span className="underline decoration-mint/50">Wist je dat</span> boerderijen die wekelijks hun voorraad updaten gemiddeld <span className="text-emerald-950 font-black">2.4x meer bezoekers</span> trekken via Farm Connect?
                        </p>
                    </div>

                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                    {section.icon}
                                </div>
                                <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight">{section.title}</h4>
                            </div>

                            <div className="grid gap-4">
                                {section.tips.map((tip, tIdx) => (
                                    <div key={tIdx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-colors group">
                                        <div className="flex gap-4">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-mint group-hover:scale-150 transition-transform shrink-0" />
                                            <div>
                                                <h5 className="font-black text-slate-800 mb-1 leading-tight">{tip.q}</h5>
                                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{tip.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Footer Call to Action */}
                    <div className="bg-forest p-8 rounded-[40px] text-center text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                            <Star size={120} />
                        </div>
                        <h4 className="text-xl font-black mb-2 relative z-10">Klaar voor de volgende stap?</h4>
                        <p className="text-mint/80 font-bold text-sm mb-6 relative z-10">Ondersteuning nodig bij je profielinrichting?</p>
                        <button
                            onClick={() => { window.location.href = "mailto:support@farmconnect.be"; }}
                            className="bg-mint text-forest px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-white transition-all relative z-10"
                        >
                            Contacteer Support
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
