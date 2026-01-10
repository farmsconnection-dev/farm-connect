# 🔐 ECHTE GOOGLE LOGIN - Setup Guide

## 📋 Wat je nu hebt vs. Wat je nodig hebt:

### ❌ NU (Demo):
- Simpel `prompt()` dialoog
- Handmatig email invoeren
- Geen echte authenticatie

### ✅ STRAKS (Productie):
- Echte Google login popup
- Account kiezer (meerdere Google accounts)
- Veilige authenticatie via Supabase

---

## 🚀 Setup voor Echte Google Login:

### Stap 1: Supabase Authentication Inschakelen

1. **Open Supabase Dashboard**: https://bpwlxlimlkmkqnnqxluk.supabase.co
2. **Ga naar "Authentication"** in linker menu
3. **Klik op "Providers"**
4. **Zoek "Google"** in de lijst
5. **Schakel Google in** (toggle aan)

### Stap 2: Google OAuth Credentials Maken

1. **Ga naar Google Cloud Console**: https://console.cloud.google.com/
2. **Selecteer je project** (of maak nieuw project)
3. **Ga naar "APIs & Services" → "Credentials"**
4. **Klik "Create Credentials" → "OAuth 2.0 Client ID"**
5. **Kies "Web application"**
6. **Voeg toe:**
   - Authorized JavaScript origins: `http://localhost:3001`
   - Authorized redirect URIs: `https://bpwlxlimlkmkqnnqxluk.supabase.co/auth/v1/callback`
7. **Kopieer Client ID en Client Secret**

### Stap 3: Credentials Toevoegen aan Supabase

1. **Terug naar Supabase → Authentication → Providers → Google**
2. **Plak:**
   - Client ID (from Google)
   - Client Secret (from Google)
3. **Klik "Save"**

### Stap 4: Update AuthModal Code

Vervang de `handleGoogleLogin` functie in `AuthModal.tsx`:

```tsx
// OUDE CODE (Demo):
const handleGoogleLogin = () => {
    const googleEmail = prompt('Voer je Google email in (voor demo):');
    if (googleEmail) {
        const name = googleEmail.split('@')[0];
        handleLogin(googleEmail, name);
    }
};

// NIEUWE CODE (Productie):
const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin
        }
    });
    
    if (error) {
        showToast('❌ Google login mislukt');
        console.error(error);
    }
};
```

### Stap 5: Luister naar Auth State Changes

Voeg toe aan `App.tsx` (in useEffect):

```tsx
useEffect(() => {
    // Luister naar auth state changes
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
        }
    });
    
    return () => {
        authListener?.subscription.unsubscribe();
    };
}, []);
```

---

## 🎯 Dan krijg je:

### ✅ Echte Google Login Flow:
1. Gebruiker klikt "Inloggen met Google"
2. **Google popup opent** (echte Google login)
3. **Account kiezer verschijnt** (als je meerdere accounts hebt)
4. Gebruiker kiest account
5. Google vraagt toestemming
6. Gebruiker wordt teruggestuurd naar je app
7. **Automatisch ingelogd** met:
   - Email van Google account
   - Naam van Google account
   - Profielfoto van Google account

### ✅ Voordelen:
- 🔒 **Veilig** - Echte OAuth 2.0
- 👤 **Account kiezer** - Meerdere Google accounts
- 📸 **Profielfoto** - Automatisch van Google
- ✅ **Email geverifieerd** - Door Google
- 🚀 **Snel** - Eén klik login

---

## 📝 Voor Nu (Development):

De **huidige demo versie** werkt prima voor development! Je kunt:
- ✅ Testen met `farmsconncection@gmail.com`
- ✅ Admin functionaliteit testen
- ✅ Alle features ontwikkelen

## 🚀 Voor Later (Production):

Wanneer je live gaat:
1. ✅ Volg bovenstaande stappen
2. ✅ Schakel echte Google login in
3. ✅ Update AuthModal code
4. ✅ Test met echte Google accounts

---

## 🐛 Troubleshooting:

**Google login werkt niet?**
- Check of redirect URI correct is in Google Console
- Check of Google provider enabled is in Supabase
- Check console voor errors

**Account kiezer verschijnt niet?**
- Dat is normaal als je maar 1 Google account hebt
- Log uit van alle Google accounts en probeer opnieuw
- Of gebruik incognito mode

**Email wordt niet opgeslagen?**
- Check of `onAuthStateChange` listener werkt
- Check console logs
- Verify Supabase credentials

---

## ✨ Conclusie:

**Voor nu:** De demo versie is perfect voor development! ✅

**Voor productie:** Volg deze guide om echte Google login te krijgen met account kiezer! 🚀

**Wil je het nu al implementeren?** Laat het me weten, dan help ik je met de code updates!
