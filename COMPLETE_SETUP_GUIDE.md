# ✅ COMPLETE SETUP GUIDE - Automaten & Verificatie

## 🎉 WAT IS GEÏMPLEMENTEERD:

### 1. ✅ Admin Knop Voorwaardelijk (Sidebar)
- Admin knop verschijnt alleen voor jouw email
- Staat onderaan de lijst
- **TODO:** Vervang email in `Sidebar.tsx` regel 33:
  ```tsx
  const ADMIN_EMAIL = 'jouw-email@example.com'; // VERVANG DIT!
  ```

### 2. ✅ Publieke Filter - Alleen Geverifieerde Boerderijen
- DiscoverPage toont alleen `is_verified !== false` farms
- FavoritesPage toont alleen geverifieerde favorites
- Backwards compatible (undefined = show)

### 3. ✅ 24/7 Automaten Filter
- Blauwe filter knop in DiscoverPage
- Automaat icon op farm cards
- Filtert op `heeft_automaat: true`

### 4. ✅ Status Update Feature
- Al geïmplementeerd in FarmerDashboard
- Boeren kunnen tijdelijke berichten plaatsen (1-7 dagen)
- Verschijnt op FarmCard met oranje badge

### 5. ✅ Admin Page
- Volledige verificatie dashboard
- Keur Goed / Afwijzen knoppen
- Beveiligd met email check

---

## 📝 SETUP STAPPEN:

### STAP 1: Admin Email Instellen (2 plekken!)

**A) Sidebar.tsx** (regel 33):
```tsx
const ADMIN_EMAIL = 'jouw-email@example.com'; // VERVANG!
```

**B) AdminPage.tsx** (regel 16):
```tsx
const ADMIN_EMAIL = 'jouw-email@example.com'; // VERVANG!
```

### STAP 2: Admin Route Toevoegen aan App.tsx

Open `ADD_ADMIN_ROUTE.txt` voor exacte instructies.

**Kort:** Voeg dit toe NA de inventory view (rond regel 433):
```tsx
{view === 'admin' && (
  <AdminPage
    t={t}
    farms={farms}
    setFarms={setFarms}
    userEmail={userProfile.email}
    showToast={showToast}
  />
)}
```

### STAP 3: Database Migratie Runnen

1. Open Supabase: https://bpwlxlimlkmkqnnqxluk.supabase.co
2. Ga naar SQL Editor
3. Open `migrations/001_add_automaat_verification.sql`
4. **VERVANG** je admin email op regel 38
5. Run de hele SQL file

### STAP 4: Test Data Toevoegen (Optioneel)

Voeg een test farm toe aan `constants.ts` in `INITIAL_FARMS`:

```typescript
{
  id: '24',
  name: 'Test Automaat Boerderij',
  address: 'Teststraat 1, 1000 Brussel',
  lat: 50.8503,
  lng: 4.3517,
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  joinedDate: new Date().toISOString(),
  schedule: MOCK_SCHEDULE_1,
  products: [
    { id: 'test1', name: 'Test Product', available: true, category: 'vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400', price: '2.50', unit: '/kg' }
  ],
  paymentMethods: ['cash', 'payconiq'],
  followerCount: 0,
  // NIEUWE VELDEN:
  heeft_automaat: true,           // 24/7 automaat
  is_verified: false,             // Niet geverifieerd (voor admin test)
  telefoonnummer: '0470 12 34 56', // Extra telefoon
  statusUpdate: {
    message: 'Verse producten vandaag! 🌾',
    expiresAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString() // 2 dagen
  }
}
```

---

## 🎯 GEBRUIK:

### Als Normale Gebruiker:
1. Zie alleen geverifieerde boerderijen op de kaart
2. Gebruik "24/7 Automaten" filter voor automaten
3. Zie automaat icon (blauw vierkant) op farm cards
4. Zie status updates (oranje badge) op farm cards

### Als Boer:
1. Ga naar Dashboard
2. Scroll naar "Status Update" sectie
3. Voer boodschap in + kies geldigheidsduur
4. Klik "Publiceer"
5. Status verschijnt op je farm card

### Als Admin:
1. Log in met je admin email
2. Klik op "Admin" onderaan sidebar (alleen zichtbaar voor jou!)
3. Zie lijst van niet-geverifieerde boerderijen
4. Klik "Keur Goed" om te verifiëren
5. Boerderij verschijnt nu op de kaart voor iedereen

---

## 🔍 TESTEN:

### Test 1: Admin Knop Zichtbaarheid
- [ ] Log in met admin email → Admin knop zichtbaar onderaan
- [ ] Log in met andere email → Admin knop NIET zichtbaar

### Test 2: Verificatie Flow
- [ ] Maak test farm met `is_verified: false`
- [ ] Farm verschijnt NIET op kaart voor normale users
- [ ] Als admin: keur farm goed
- [ ] Farm verschijnt WEL op kaart

### Test 3: 24/7 Automaten
- [ ] Maak farm met `heeft_automaat: true`
- [ ] Blauw icoon verschijnt op farm card
- [ ] "24/7 Automaten" filter toont alleen deze farm

### Test 4: Status Update
- [ ] Als boer: publiceer status update
- [ ] Oranje badge verschijnt op farm card
- [ ] Na vervaldatum: badge verdwijnt automatisch

---

## 📊 DATABASE SCHEMA:

### Nieuwe Velden in `farms` tabel:
```sql
heeft_automaat BOOLEAN DEFAULT false
is_verified BOOLEAN DEFAULT false
telefoonnummer TEXT
```

### Nieuwe Tabel: `admin_users`
```sql
id UUID PRIMARY KEY
email TEXT UNIQUE NOT NULL
created_at TIMESTAMP
```

---

## 🐛 TROUBLESHOOTING:

**Admin knop verschijnt niet?**
- Check of je email correct is in Sidebar.tsx EN AdminPage.tsx
- Check of je ingelogd bent met die email
- Herstart dev server

**Geen farms zichtbaar op kaart?**
- Check of farms `is_verified: true` hebben
- Of `is_verified: undefined` (backwards compatible)
- Check console voor errors

**24/7 filter werkt niet?**
- Voeg `heeft_automaat: true` toe aan test farms
- Check of filter state correct werkt

**Status update verdwijnt niet?**
- Check of `expiresAt` datum in het verleden ligt
- Herlaad de pagina

---

## ✨ KLAAR!

Alle features zijn geïmplementeerd en klaar voor gebruik!

**Vergeet niet:**
1. ✅ Admin email instellen (2 plekken)
2. ✅ Admin route toevoegen aan App.tsx
3. ✅ Database migratie runnen
4. ✅ Test data toevoegen (optioneel)

**Dan werkt alles!** 🚀
