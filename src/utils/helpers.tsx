import React from 'react';
import { Leaf, Apple, Milk, Egg, Car, Navigation, ShoppingBag, Drumstick, Utensils } from 'lucide-react';
import { DaySchedule, Farm } from '../types';
import { SMART_IMAGE_MAP, FALLBACK_PRODUCT_IMAGE } from '../constants';

export const getSeasonalImage = (itemName: string) => {
    const key = itemName.toLowerCase().trim();

    // Try exact match first
    if (SMART_IMAGE_MAP[key]) return SMART_IMAGE_MAP[key];

    // Try partial match - key contains search term or vice versa
    const match = Object.keys(SMART_IMAGE_MAP).find(k => {
        const keyLower = k.toLowerCase();
        return key.includes(keyLower) || keyLower.includes(key) ||
            key.split(' ').some(word => word.length > 2 && (keyLower.includes(word) || word.includes(keyLower)));
    });

    return match ? SMART_IMAGE_MAP[match] : FALLBACK_PRODUCT_IMAGE;
};

// ... (existing code omitted)

export const getFilterIcon = (filter: string) => {
    switch (filter) {
        case 'open': return '🟢';
        case 'fruit': return '🍎';
        case 'vegetables': return '🥦';
        case 'dairy': return '🥛';
        case 'meat': return '🥩';
        case 'eggs': return '🥚';
        case 'nearby': return '📍';
        case 'route': return '🚗';
        default: return '🛒';
    }
};

export const getCategoryColor = (category: string) => {
    switch (category) {
        case 'fruit': return 'bg-white text-red-500 border border-red-500/20 shadow-sm';
        case 'vegetables': return 'bg-white text-green-500 border border-green-500/20 shadow-sm';
        case 'dairy': return 'bg-white text-blue-400 border border-blue-400/20 shadow-sm';
        case 'meat': return 'bg-white text-orange-700 border border-orange-700/20 shadow-sm';
        case 'eggs': return 'bg-white text-yellow-500 border border-yellow-500/20 shadow-sm';
        case 'open': return 'bg-emerald-500 text-white shadow-emerald-500/20';
        case 'route': return 'bg-blue-500 text-white shadow-blue-500/20';
        default: return 'bg-amber-500 text-white shadow-amber-500/20';
    }
};

export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(1));
};

export const isNew = (dateStr: string) => {
    const joined = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - joined.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
};

export const getLiveStatus = (schedule: DaySchedule[]) => {
    const now = new Date();
    const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    const currentDay = days[now.getDay()];
    const todaySchedule = schedule.find(s => s.day === currentDay);

    if (todaySchedule?.isOpen) {
        const currentTime = now.getHours() * 100 + now.getMinutes();
        const [openH, openM] = todaySchedule.openTime.split(':').map(Number);
        const [closeH, closeM] = todaySchedule.closeTime.split(':').map(Number);
        const openTime = openH * 100 + openM;
        const closeTime = closeH * 100 + closeM;

        if (currentTime >= openTime && currentTime < closeTime) {
            return { label: 'OPEN', color: 'bg-emerald-500 text-white' };
        }
    }
    return { label: 'GESLOTEN', color: 'bg-red-500 text-white' };
};



export const getFarmCategoryIcon = (farm: Farm) => {
    // Count categories to find most common
    const categoryCounts: Record<string, number> = {};
    farm.products.forEach(p => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    // Find category with highest count
    const primaryCategory = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])[0]?.[0];

    // Return icon based on primary category
    switch (primaryCategory) {
        case 'fruit': return '🍎';
        case 'vegetables': return '🥦';
        case 'dairy': return '🥛';
        case 'meat': return '🥩';
        case 'eggs': return '🥚';
        case 'no-waste': return '♻️';
        default: return '🏡';
    }
};
