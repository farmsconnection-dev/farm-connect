// @ts-nocheck
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  MapPin, Search, Heart, User, Navigation, Menu, X, CheckCircle, Upload, Leaf,
  Store, Compass, LogOut, Map as MapIcon, List as ListIcon, ChevronDown, Trash2,
  Loader2, Box, HelpCircle, LogIn, Clock, Edit2, Filter, Phone,
  Image as ImageIcon, Plus, Apple, Carrot, Milk, Calendar, MessageCircle,
  TrendingUp, AlertTriangle, ShieldCheck, Sparkles, Bot, PhoneCall,
  ChevronLeft, ChevronRight, Milestone as RouteIcon, Lightbulb,
  CheckCircle2, AlertCircle, ToggleLeft, ToggleRight, ArrowLeft, Share2, Users, Copy,
  Tractor, Eye, Egg, Sprout
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJsApiLoader } from '@react-google-maps/api';
import { GoogleGenAI, Type } from "@google/genai";

// --- CONSTANTS & TYPES ---
import { DICTIONARY, INITIAL_FARMS, SMART_IMAGE_MAP, FALLBACK_PRODUCT_IMAGE, SEASONAL_DATA, MONTHS } from './constants';
import { Language, UserType, ViewState, Farm, Product, UserProfile, ProductCategory, DaySchedule, AiHarvestAdvice } from './types';
import { supabase } from './lib/supabase';

// --- COMPONENTS ---
import { Sidebar } from './components/layout/Sidebar';
import { AddFarmModal } from './components/modals/AddFarmModal';
import { ReferralModal } from './components/modals/ReferralModal';
import { AppleAuraModal } from './components/modals/AppleAuraModal';
import { ProductFactModal } from './components/modals/ProductFactModal';
import { AuthModal } from './components/modals/AuthModal';
import { LoginPromptModal } from './components/modals/LoginPromptModal';
import { FarmerManualModal } from './components/modals/FarmerManualModal';
import { FarmDetailModal } from './components/modals/FarmDetailModal';
import { AiAdviceModal } from './components/modals/AiAdviceModal';
import { SeasonCalendarModal } from './components/modals/SeasonCalendarModal';
import { ImageModal } from './components/modals/ImageModal';
import { ProductFactsModal } from './components/modals/ProductFactsModal';

// --- PAGES ---
import { LandingPage } from './pages/LandingPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { InventoryPage } from './pages/InventoryPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AdminPage } from './pages/AdminPage';

// --- ASSETS ---
import logo from './assets/farm-connect-logo.png';

declare global {
  interface Window {
    google: any;
  }
}

const libraries: ("places")[] = ["places"];

const App: React.FC = () => {
  // --- Global State ---
  const [lang, setLang] = useState<Language>('nl');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [view, setView] = useState<ViewState>('landing');
  const [previousView, setPreviousView] = useState<ViewState>('discover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Gast Gebruiker',
    email: '',
    isLoggedIn: false
  });

  // Farms Data (Single Source of Truth)
  const [farms, setFarms] = useState<Farm[]>(() => {
    return INITIAL_FARMS.map(f => ({
      ...f,
      referralCode: `FARM-${f.id.toUpperCase()}-X8`,
      referralBalance: 0,
      subscription: 'annual'
    }));
  });

  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('farm_favorites');
    // Ensure all loaded IDs are strings to prevent type mismatches
    return saved ? new Set(JSON.parse(saved).map(String)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('farm_favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  // Modals & Navigation State
  const [isSeasonCalendarOpen, setIsSeasonCalendarOpen] = useState(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [isAddFarmOpen, setIsAddFarmOpen] = useState(false);
  const [isAppleModalOpen, setIsAppleModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [isProductFactsOpen, setIsProductFactsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const [toast, setToast] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detailFarm, setDetailFarm] = useState<Farm | null>(null);
  const [factModalProduct, setFactModalProduct] = useState<string | null>(null);
  const [pendingRole, setPendingRole] = useState<'discoverer' | 'farmer' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // --- Header & Logo State ---
  const [headerLogoError, setHeaderLogoError] = useState(false);
  const [landingLogoError, setLandingLogoError] = useState(false);


  // --- Logic & Effects ---
  const showToast = (message: string) => setToast(message);

  const t = useCallback((key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    const translation = (entry as any)[lang] || entry.en || key;
    return translation;
  }, [lang]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setUserLocation({ lat: 50.8503, lng: 4.3517 })
      );
    }
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Supabase Auth Listener - voor Google OAuth
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const email = session.user.email || '';
        const name = session.user.user_metadata?.full_name || email.split('@')[0];
        const photoUrl = session.user.user_metadata?.avatar_url || 'https://picsum.photos/id/1005/100/100';

        setUserProfile({
          name,
          email,
          photoUrl,
          isLoggedIn: true
        });

        // Set user type based on pending role
        if (pendingRole === 'farmer') {
          setUserType('farmer');
          setView('farmer');
        } else {
          setUserType('discoverer');
          setView('discover');
        }

        setIsAuthModalOpen(false);
        setIsLoginPromptOpen(false);
        setIsMenuOpen(false);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [pendingRole]);

  // Google Maps Loader
  const googleMapsOptions = useMemo(() => ({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries,
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: true,
  }), []);

  const { isLoaded, loadError } = useJsApiLoader(googleMapsOptions);


  // --- Actions ---
  const handleRoleSelect = (role: 'discoverer' | 'farmer') => {
    setPendingRole(role);
    setIsAuthModalOpen(true);
  };

  const handleGuestContinue = () => {
    setUserType('discoverer');
    setView('discover');
    setIsAuthModalOpen(false);
  };

  const handleLogin = (email: string, name: string) => {
    setUserProfile({ name, email, photoUrl: 'https://picsum.photos/id/1005/100/100', isLoggedIn: true });
    if (pendingRole === 'farmer') { setUserType('farmer'); setView('farmer'); } else { setUserType('discoverer'); setView('discover'); }
    setIsAuthModalOpen(false);
    setIsLoginPromptOpen(false);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setUserProfile({ name: 'Gast Gebruiker', email: '', isLoggedIn: false });
    setUserType(null);
    setView('landing');
    setFavorites(new Set());
    setIsMenuOpen(false);
  };

  const handleRouteClick = (f: Farm) => {
    showToast(t('bring_bag'));
    setTimeout(() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${f.lat},${f.lng}`, '_blank'), 800);
  };

  const toggleFavorite = (id: string) => {
    // Persistent favorites even for guests
    setFavorites(prev => {
      const next = new Set(prev);
      const strId = String(id);
      if (next.has(strId)) {
        next.delete(strId);
        // showToast(t('removed_from_favorites')); // Optional: add translation if needed
      } else {
        next.add(strId);
        showToast("Toegevoegd aan favorieten");
      }
      return next;
    });
  };

  // --- Seasonal Logic ---
  const currentMonthIndex = new Date().getMonth();
  const getSeasonalImage = (itemName: string): string => {
    const lower = itemName.toLowerCase();
    if (SMART_IMAGE_MAP[lower]) return SMART_IMAGE_MAP[lower];
    if (lower.includes('aardappel')) return SMART_IMAGE_MAP['aardappelen'];
    if (lower.includes('appel')) return SMART_IMAGE_MAP['appels'];
    if (lower.includes('peer')) return SMART_IMAGE_MAP['peren'];
    return FALLBACK_PRODUCT_IMAGE;
  };

  const handleSeasonalItemClick = (itemText: string) => {
    setSelectedProduct(itemText);
    setIsProductFactsOpen(true);
  };

  // --- Add Farm Logic ---
  const handleRegisterFarm = (name: string, address: string, referralCode: string, isAnnual: boolean) => {
    if (!name) return showToast("Naam is verplicht");

    if (isAnnual && referralCode) {
      const referrer = farms.find(f => f.referralCode?.toLowerCase() === referralCode.toLowerCase() && f.subscription === 'annual');
      if (referrer) {
        setFarms(prev => prev.map(f => {
          if (f.id === referrer.id) {
            return { ...f, referralBalance: (f.referralBalance || 0) + 20 };
          }
          return f;
        }));
        showToast("Referral code geaccepteerd! Bonus toegekend aan partner.");
      }
    }

    const newFarm: Farm = {
      id: Date.now().toString(),
      name: name,
      address: address || 'Nieuw Adres',
      lat: 50.8503,
      lng: 4.3517, // Mock
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      joinedDate: new Date().toISOString(),
      followerCount: 0,
      products: [],
      schedule: [],
      referralCode: `FARM-${Date.now().toString().slice(-4)}-X8`,
      referralBalance: 0,
      subscription: isAnnual ? 'annual' : 'monthly'
    };

    setFarms(prev => [newFarm, ...prev]);
    setIsAddFarmOpen(false);
    showToast("Nieuwe boerderij toegevoegd!");
  };

  // --- AI Logic ---
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<AiHarvestAdvice | null>(null);
  const [isAiAdviceModalOpen, setIsAiAdviceModalOpen] = useState(false);

  const fetchHarvestAdvice = async () => {
    setIsAiLoading(true);
    setIsAiAdviceModalOpen(true);
    const simulateAi = () => {
      const tips = [t('tip_1'), t('tip_2'), t('tip_3'), t('tip_4'), t('tip_5'), t('tip_6'), t('tip_7')];
      setAiAdvice({ suggestions: tips, marketingDescription: "Uw hoeve staat voor pure passie.", dailyTip: tips[0], isSimulated: true });
      setIsAiLoading(false);
    };
    // Find my farm products
    const myFarm = farms.find(f => f.id === '1');
    const productsList = myFarm?.products.map(p => p.name).join(', ') || '';

    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GENAI_API_KEY || '' });
      const currentMonth = MONTHS[currentMonthIndex];
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp', // Updated model name
        contents: `Expert in agriculture/marketing. Farmer products: ${productsList || 'none'}. Month: ${currentMonth}. Return 7 sales tips, 1 marketing text, 1 daily tip in JSON. Language: ${lang}.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
              marketingDescription: { type: Type.STRING },
              dailyTip: { type: Type.STRING }
            },
            required: ["suggestions", "marketingDescription", "dailyTip"]
          }
        }
      });
      setAiAdvice({ ...JSON.parse(response.text || "{}"), isSimulated: false });
    } catch (e) { console.error("AI Harvest Advice API error:", e); simulateAi(); } finally { setIsAiLoading(false); }
  };


  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-emerald-950 to-black text-slate-800 font-sans overflow-hidden relative">
      <AnimatePresence>{toast && (<motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-forest text-mint px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border-2 border-white/20"><CheckCircle size={24} />{toast}</motion.div>)}</AnimatePresence>

      {/* --- Persistent Header --- */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-30 pointer-events-none">
        <div className="pointer-events-auto flex items-center h-full">
          <motion.button
            disabled={view === 'landing'}
            onClick={() => { setView('discover'); setDetailFarm(null); }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className={`flex items-center group transition-transform ${view !== 'landing' ? 'active:scale-95 cursor-pointer' : 'opacity-100 pointer-events-none'}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-2 border-white/50 overflow-hidden">
                <img src="/src/assets/logo-header.png" alt="Farm Connect" className="w-full h-full object-cover scale-[1.6]" />
              </div>
              <h1 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                Farm <span className="text-amber-300">Connect</span>
              </h1>
            </div>
            <span className={`text-[10px] italic text-emerald-100 font-black uppercase tracking-widest ml-4 transition-all duration-300 transform self-center ${view === 'landing' ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {t('tagline')}
            </span>
          </motion.button>
        </div>
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="relative">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsLangOpen(!isLangOpen)} className="bg-white/10 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-lg text-white font-black text-xs flex items-center gap-1 border border-white/10 hover:bg-white/20 transition-all">
              {lang.toUpperCase()} <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </motion.button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-20 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-1 z-[100]">
                  {(['nl', 'fr', 'en', 'de'] as Language[]).map((l) => (
                    <motion.button key={l} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setLang(l); setIsLangOpen(false); }} className={`w-full text-center py-2 rounded-xl text-xs font-bold ${lang === l ? 'bg-forest text-mint' : 'text-slate-600 hover:bg-slate-50'}`}>{l.toUpperCase()}</motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {view !== 'landing' && <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsMenuOpen(true)} className="bg-white/10 backdrop-blur-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white hover:bg-white/20 transition-all border border-white/10"><Menu size={24} /></motion.button>}
        </div>
      </div>

      {/* --- Sidebar --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]" />
            <Sidebar
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              view={view}
              setView={setView}
              userType={userType}
              userProfile={userProfile}
              handleLogout={handleLogout}
              handleLogin={() => { setIsLoginPromptOpen(false); setIsAuthModalOpen(true); }}
              setIsSeasonCalendarOpen={setIsSeasonCalendarOpen}
              setIsReferralModalOpen={setIsReferralModalOpen}
              t={t}
            />
          </>
        )}
      </AnimatePresence>

      {/* --- Main Content Areas --- */}
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <LandingPage
            t={t}
            handleRoleSelect={handleRoleSelect}
            landingLogoError={landingLogoError}
            setLandingLogoError={setLandingLogoError}
          />
        )}
        {view === 'discover' && (
          <DiscoverPage
            t={t}
            farms={farms}
            isLoaded={isLoaded}
            loadError={loadError}
            userLocation={userLocation}
            setDetailFarm={setDetailFarm}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            handleRouteClick={handleRouteClick}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {view === 'favorites' && (
          <FavoritesPage
            t={t}
            setView={setView}
            favorites={favorites}
            farms={farms}
            setDetailFarm={setDetailFarm}
            toggleFavorite={toggleFavorite}
            handleRouteClick={handleRouteClick}
          />
        )}
        {view === 'about' && <AboutPage t={t} setView={setView} />}
        {view === 'support' && (
          <SupportPage
            t={t}
            setView={setView}
            previousView={previousView}
            setIsManualModalOpen={setIsManualModalOpen}
            userType={userType}
          />
        )}
        {view === 'farmer' && userType === 'farmer' && (
          <FarmerDashboard
            t={t}
            farms={farms}
            setFarms={setFarms}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            fetchHarvestAdvice={fetchHarvestAdvice}
            setIsAddFarmOpen={setIsAddFarmOpen}
            setIsReferralModalOpen={setIsReferralModalOpen}
            showToast={showToast}
          />
        )}
        {view === 'inventory' && userType === 'farmer' && (
          <InventoryPage
            t={t}
            setView={setView}
            farms={farms}
            setFarms={setFarms}
            showToast={showToast}
            setSelectedImage={setSelectedImage}
          />
        )}
        {view === 'admin' && (
          <AdminPage
            t={t}
            farms={farms}
            setFarms={setFarms}
            userEmail={userProfile.email}
            showToast={showToast}
          />
        )}
      </AnimatePresence>

      {/* --- Modals --- */}
      <AnimatePresence>{isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          pendingRole={pendingRole}
          handleLogin={handleLogin}
          handleGuestContinue={handleGuestContinue}
          t={t}
          showToast={showToast}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isLoginPromptOpen && (
        <LoginPromptModal
          onClose={() => setIsLoginPromptOpen(false)}
          onLoginDiscoverer={() => {
            setUserProfile({ name: 'Lander D.', email: 'lander@example.com', photoUrl: 'https://picsum.photos/id/1005/100/100', isLoggedIn: true });
            setUserType('discoverer');
            setView('discover');
            setIsLoginPromptOpen(false);
            showToast("Welkom terug, Lander!");
          }}
          onLoginFarmer={() => {
            setUserProfile({ name: 'Boer Jan', email: 'jan@hoeve.be', photoUrl: 'https://picsum.photos/id/1025/100/100', isLoggedIn: true });
            setUserType('farmer');
            setView('farmer');
            setIsLoginPromptOpen(false);
            showToast("Welkom op je dashboard, Jan!");
          }}
          t={t}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isSeasonCalendarOpen && (
        <SeasonCalendarModal
          isOpen={isSeasonCalendarOpen}
          onClose={() => setIsSeasonCalendarOpen(false)}
          t={t}
          handleSeasonalItemClick={handleSeasonalItemClick}
          currentMonthIndex={currentMonthIndex}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isProductFactsOpen && (
        <ProductFactsModal
          isOpen={isProductFactsOpen}
          onClose={() => setIsProductFactsOpen(false)}
          productName={selectedProduct}
          t={t}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isManualModalOpen && (
        <FarmerManualModal onClose={() => setIsManualModalOpen(false)} t={t} />
      )}</AnimatePresence>
      <AnimatePresence>{detailFarm && (
        <FarmDetailModal
          farm={detailFarm}
          onClose={() => setDetailFarm(null)}
          t={t}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.has(detailFarm?.id)}
          handleRouteClick={handleRouteClick}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isAiAdviceModalOpen && (
        <AiAdviceModal
          isOpen={isAiAdviceModalOpen}
          onClose={() => setIsAiAdviceModalOpen(false)}
          advice={aiAdvice}
          isLoading={isAiLoading}
          t={t}
        />
      )}</AnimatePresence>
      <AnimatePresence>{selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isReferralModalOpen && (
        <ReferralModal
          isOpen={isReferralModalOpen}
          onClose={() => setIsReferralModalOpen(false)}
          t={t}
          showToast={showToast}
          referralCode={farms.find(f => f.id === '1')?.referralCode}
          referralBalance={farms.find(f => f.id === '1')?.referralBalance}
        />
      )}</AnimatePresence>
      <AnimatePresence>{isAppleModalOpen && (
        <AppleAuraModal isOpen={isAppleModalOpen} onClose={() => setIsAppleModalOpen(false)} />
      )}</AnimatePresence>
      <AnimatePresence>{factModalProduct && (
        <ProductFactModal isOpen={!!factModalProduct} onClose={() => setFactModalProduct(null)} product={factModalProduct} />
      )}</AnimatePresence>
      <AnimatePresence>{isAddFarmOpen && (
        <AddFarmModal
          isOpen={isAddFarmOpen}
          onClose={() => setIsAddFarmOpen(false)}
          onAdd={handleRegisterFarm}
          t={t}
          showToast={showToast}
        />
      )}</AnimatePresence>
    </div>
  );
};

export default App;