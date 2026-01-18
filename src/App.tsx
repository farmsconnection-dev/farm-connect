// @ts-nocheck
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
import { RoleSelectionModal } from './components/modals/RoleSelectionModal';
import { LoginPromptModal } from './components/modals/LoginPromptModal';
import { FarmerManualModal } from './components/modals/FarmerManualModal';
import { FarmDetailModal } from './components/modals/FarmDetailModal';
import { AiAdviceModal } from './components/modals/AiAdviceModal';
import { SeasonCalendarModal } from './components/modals/SeasonCalendarModal';
import { ImageModal } from './components/modals/ImageModal';
import { ProductFactsModal } from './components/modals/ProductFactsModal';
import { FeedbackModal } from './components/modals/FeedbackModal';

// --- PAGES ---
import { LandingPage } from './pages/LandingPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { VendingPage } from './pages/VendingPage';
import { MyFarmPage } from './pages/MyFarmPage';
import { InventoryPage } from './pages/InventoryPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AdminPage } from './pages/AdminPage';
import { AdminProspectsPage } from './pages/AdminProspectsPage';
import { VerificationPendingPage } from './pages/VerificationPendingPage';
import { RegisterFarmPage } from './pages/RegisterFarmPage';

// --- ASSETS ---
import logo from './assets/logo-header.png';

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
  const [view, setView] = useState<ViewState>(() => {
    // Initial check for recovery
    if (localStorage.getItem('force_view') === 'farmer') return 'farmer';
    return 'landing'; // Always start at landing unless forced or logged in
  });
  const [previousView, setPreviousView] = useState<ViewState>('discover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Check if we're coming from OAuth redirect (has access_token in URL)
  const [isAuthLoading, setIsAuthLoading] = useState(() =>
    window.location.hash.includes('access_token') || window.location.hash.includes('error')
  );
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Gebruiker',
    email: '',
    isLoggedIn: false
  });



  // FORCE VIEW LOGIC (Recovery from hanging registration)
  useEffect(() => {
    const forcedView = localStorage.getItem('force_view');
    if (forcedView === 'farmer') {
      console.log("⚡ Forced view detected: Farmer Dashboard");
      setUserType('farmer');
      setView('farmer');
      localStorage.removeItem('force_view');
    }
  }, []);

  // Safety net: Force stop loading after 4 seconds if stuck
  useEffect(() => {
    if (isAuthLoading) {
      const timer = setTimeout(() => {
        console.warn('⚠️ Auth loading timed out, forcing app open.');
        setIsAuthLoading(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isAuthLoading]);

  // SESSION PERSISTENCE LOGIC (Respect "Aangemeld blijven" checkbox)
  useEffect(() => {
    const handlePersistence = async () => {
      const stayLoggedIn = localStorage.getItem('fc_stay_logged_in') === 'true';
      const hasTabSession = sessionStorage.getItem('fc_active_tab') === 'true';

      const { data: { session } } = await supabase.auth.getSession();

      if (session && !stayLoggedIn && !hasTabSession) {
        console.log("🔒 Non-persistent session detected: Clearing for fresh visit.");
        await supabase.auth.signOut();
      }

      // If we are logged in (either restored or just started), mark the tab as active
      if (session) {
        sessionStorage.setItem('fc_active_tab', 'true');
      } else {
        // Enforce redirect to landing if no session, UNLESS guest mode is active
        const isGuest = sessionStorage.getItem('guest_mode') === 'true';
        if (isGuest) {
          setUserType('discoverer');
          if (view === 'landing') setView('discover');
        } else {
          setView('landing');
          setIsAuthModalOpen(true);
        }
      }
    };

    handlePersistence();
  }, []);



  // Farms Data (Single Source of Truth)
  const [farms, setFarms] = useState<Farm[]>(() => {
    const saved = localStorage.getItem('saved_farms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved farms", e);
      }
    }
    return INITIAL_FARMS.map(f => ({
      ...f,
      referralCode: `FARM-${f.id.toUpperCase()}-X8`,
      referralBalance: 0,
      subscription: 'annual'
    }));
  });

  // Persist farms to localStorage
  useEffect(() => {
    localStorage.setItem('saved_farms', JSON.stringify(farms));
  }, [farms]);

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
  const [isRoleSelectionOpen, setIsRoleSelectionOpen] = useState(false);
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [isProductFactsOpen, setIsProductFactsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const [toast, setToast] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [claimName, setClaimName] = useState('');

  // Handle Claim Link Logic
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || params.get('claim_name');

    if (name) {
      console.log('🔗 Claim detected:', name);
      setClaimName(name);
      localStorage.setItem('claim_name', name);
      localStorage.setItem('pendingRole', 'farmer'); // Force farmer flow
      setPendingRole('farmer');

      if (!userProfile.isLoggedIn) {
        setIsAuthModalOpen(true); // Prompt login
        showToast(`Welkom ${name}! Log in om je profiel te claimen.`);
      }
    } else {
      // Check local storage if we lost params due to redirect
      const stored = localStorage.getItem('claim_name');
      if (stored) setClaimName(stored);
    }
  }, [userProfile.isLoggedIn]);

  // Redirect to register after login if claim exists
  useEffect(() => {
    if (userProfile.isLoggedIn && claimName && view !== 'register_farm' && userType !== 'farmer') {
      setView('register_farm');
    }
  }, [userProfile.isLoggedIn, claimName, view, userType]);

  const [detailFarm, setDetailFarm] = useState<Farm | null>(null);
  const [factModalProduct, setFactModalProduct] = useState<string | null>(null);
  const [pendingRole, setPendingRole] = useState<'discoverer' | 'farmer' | null>(() => {
    const saved = localStorage.getItem('pendingRole');
    return (saved === 'farmer' || saved === 'discoverer') ? saved : null;
  });

  useEffect(() => {
    if (pendingRole) {
      localStorage.setItem('pendingRole', pendingRole);
    } else {
      localStorage.removeItem('pendingRole');
    }
  }, [pendingRole]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFarmerVerified, setIsFarmerVerified] = useState<boolean>(true); // Default true for existing users

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

  // Fix: Clean up access_token from URL after Google Login
  useEffect(() => {
    if (window.location.hash && window.location.hash.includes('access_token')) {
      const timer = setTimeout(() => {
        window.history.replaceState(null, '', window.location.pathname);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    // Push initial state when logged in
    if (userProfile.isLoggedIn && view !== 'landing') {
      window.history.pushState({ view, loggedIn: true }, '', window.location.pathname);
    }

    const handlePopState = (event: PopStateEvent) => {
      // Logic for handling back button
      if (userProfile.isLoggedIn) {
        if (detailFarm) {
          setDetailFarm(null);
        } else if (isSeasonCalendarOpen) {
          setIsSeasonCalendarOpen(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        } else if (view !== 'discover' && view !== 'farmer') {
          setView('discover');
        } else {
          // Default behavior (exits app or goes back in history stack if logic fails)
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [userProfile.isLoggedIn, view, isSeasonCalendarOpen, detailFarm, isMenuOpen]);

  // --- History State Management Hooks ---
  useEffect(() => {
    if (detailFarm) window.history.pushState({ modal: 'farmDetail' }, '');
  }, [detailFarm]);

  useEffect(() => {
    if (isSeasonCalendarOpen) window.history.pushState({ modal: 'seasonCalendar' }, '');
  }, [isSeasonCalendarOpen]);

  useEffect(() => {
    if (isMenuOpen) window.history.pushState({ modal: 'menu' }, '');
  }, [isMenuOpen]);

  // Supabase Auth Listener - voor Google OAuth

  const checkFarmerVerification = async (email: string, retries = 3) => {
    console.log(`🔍 Checking farmer verification for: ${email} (Attempts left: ${retries})`);
    try {
      // Use raw fetch for better consistency during registration flow
      const rawUrl = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/farms?owner_email=eq.${encodeURIComponent(email)}&select=*`;
      const response = await fetch(rawUrl, {
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);

      const userFarms = await response.json();
      const myFarm = userFarms?.[0];

      if (myFarm) {
        console.log('✅ Farm found, syncing to state');
        setIsFarmerVerified(myFarm.is_verified ?? false);

        // Sync to global farms list so dashboard isn't empty
        setFarms(prev => {
          const exists = prev.some(f => f.id === myFarm.id);
          if (exists) return prev;
          return [myFarm, ...prev];
        });

        setUserType('farmer');
        setView('farmer');
      } else if (retries > 0) {
        console.log('⏳ No farm found yet, retrying in 2 seconds...');
        setTimeout(() => checkFarmerVerification(email, retries - 1), 2000);
      } else {
        console.warn('⚠️ No farm found after retries.');
        // If we haven't redirected yet, we stay on registration. 
        // But usually onSuccess handles the immediate redirect.
      }
    } catch (err) {
      console.error('❌ Unexpected error in checkFarmerVerification:', err);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔐 Auth State Change:', event, session?.user?.email);

      if (session) {
        const { email, user_metadata } = session.user;
        const name = user_metadata.full_name || email?.split('@')[0] || 'Gebruiker';
        const photoUrl = user_metadata.avatar_url;

        setUserProfile({
          name,
          email: email || '',
          photoUrl,
          id: session.user.id,
          isLoggedIn: true
        });

        // CRITICAL FIX: Ensure user profile exists in DB
        try {
          const { error: upsertError } = await supabase.from('user_profiles').upsert({
            id: session.user.id,
            email: email || '',
            name: name || 'User',
            photo_url: photoUrl,
            role: 'consumer'
          });
          if (upsertError) throw upsertError;
        } catch (err) {
          console.error('Error syncing profile:', err);
        }

        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
          // ADMIN BYPASS
          if (email?.toLowerCase() === 'farmsconnection@gmail.com') {
            setUserType('farmer');
            setView('admin');
            setIsAuthModalOpen(false);
            localStorage.removeItem('pendingRole');
            sessionStorage.removeItem('guest_mode');
            setIsAuthLoading(false);
            return;
          }

          try {
            const rawUrl = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/farms?owner_id=eq.${session.user.id}&select=*`;
            const response = await fetch(rawUrl, {
              headers: {
                'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
              }
            });

            if (response.ok) {
              const userFarms = await response.json();
              if (userFarms && userFarms.length > 0) {
                setFarms(prev => {
                  const existingIds = new Set(prev.map(f => f.id));
                  const newFarms = userFarms.filter((f: any) => !existingIds.has(f.id));
                  return [...newFarms, ...prev];
                });
                setUserType('farmer');
                setIsFarmerVerified(userFarms[0].is_verified !== false);
                if (view === 'landing') setView('farmer');
              } else {
                const storedRole = localStorage.getItem('pendingRole');
                if (storedRole === 'farmer') {
                  setUserType('farmer');
                  setView('register_farm');
                } else if (storedRole === 'discoverer') {
                  setUserType('discoverer');
                  setView('discover');
                } else if (event === 'SIGNED_IN') {
                  // Default to discoverer instead of showing modal to avoid extra clicks
                  setUserType('discoverer');
                  setView('discover');
                }
              }
            }
          } catch (fetchErr) {
            console.error("❌ Failed to fetch user farms via raw fetch", fetchErr);
          }
          localStorage.removeItem('pendingRole');
        }

        setIsAuthModalOpen(false);
        setIsLoginPromptOpen(false);
        setIsMenuOpen(false);
        setIsAuthLoading(false);
      } else if (event === 'SIGNED_OUT') {
        setUserProfile({ name: 'Gebruiker', email: '', isLoggedIn: false });
        setUserType(null);
        setView('landing');
        localStorage.removeItem('pendingRole');
        sessionStorage.removeItem('guest_mode');
        // Automatically show login modal on logout to landing
        setIsAuthModalOpen(true);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Google Maps Loader
  const googleMapsOptions = useMemo(() => ({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries,
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: true,
  }), []);

  // Debug Maps API Key
  useEffect(() => {
    if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
      console.error('❌ Google Maps API Key is missing! Check your .env file.');
      showToast('⚠️ Google Maps werkt niet: API Key ontbreekt');
    } else {
      console.log('✅ Google Maps API Key loaded.');
    }

    // Global Google Maps Auth Failure Handler
    window.gm_authFailure = () => {
      const msg = '⚠️ Google Maps Fout: API Key ongeldig of billing niet geactiveerd. Controleer Google Cloud Console.';
      console.error(msg);
      // Show aggressive alert on mobile to ensure visibility
      alert(msg);
      showToast(msg);
    };
  }, []);

  const { isLoaded, loadError } = useJsApiLoader(googleMapsOptions);


  // --- Actions ---

  // Track farm views
  const handleUpdateFarm = async (updatedFarm: Farm) => {
    setFarms(prev => prev.map(f => f.id === updatedFarm.id ? updatedFarm : f));

    try {
      const { error } = await supabase
        .from('farms')
        .update({
          name: updatedFarm.name,
          phone: updatedFarm.phone || (updatedFarm as any).telefoonnummer,
          heeft_automaat: updatedFarm.heeft_automaat,
          automaat_adres: updatedFarm.automaat_adres,
          schedule: updatedFarm.schedule,
          products: updatedFarm.products,
          statusUpdate: updatedFarm.statusUpdate,
          image: updatedFarm.image,
          address: updatedFarm.address,
          subscription: updatedFarm.subscription,
          extra_automaten: updatedFarm.extra_automaten
        })
        .eq('id', updatedFarm.id);

      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }
    } catch (err) {
      console.error('Error updating farm:', err);
      showToast('Fout bij opslaan: controleer je internet');
    }
  };

  const handleSetDetailFarm = async (farm: Farm | null) => {
    if (farm) {
      // Fire and forget stats update
      supabase.rpc('increment_farm_view', { p_farm_id: farm.id })
        .then(({ error }) => { if (error) console.error('Stats error:', error); });
    }
    setDetailFarm(farm);
  };

  const handlePostLoginRoleSelect = (role: 'discoverer' | 'farmer') => {
    setUserType(role);
    if (role === 'farmer') {
      setView('register_farm');
    } else {
      setView('discover');
    }
    setIsRoleSelectionOpen(false);
  };

  const handleRoleSelect = (role: 'discoverer' | 'farmer') => {
    console.log('🎯 Role selected:', role);
    localStorage.setItem('pendingRole', role);
    setPendingRole(role);
    // Small delay to ensure state is set before opening modal
    setTimeout(() => {
      setIsAuthModalOpen(true);
    }, 50);
  };



  const handleLogin = (email: string, name: string) => {
    sessionStorage.removeItem('guest_mode'); // Clear persisted preference
    setUserProfile({ name, email, photoUrl: 'https://picsum.photos/id/1005/100/100', isLoggedIn: true });
    if (pendingRole === 'farmer') {
      checkFarmerVerification(email);
    } else {
      setUserType('discoverer');
      setView('discover');
    }
    setIsAuthModalOpen(false);
    setIsLoginPromptOpen(false);
    setIsMenuOpen(false);
  };

  const handleContinueAsGuest = () => {
    sessionStorage.setItem('guest_mode', 'true');
    setUserType('discoverer');
    setView('discover');
    setIsAuthModalOpen(false);
    showToast('🚜 Je bent nu als gast bezig.');
  };

  const handleLogout = async () => {
    console.log("🚪 Logging out / Returning to start...");

    // 1. Reset flags immediately
    sessionStorage.removeItem('guest_mode');
    localStorage.removeItem('fc_stay_logged_in');
    sessionStorage.removeItem('fc_active_tab');

    // 2. Clear state
    setUserProfile({ name: 'Gebruiker', email: '', isLoggedIn: false });
    setUserType(null);
    setView('landing');
    setFavorites(new Set());
    setIsMenuOpen(false);

    // 3. Trigger Supabase signout
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error("SignOut error:", e);
    }
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
      const tips = [t('tip_1'), t('tip_2'), t('tip_3'), t('tip_4'), t('tip_5'), t('tip_6'), t('tip_7'), t('tip_8'), t('tip_9'), t('tip_10')];
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


  // Show loading screen while processing OAuth callback
  if (isAuthLoading) {
    return (
      <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-emerald-950 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6 overflow-hidden">
            <img src={logo} alt="Farm Connect" className="w-full h-full object-cover scale-[1.6]" />
          </div>
          <Loader2 className="animate-spin text-white mx-auto mb-4" size={32} />
          <p className="text-white font-bold text-lg">Even geduld...</p>
          <p className="text-emerald-200/60 text-sm">Je wordt ingelogd</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-emerald-950 to-black text-slate-800 font-sans overflow-hidden relative">
      <AnimatePresence>{toast && (<motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-forest text-mint px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border-2 border-white/20"><CheckCircle size={24} />{toast}</motion.div>)}</AnimatePresence>

      {/* --- Persistent Header --- */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-[60] pointer-events-none">
        <div className="pointer-events-auto flex items-center h-full">
          {(view === 'landing' || view === 'register_farm') ? (
            <div className={`items-center gap-3 select-none pointer-events-none ${view === 'landing' ? 'hidden sm:flex' : 'flex'}`}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 overflow-hidden">
                <img src={logo} alt="Farm Connect" className="w-full h-full object-cover scale-[1.6]" />
              </div>
              <h1 className={`text-2xl font-black tracking-tight drop-shadow-md ${view === 'landing' ? 'text-white' : 'text-slate-800'}`}>
                Farm <span className="text-amber-500">Connect</span>
              </h1>
            </div>
          ) : (
            <motion.button
              onClick={() => {
                if (view === 'discover') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  return;
                }
                if (detailFarm) setDetailFarm(null);
                setView('discover');
              }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="flex items-center group transition-transform active:scale-95 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-2 border-white/50 overflow-hidden">
                  <img src={logo} alt="Farm Connect" className="w-full h-full object-cover scale-[1.6]" />
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                  Farm <span className="text-amber-500">Connect</span>
                </h1>
              </div>
              <span className="text-xs italic text-emerald-200 font-black uppercase tracking-widest ml-4 transition-all duration-300 transform self-center">
                {t('tagline')}
              </span>
            </motion.button>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`${view === 'landing' ? 'bg-white/10 text-white border-white/10' : 'bg-forest/90 text-white border-forest/20'} backdrop-blur-xl px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full shadow-lg font-black text-[10px] sm:text-xs flex items-center gap-1 border hover:bg-opacity-80 transition-all`}
            >
              {lang.toUpperCase()} <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </motion.button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-20 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-1 z-[9999]">
                  {(['nl', 'fr', 'en', 'de'] as Language[]).map((l) => (
                    <motion.button key={l} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setLang(l); setIsLangOpen(false); }} className={`w-full text-center py-2 rounded-xl text-xs font-bold ${lang === l ? 'bg-forest text-mint' : 'text-slate-600 hover:bg-slate-50'}`}>{l.toUpperCase()}</motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {view !== 'landing' && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMenuOpen(true)}
              className={`${view === 'landing' ? 'bg-white/10 text-white border-white/10' : 'bg-forest/90 text-white border-forest/20'} backdrop-blur-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 transition-all border`}
            >
              <Menu size={20} className="sm:hidden" />
              <Menu size={24} className="hidden sm:block" />
            </motion.button>
          )}
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
              setUserProfile={setUserProfile}
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
            setDetailFarm={handleSetDetailFarm}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            handleRouteClick={handleRouteClick}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            userProfile={userProfile}
            lang={lang}
          />
        )}
        {view === 'favorites' && (
          <FavoritesPage
            t={t}
            setView={setView}
            favorites={favorites}
            farms={farms}
            setDetailFarm={handleSetDetailFarm}
            toggleFavorite={toggleFavorite}
            handleRouteClick={handleRouteClick}
            lang={lang}
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
            showToast={showToast}
          />
        )}
        {view === 'farmer' && userType === 'farmer' && (
          <FarmerDashboard
            t={t}
            farms={farms}
            setFarms={setFarms}
            onUpdateFarm={handleUpdateFarm}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            fetchHarvestAdvice={fetchHarvestAdvice}
            setIsAddFarmOpen={setIsAddFarmOpen}
            setIsReferralModalOpen={setIsReferralModalOpen}
            showToast={showToast}
            isVerified={isFarmerVerified}
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
            userProfile={userProfile}
          />
        )}
        {view === 'vending' && (
          <VendingPage
            t={t}
            setView={setView}
            farms={farms}
            setFarms={setFarms}
            onUpdateFarm={handleUpdateFarm}
            showToast={showToast}
            userProfile={userProfile}
          />
        )}
        {view === 'my_farm' && (
          <MyFarmPage
            t={t}
            setView={setView}
            farms={farms}
            setFarms={setFarms}
            onUpdateFarm={handleUpdateFarm}
            showToast={showToast}
            userProfile={userProfile}
            setIsReferralModalOpen={setIsReferralModalOpen}
          />
        )}
        {view === 'verification_pending' && (
          <VerificationPendingPage onLogout={handleLogout} t={t} />
        )}
        {view === 'register_farm' && (
          <RegisterFarmPage
            email={userProfile.email}
            userId={userProfile.id}
            onSuccess={() => {
              console.log("🚀 Immediate redirect to dashboard after registration");
              setUserType('farmer');
              setIsFarmerVerified(false); // Initially unverified
              setView('farmer');
              checkFarmerVerification(userProfile.email); // Sync data in background
            }}
            onLogout={handleLogout}
            lang={lang}
            t={t}
            initialName={claimName}
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
        {view === 'admin_prospects' && (
          <AdminProspectsPage
            onBack={() => setView('admin')}
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
          onRegisterNewFarm={() => {
            setIsAuthModalOpen(false);
            setView('register_farm');
          }}
          t={t}
          showToast={showToast}
          onContinueAsGuest={handleContinueAsGuest}
        />
      )}</AnimatePresence>

      <AnimatePresence>{isSeasonCalendarOpen && (
        <SeasonCalendarModal
          isOpen={isSeasonCalendarOpen}
          onClose={() => setIsSeasonCalendarOpen(false)}
          t={t}
          handleSeasonalItemClick={handleSeasonalItemClick}
          currentMonthIndex={currentMonthIndex}
          lang={lang}
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
          lang={lang}
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

      {/* Floating Feedback Button */}
      {view !== 'landing' && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFeedbackOpen(true)}
          className="fixed bottom-6 left-6 z-[100] bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold transition-all border-2 border-white/20"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">{t('feedback_title')}</span>
        </motion.button>
      )}

      {/* Feedback Modal */}
      <AnimatePresence>{isFeedbackOpen && (
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
          googleSheetsUrl="https://script.google.com/macros/s/AKfycbzSTfq5OOqMuGu_5SWYM1G9LF9re9fm22Tg9nkXC4wwXtonroh9PqzwujdRVWhp4Beg3w/exec"
          t={t}
        />
      )}</AnimatePresence>

      <RoleSelectionModal
        isOpen={isRoleSelectionOpen}
        onClose={() => setIsRoleSelectionOpen(false)}
        onSelectRole={handlePostLoginRoleSelect}
      />
    </div>
  );
};

export default App;