// @ts-nocheck
import React, { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, HelpCircle, TrendingUp, Box, Heart, Users, Compass, Calendar, Leaf, LogIn, LogOut, User, ShieldCheck, ArrowLeftCircle, Store, Tractor, Edit, ChevronDown, ChevronRight } from 'lucide-react';
import { UserType, UserProfile, ViewState } from '../../types';

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    action?: () => void;
    subItems?: MenuItem[];
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    view: ViewState;
    setView: (view: ViewState) => void;
    userType: UserType;
    userProfile: UserProfile;
    setUserProfile?: (profile: UserProfile) => void;
    handleLogout: () => void;
    handleLogin: () => void;
    setIsLoginPromptOpen: (open: boolean) => void;
    setIsSeasonCalendarOpen: (open: boolean) => void;
    setIsReferralModalOpen: (open: boolean) => void;
    t: (key: string) => string;
}

export const Sidebar: React.FC<SidebarProps> = ({
    isOpen, onClose, view, setView, userType, userProfile, setUserProfile,
    handleLogout, handleLogin, setIsLoginPromptOpen, setIsSeasonCalendarOpen, setIsReferralModalOpen, t
}) => {
    const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set(['inventory_group']));

    // File upload logic for profile picture
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && setUserProfile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProfile({
                    ...userProfile,
                    photoUrl: reader.result as string
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const menuItems = useMemo((): MenuItem[] => {
        // ADMIN EMAIL - Vervang met je echte email!
        // ADMIN EMAIL - Vervang met je echte email!
        const ADMIN_EMAIL = 'farmsconnection@gmail.com';
        // Only allow admin access for specific email
        const isAdmin = userProfile.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

        const common = [
            { id: 'about', label: t('menu_about'), icon: <Leaf size={20} /> },
            { id: 'support', label: t('menu_support'), icon: <HelpCircle size={20} /> },
        ];

        // ADMIN GETS SPECIAL MENU (no farmer stuff)
        if (isAdmin) {
            return [
                { id: 'admin', label: 'Admin Dashboard', icon: <ShieldCheck size={20} /> },
                { id: 'admin_prospects', label: 'Prospects', icon: <Users size={20} /> },
                { id: 'discover', label: t('menu_discover'), icon: <Compass size={20} /> },
                ...common
            ];
        }

        if (userType === 'farmer') {
            const farmerItems = [
                { id: 'farmer', label: 'Dashboard', icon: <TrendingUp size={20} /> },
                {
                    id: 'inventory_group',
                    label: t('menu_inventory'),
                    icon: <Box size={20} />,
                    subItems: [
                        { id: 'my_farm', label: 'Mijn Boerderij', icon: <Tractor size={18} /> },
                        { id: 'vending', label: 'Mijn Automaten', icon: <Store size={18} /> },
                        { id: 'inventory', label: 'Mijn Producten', icon: <Box size={18} /> },
                    ]
                },
                { id: 'favorites', label: t('menu_favorites'), icon: <Heart size={20} /> },

                { id: 'calendar', label: t('menu_calendar'), icon: <Calendar size={20} />, action: () => setIsSeasonCalendarOpen(true) },
                ...common
            ];
            return farmerItems;
        }

        const discovererItems = [
            { id: 'discover', label: t('menu_discover'), icon: <Compass size={20} /> },
            { id: 'calendar', label: t('menu_calendar'), icon: <Calendar size={20} />, action: () => setIsSeasonCalendarOpen(true) },
            { id: 'favorites', label: t('menu_favorites'), icon: <Heart size={20} /> },
            ...common
        ];
        // Add admin at the end if user is admin
        if (isAdmin) {
            discovererItems.push({ id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> });
        }
        return discovererItems;
    }, [userType, userProfile.email, t, setIsSeasonCalendarOpen, setIsReferralModalOpen]);

    /* isOpen check handled by AnimatePresence in parent usually, or we can return null here. 
       The original code had AnimatePresence wrapping it, so this component returns the motion.div directly.
    */
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[200] w-[85vw] sm:w-80 max-w-[320px] bg-emerald-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col text-white rounded-l-[32px] overflow-hidden"
        >
            <div className="absolute top-4 right-4 z-[210]">
                <button
                    onClick={onClose}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all text-amber-400 border border-white/10 shadow-lg active:scale-95"
                    aria-label="Sluit menu"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="p-6 sm:p-8 flex items-center justify-end h-20" />
            <div className="px-6 sm:px-8 pb-8 flex flex-col items-center text-center border-b border-white/10 mb-4 -mt-6">
                <div className="relative group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-apple bg-white/10 border-4 border-white/20 shadow-xl overflow-hidden mb-4 p-2 flex items-center justify-center relative">
                        {userProfile.photoUrl ? (
                            <img src={userProfile.photoUrl} className="w-full h-full object-cover rounded-[32px]" alt="Profile" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-transparent text-mint rounded-[32px]">
                                <User size={48} className="sm:hidden" />
                                <User size={64} className="hidden sm:block" />
                            </div>
                        )}

                        {/* Farmer Edit Overlay */}
                        {userType === 'farmer' && userProfile.isLoggedIn && (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-[32px]"
                            >
                                <Edit className="text-white drop-shadow-md" size={24} />
                            </div>
                        )}
                    </div>
                    {/* Always visible edit button for mobile/ux clarity */}
                    {userType === 'farmer' && userProfile.isLoggedIn && (
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute -bottom-2 -right-2 bg-amber-500 text-white p-2 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10"
                        >
                            <Edit size={14} />
                        </button>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                {userProfile.isLoggedIn ? (
                    <div>
                        <p className="font-bold text-white text-lg sm:text-xl mb-1">{userProfile.name}</p>
                        <p className="text-xs text-white/50 font-medium uppercase tracking-widest">{userType === 'farmer' ? t('btn_farmer') : t('btn_discoverer')}</p>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="w-full bg-forest text-mint py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg mt-2"><LogIn size={16} /> {t('login')}</button>
                )}
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {menuItems.map(item => {
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedItems.has(item.id);
                    const isActive = view === item.id || (item.subItems?.some(s => s.id === view));

                    return (
                        <div key={item.id} className="space-y-1">
                            <button
                                onClick={() => {
                                    if (hasSubItems) {
                                        setExpandedItems(prev => {
                                            const next = new Set(prev);
                                            if (next.has(item.id)) next.delete(item.id);
                                            else next.add(item.id);
                                            return next;
                                        });
                                    } else {
                                        if (item.id === 'favorites' && !userProfile.isLoggedIn) {
                                            setIsLoginPromptOpen(true);
                                            onClose();
                                            return;
                                        }

                                        if (item.action) item.action();
                                        else setView(item.id as ViewState);
                                        onClose();
                                    }
                                }}
                                className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-2xl font-bold transition-all text-white hover:bg-white/10 ${view === item.id ? 'bg-white/10 text-amber-400 shadow-inner' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={view === item.id ? 'text-amber-400' : 'text-mint'}>{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                                {hasSubItems && (
                                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                                        <ChevronDown size={18} className="text-white/40" />
                                    </motion.div>
                                )}
                            </button>

                            {hasSubItems && isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="pl-12 space-y-1 overflow-hidden"
                                >
                                    {item.subItems.map(sub => (
                                        <button
                                            key={sub.id}
                                            onClick={() => {
                                                if (sub.action) sub.action();
                                                else setView(sub.id as ViewState);
                                                onClose();
                                            }}
                                            className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all hover:bg-white/5 ${view === sub.id ? 'text-amber-400 bg-white/5' : 'text-white/70'}`}
                                        >
                                            <span className={view === sub.id ? 'text-amber-400' : 'text-white/30'}>{sub.icon}</span>
                                            {sub.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="p-6 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-colors ${userProfile.isLoggedIn
                        ? 'text-red-400 hover:bg-red-500/10'
                        : 'text-slate-400 hover:bg-white/5'
                        }`}
                >
                    {userProfile.isLoggedIn ? <LogOut size={20} /> : <ArrowLeftCircle size={20} />}
                    {userProfile.isLoggedIn ? t('logout') : "Terug naar Start"}
                </button>
                <div className="mt-4 px-2">
                    <p className="text-[10px] text-mint/40 font-bold leading-tight uppercase tracking-wider">
                        Tip: Installeer als App via je browser voor direct toegang!
                    </p>
                </div>
                <div className="text-center mt-4 text-[10px] text-white/20 font-medium px-4 leading-relaxed">
                    © 2026 FarmConnect. Alle rechten voorbehouden.<br />
                    Concept en ontwerp officieel geregistreerd onder i-DEPOT 156857 & 156899.
                </div>
            </div>
        </motion.div>
    );
};
