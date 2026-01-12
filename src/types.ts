
export type Language = 'nl' | 'fr' | 'en' | 'de';
export type UserType = 'guest' | 'discoverer' | 'farmer' | null;
export type ViewState = 'landing' | 'discover' | 'farmer' | 'inventory' | 'about' | 'support' | 'favorites' | 'admin' | 'admin_prospects' | 'register_farm' | 'verification_pending';
export type ProductCategory = 'all' | 'nearby' | 'fruit' | 'vegetables' | 'dairy' | 'meat' | 'eggs' | 'honey' | 'nuts' | 'route' | 'no-waste' | 'other';

export interface TranslationDictionary {
  [key: string]: {
    nl: string;
    fr: string;
    en: string;
    de?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  image: string;
  available: boolean;
  price?: string;
  unit?: string;
  description?: string;
  category: ProductCategory;
  images?: string[];
}

export interface Farm {
  id: string;
  name: string;
  image: string;
  lat: number;
  lng: number;
  products: Product[];
  address: string;
  phone?: string;
  telefoonnummer?: string; // New field for automaat
  distance?: number;
  schedule?: DaySchedule[];
  joinedDate: string; // ISO format
  followerCount: number;
  paymentMethods?: ('cash' | 'payconiq')[];
  lastStockUpdate?: string; // ISO format
  images?: string[]; // Array of image URLs for slider
  referralCode?: string;
  referralBalance?: number;
  subscription?: 'monthly' | 'annual' | 'trial';
  statusUpdate?: {
    message: string;
    expiresAt: string; // ISO format
  };
  heeft_automaat?: boolean; // 24/7 vending machine
  is_verified?: boolean; // Admin verification
  owner_id?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  photoUrl?: string;
  isLoggedIn: boolean;
  id?: string;
}

export interface DaySchedule {
  day: string; // 'mon', 'tue', etc.
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

// Added missing interface for AI harvest advice state
export interface AiHarvestAdvice {
  suggestions: string[];
  marketingDescription: string;
  dailyTip: string;
  isSimulated: boolean;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

declare global {
  interface Window {
    google: any;
  }
}
