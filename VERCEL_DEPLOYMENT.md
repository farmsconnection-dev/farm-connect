# 🚀 VERCEL DEPLOYMENT GUIDE - FarmConnect

## ✅ Pre-Deployment Checklist:

Voordat je deploy naar Vercel, check deze dingen:

### 1. Environment Variables (.env)
- [ ] `VITE_SUPABASE_URL` is ingevuld
- [ ] `VITE_SUPABASE_ANON_KEY` is ingevuld
- [ ] `VITE_GOOGLE_MAPS_API_KEY` is ingevuld

### 2. Database Setup
- [ ] SQL migration is gerund in Supabase
- [ ] `farms` tabel heeft nieuwe kolommen (heeft_automaat, is_verified, telefoonnummer)
- [ ] `admin_users` tabel bestaat
- [ ] Je admin email staat in `admin_users` tabel

### 3. Google OAuth
- [ ] Google provider is enabled in Supabase
- [ ] Callback URL is toegevoegd aan Google Cloud Console
- [ ] Test: Google login werkt lokaal ✅

### 4. Admin Features
- [ ] Admin email is ingesteld in Sidebar.tsx
- [ ] Admin email is ingesteld in AdminPage.tsx
- [ ] Admin route is toegevoegd aan App.tsx

---

## 🚀 STAP 1: Vercel Account & Project Setup

### A. Maak Vercel Account
1. Ga naar: https://vercel.com
2. Klik **"Sign Up"**
3. Kies **"Continue with GitHub"** (aanbevolen)
4. Autoriseer Vercel

### B. Push Code naar GitHub (als je dat nog niet hebt)
```bash
# In je project folder
git init
git add .
git commit -m "Initial commit - FarmConnect ready for deployment"

# Maak nieuwe repo op GitHub
# Dan:
git remote add origin https://github.com/JOUW-USERNAME/farmconnect.git
git branch -M main
git push -u origin main
```

---

## 🚀 STAP 2: Deploy naar Vercel

### Optie A: Via Vercel Dashboard (Makkelijkst)

1. **Ga naar Vercel Dashboard**: https://vercel.com/dashboard
2. **Klik "Add New..." → "Project"**
3. **Import Git Repository**:
   - Selecteer je GitHub repository
   - Klik "Import"
4. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (laat leeg)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables** (BELANGRIJK!):
   Klik "Environment Variables" en voeg toe:
   ```
   VITE_SUPABASE_URL = https://bpwlxlimlkmkqnnqxluk.supabase.co
   VITE_SUPABASE_ANON_KEY = [jouw anon key]
   VITE_GOOGLE_MAPS_API_KEY = [jouw Google Maps key]
   ```
6. **Klik "Deploy"**
7. **Wacht 2-3 minuten** ⏳
8. **KLAAR!** 🎉

### Optie B: Via Vercel CLI

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Volg de prompts:
# - Set up and deploy? Y
# - Which scope? [jouw account]
# - Link to existing project? N
# - Project name? farmconnect
# - Directory? ./
# - Override settings? N

# Production deployment
vercel --prod
```

---

## 🔧 STAP 3: Post-Deployment Setup

### A. Update Google OAuth Redirect URIs

1. **Ga naar Google Cloud Console**: https://console.cloud.google.com/apis/credentials
2. **Klik op je OAuth 2.0 Client ID**
3. **Voeg toe aan "Authorized redirect URIs"**:
   ```
   https://jouw-app.vercel.app
   https://bpwlxlimlkmkqnnqxluk.supabase.co/auth/v1/callback
   ```
4. **Klik "Save"**

### B. Update Supabase Site URL

1. **Ga naar Supabase**: https://bpwlxlimlkmkqnnqxluk.supabase.co
2. **Klik "Authentication" → "URL Configuration"**
3. **Update "Site URL"**:
   ```
   https://jouw-app.vercel.app
   ```
4. **Voeg toe aan "Redirect URLs"**:
   ```
   https://jouw-app.vercel.app/**
   ```
5. **Klik "Save"**

---

## 🎯 STAP 4: Test je Live App!

1. **Open je Vercel URL**: `https://jouw-app.vercel.app`
2. **Test Google Login**:
   - Klik "Boer" of "Ontdekker"
   - Klik "Inloggen met Google"
   - Google popup opent
   - Kies account
   - Je bent ingelogd! ✅
3. **Test Admin Features**:
   - Log in met `farmsconncection@gmail.com`
   - Open sidebar
   - Klik "Admin"
   - Admin dashboard opent! ✅

---

## 🔄 Auto-Deploy Setup

**Vercel deploy automatisch bij elke push naar GitHub!**

Elke keer dat je code pusht naar GitHub:
```bash
git add .
git commit -m "Update features"
git push
```

Vercel deploy automatisch! 🚀

---

## 🐛 Troubleshooting

### Error: "Build failed"
- Check of alle dependencies in `package.json` staan
- Check of `.env` variabelen correct zijn
- Check build logs in Vercel dashboard

### Google Login werkt niet op Vercel
- Check of redirect URI is toegevoegd aan Google Cloud Console
- Check of Site URL is bijgewerkt in Supabase
- Check of environment variables correct zijn

### Admin features werken niet
- Check of database migration is gerund
- Check of admin email correct is
- Check console voor errors

### "Module not found" errors
- Run `npm install` lokaal
- Check of alle imports correct zijn
- Rebuild: `npm run build`

---

## 📊 Vercel Features

### Gratis Plan Includes:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments (voor branches)
- ✅ Analytics (basic)
- ✅ 100GB bandwidth/month

### Custom Domain (Optioneel):
1. Koop domain (bijv. farmconnect.be)
2. Ga naar Vercel → Settings → Domains
3. Voeg domain toe
4. Update DNS records bij je domain provider
5. Klaar!

---

## ✨ Post-Deployment Optimizations

### 1. Performance
- [ ] Enable Vercel Analytics
- [ ] Check Lighthouse score
- [ ] Optimize images (gebruik Vercel Image Optimization)

### 2. SEO
- [ ] Add meta tags
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console

### 3. Monitoring
- [ ] Setup Vercel Analytics
- [ ] Setup error tracking (Sentry)
- [ ] Monitor Supabase usage

---

## 🎉 KLAAR!

Je FarmConnect app is nu LIVE! 🚀

**Vercel URL**: `https://jouw-app.vercel.app`

**Deel met de wereld!** 🌍

---

## 📝 Volgende Stappen:

1. ✅ Test alle features op productie
2. ✅ Voeg test data toe via admin panel
3. ✅ Deel met eerste gebruikers
4. ✅ Verzamel feedback
5. ✅ Itereer en verbeter!

**Succes!** 🎊
