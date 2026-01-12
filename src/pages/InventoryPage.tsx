// @ts-nocheck
import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Image as ImageIcon, Upload, CheckCircle, AlertCircle, Trash2, Box } from 'lucide-react';
import { ProductImage } from '../components/shared/ProductImage';
import { Farm, Product, ProductCategory, ViewState } from '../types';
import { SMART_IMAGE_MAP, FALLBACK_PRODUCT_IMAGE } from '../constants';

interface InventoryPageProps {
    t: (key: string) => string;
    setView: (view: ViewState) => void;
    farms: Farm[];
    setFarms: React.Dispatch<React.SetStateAction<Farm[]>>;
    showToast: (msg: string) => void;
    setSelectedImage: (img: string | null) => void;
    userProfile: { id?: string }; // Simplified UserProfile
}

export const InventoryPage: React.FC<InventoryPageProps> = ({ t, setView, farms, setFarms, showToast, setSelectedImage, userProfile }) => {
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductUnit, setNewProductUnit] = useState('/kg');
    const [newProductCategory, setNewProductCategory] = useState<ProductCategory>('vegetables');
    const [newProductImage, setNewProductImage] = useState('');
    const [newProductCategoryDesc, setNewProductCategoryDesc] = useState('');
    const [farmerFilter, setFarmerFilter] = useState<ProductCategory | 'all'>('all');

    const productImgInputRef = useRef<HTMLInputElement>(null);

    // Select correct farm by owner ID (User's farm)
    const myFarm = farms.find(f => f.owner_id === userProfile.id);
    const farmerProducts = myFarm?.products || [];

    const handleSmartProductInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNewProductName(val);
        const lower = val.toLowerCase().trim();

        // Try exact match first, then partial match
        let matchedImage = SMART_IMAGE_MAP[lower];
        if (!matchedImage) {
            // Try finding a key that the input contains or that contains the input
            const match = Object.keys(SMART_IMAGE_MAP).find(k => {
                const keyLower = k.toLowerCase();
                return lower.includes(keyLower) || keyLower.includes(lower) ||
                    lower.split(' ').some(word => keyLower.includes(word) || word.includes(keyLower));
            });
            matchedImage = match ? SMART_IMAGE_MAP[match] : (val ? FALLBACK_PRODUCT_IMAGE : '');
        }
        setNewProductImage(matchedImage);

        // Auto-detect category
        if (lower.match(/appel|peer|aardbei|kers|bes|fruit|druif|framboz|braam|blauwbes/)) setNewProductCategory('fruit');
        else if (lower.match(/aardappel|wortel|ui|prei|tomaat|komkommer|groente|pompoen|broccoli|spinazie|sla|kool|witloof|asperge|spruitje|bloemkool|paprika|courgette|aubergine|radijs|biet|bonen|pastinaak|schorseneren|rammenas|warmoes|knolselder|veldsla/)) setNewProductCategory('vegetables');
        else if (lower.match(/melk|kaas|yoghurt|zuivel|boter|room/)) setNewProductCategory('dairy');
        else if (lower.match(/kip|vlees|rund|varken|worst|ham|spek/)) setNewProductCategory('meat');
        else if (lower.match(/ei|eieren/)) setNewProductCategory('eggs');
        else if (lower.match(/honing|honingraat|stuifmeel|bijenprod/)) setNewProductCategory('honey');
    };

    const handleProductImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setNewProductImage(URL.createObjectURL(file));
    };

    const handleAddProduct = () => {
        if (!newProductName) return showToast("Naam is verplicht");
        const newProduct: Product = {
            id: Date.now().toString(),
            name: newProductName,
            available: true,
            category: newProductCategory,
            image: newProductImage || FALLBACK_PRODUCT_IMAGE,
            price: newProductPrice || '0.00',
            unit: newProductUnit,
            description: newProductCategoryDesc
        };

        setFarms(currentFarms => currentFarms.map(farm => {
            if (myFarm && farm.id === myFarm.id) {
                return { ...farm, products: [newProduct, ...farm.products] };
            }
            return farm;
        }));

        setNewProductName(''); setNewProductImage(''); setNewProductPrice(''); setNewProductUnit('/kg'); setNewProductCategoryDesc(''); setNewProductCategory('vegetables');
        showToast("Product toegevoegd!");
    };

    const toggleProductAvailability = (pid: string) => {
        setFarms(currentFarms => currentFarms.map(farm => {
            if (myFarm && farm.id === myFarm.id) {
                return {
                    ...farm,
                    products: farm.products.map(p => p.id === pid ? { ...p, available: !p.available } : p)
                };
            }
            return farm;
        }));
        showToast("Status bijgewerkt");
    };

    const deleteProduct = (pid: string) => {
        setFarms(currentFarms => currentFarms.map(farm => {
            if (myFarm && farm.id === myFarm.id) {
                return { ...farm, products: farm.products.filter(p => p.id !== pid) };
            }
            return farm;
        }));
        showToast("Product verwijderd");
    };

    const filteredFarmerProducts = useMemo(() => farmerFilter === 'all' ? farmerProducts : farmerProducts.filter(p => p.category === farmerFilter), [farmerProducts, farmerFilter]);

    return (
        <motion.div key="inventory" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} className="h-screen w-full flex flex-col pt-32 px-4 sm:px-8 pb-10 max-w-6xl mx-auto overflow-y-auto scrollbar-hide">
            <div className="mb-8 flex items-center gap-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setView('farmer')} className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm text-white hover:bg-white/30 transition-all border border-white/20"><ArrowLeft size={24} /></motion.button>
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md">{t('menu_inventory')}</h1>
                    <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">{t('manage_inventory_live')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20 sticky top-0">
                        <h3 className="text-xl font-bold text-forest mb-6 flex items-center gap-2"><Plus size={20} className="text-mint" /> {t('add_product')}</h3>
                        <div className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">{t('product_name')}</label>
                                <input type="text" placeholder="Bv. Nicola Aardappelen" value={newProductName} onChange={handleSmartProductInput} className="w-full bg-slate-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-forest/5 font-medium border border-transparent" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">{t('price')}</label>
                                    <input type="number" placeholder="2.50" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} className="w-full bg-slate-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-forest/5 font-bold border border-transparent" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">{t('unit')}</label>
                                    <select value={newProductUnit} onChange={(e) => setNewProductUnit(e.target.value)} className="w-full bg-slate-50 p-4 rounded-2xl outline-none appearance-none cursor-pointer font-bold border border-transparent">
                                        <option value="/kg">/kg</option>
                                        <option value="/st.">/st.</option>
                                        <option value="/liter">/liter</option>
                                        <option value="/doos">/doos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">{t('upload_photo_label')}</label>
                                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                    <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                                        {newProductImage ? <img src={newProductImage} className="w-full h-full object-cover" alt="New" /> : <ImageIcon size={24} className="text-slate-200" />}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => productImgInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 text-forest font-black text-[10px] uppercase tracking-widest bg-mint/40 px-4 py-3 rounded-xl hover:bg-mint transition-colors"><Upload size={16} /> {t('upload_photo_btn')}</motion.button>
                                        <input type="file" ref={productImgInputRef} className="hidden" accept="image/*" capture="environment" onChange={handleProductImageFile} />
                                    </div>
                                </div>
                            </div>
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleAddProduct} className="w-full bg-gradient-to-br from-emerald-800 to-orange-700 text-white py-5 rounded-2xl font-black shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"><Plus size={24} /> {t('add_product')}</motion.button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple shadow-xl border border-white/20 min-h-[500px]">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-forest">{t('current_stock')}</h3>
                            <div className="flex gap-2">
                                {['all', 'fruit', 'vegetables', 'dairy', 'honey'].map((category) => (
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} key={category} onClick={() => setFarmerFilter(category as 'all' | ProductCategory)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${farmerFilter === category ? 'bg-gradient-to-br from-emerald-800 to-orange-700 text-white shadow-md' : 'bg-slate-50 text-slate-400'}`}>{t(`filter_${category}`)}</motion.button>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {filteredFarmerProducts.length > 0 ? (filteredFarmerProducts.map(p => (
                                <div key={p.id} className="flex items-center gap-6 p-4 border border-slate-50 rounded-3xl hover:bg-slate-50 transition-colors group bg-white shadow-sm hover:shadow-md">
                                    <div className="w-24 h-24 aspect-square rounded-2xl overflow-hidden bg-slate-100 shrink-0 cursor-zoom-in relative" onClick={() => setSelectedImage(p.image)}>
                                        <ProductImage
                                            layoutId={`image-${p.image}`}
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-lg text-slate-800 truncate">{p.name}</h4>
                                        <p className="text-sm font-black text-slate-400">€{p.price} {p.unit}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-3">
                                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => toggleProductAvailability(p.id)} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase shadow-sm transition-all flex items-center gap-1.5 ${p.available ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                            {p.available ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                            {p.available ? t('in_stock') : t('sold_out')}
                                        </motion.button>
                                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => deleteProduct(p.id)}
                                            className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </motion.button>
                                    </div>
                                </div>
                            ))) : (
                                <div className="flex flex-col items-center justify-center py-20 text-slate-300">
                                    <Box size={64} className="mb-4 opacity-20" />
                                    <p className="font-black uppercase tracking-widest text-xs">{t('no_products_found')}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
