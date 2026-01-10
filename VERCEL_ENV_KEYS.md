# 🔑 Vercel Environment Variables - Quick Guide

## Vul deze 3 variables in op Vercel:

### 1. VITE_SUPABASE_URL
**Key:** `VITE_SUPABASE_URL`  
**Value:** `https://bpwlxlimlkmkqnnqxluk.supabase.co`

### 2. VITE_SUPABASE_ANON_KEY
**Key:** `VITE_SUPABASE_ANON_KEY`  
**Value:** [zie hieronder hoe je deze vindt]

**Hoe vind je deze:**
1. Ga naar: https://bpwlxlimlkmkqnnqxluk.supabase.co
2. Klik "Settings" (tandwiel icoon links)
3. Klik "API"
4. Kopieer de **"anon public"** key
5. Plak in Vercel

### 3. VITE_GOOGLE_MAPS_API_KEY
**Key:** `VITE_GOOGLE_MAPS_API_KEY`  
**Value:** [je Google Maps API key]

**Hoe vind je deze:**
1. Ga naar: https://console.cloud.google.com/apis/credentials
2. Zoek je API key
3. Kopieer de key
4. Plak in Vercel

---

## Na het toevoegen:

1. Klik "Save" bij elke variable
2. Ga naar "Deployments" tab
3. Klik "..." bij laatste deployment
4. Klik "Redeploy"
5. Wacht 2 minuten
6. **App werkt!** ✅
