# ✅ AUTOMATEN & VERIFICATIE - IMPLEMENTATIE OVERZICHT

## 🎉 WAT IS KLAAR:

### 1. ✅ Database Schema (migrations/001_add_automaat_verification.sql)
- `heeft_automaat` (boolean) - voor 24/7 automaten
- `is_verified` (boolean, default false) - voor admin verificatie  
- `telefoonnummer` (string) - extra contactveld
- Admin users tabel aangemaakt
- Verificatie functies toegevoegd

### 2. ✅ TypeScript Types Bijgewerkt (src/types.ts)
```typescript
interface Farm {
  // ... bestaande velden
  heeft_automaat?: boolean;
  is_verified?: boolean;
  telefoonnummer?: string;
}
```

### 3. ✅ Automaat Icon op FarmCard (src/components/shared/FarmCard.tsx)
- Blauw vierkant icoon rechtsboven op farm foto
- Alleen zichtbaar als `heeft_automaat === true`

### 4. ✅ 24/7 Automaten Filter (src/pages/DiscoverPage.tsx)
- Nieuwe filter knop naast "Nu Open"
- Blauwe knop met automaat icoon
- Filtert alleen boerderijen met `heeft_automaat: true`

### 5. ✅ Admin Page Aangemaakt (src/pages/AdminPage.tsx)
- Beveiligd met email check
- Toont lijst van niet-geverifieerde boerderijen
- "Keur Goed" en "Afwijzen" knoppen
- Dashboard met statistieken

## 📝 WAT JE NOG MOET DOEN:

### Stap 1: Admin Email Instellen
Open `src/pages/AdminPage.tsx` en vervang op regel 16:
```typescript
const ADMIN_EMAIL = 'jouw-email@example.com'; // VERVANG DIT!
```
Met je echte email adres.

### Stap 2: Admin View Toevoegen aan App.tsx

Voeg deze code toe aan `src/App.tsx`:

**A) Import toevoegen (al gedaan! ✅)**
```typescript
import { AdminPage } from './pages/AdminPage';
```

**B) Route toevoegen (rond regel 433, NA inventory view):**
```typescript
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

### Stap 3: Admin Menu Item Toevoegen aan Sidebar

Open `src/components/layout/Sidebar.tsx` en voeg toe aan de menuItems (rond regel 33):

```typescript
const common = [
  { id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> }, // NIEUW!
  { id: 'support', label: t('menu_support'), icon: <HelpCircle size={20} /> },
];
```

**Vergeet niet ShieldCheck te importeren:**
```typescript
import { X, HelpCircle, TrendingUp, Box, Heart, Users, Compass, Calendar, Leaf, LogIn, LogOut, User, ShieldCheck } from 'lucide-react';
```

### Stap 4: Database Migratie Runnen

1. Open Supabase Dashboard: https://bpwlxlimlkmkqnnqxluk.supabase.co
2. Ga naar SQL Editor
3. Open `migrations/001_add_automaat_verification.sql`
4. **VERVANG** eerst je admin email op regel 38:
   ```sql
   INSERT INTO admin_users (email) 
   VALUES ('jouw-email@example.com') -- VERVANG DIT!
   ```
5. Run de hele SQL file

### Stap 5: Test Data Toevoegen (Optioneel)

Voeg een paar test boerderijen toe met automaat in `src/constants.ts`:

```typescript
{
  id: '0',
  name: "Zuivelhoeve De Potterie",
  // ... andere velden
  heeft_automaat: true, // NIEUW!
  is_verified: false,   // NIEUW! (voor admin test)
  telefoonnummer: "050 38 02 02" // NIEUW!
}
```

## 🎯 GEBRUIK:

### Als Gebruiker:
1. Klik op "24/7 Automaten" filter knop
2. Zie alleen boerderijen met automaten
3. Herken automaten aan blauw icoon op foto

### Als Admin:
1. Log in met je admin email
2. Klik op "Admin" in sidebar
3. Zie lijst van niet-geverifieerde boerderijen
4. Klik "Keur Goed" om te verifiëren
5. Alleen geverifieerde boerderijen verschijnen op de kaart (TODO: filter toevoegen)

## 🔒 BEVEILIGING:

- Admin view is beveiligd met email check
- Alleen jouw email heeft toegang
- In productie: gebruik Supabase RLS policies
- Database functies zijn SECURITY DEFINER

## 📊 VOLGENDE STAPPEN (Optioneel):

1. Filter in DiscoverPage: toon alleen `is_verified: true` farms
2. Supabase database helper functions gebruiken
3. Real-time updates voor verificatie status
4. Email notificaties bij nieuwe farm registraties

## 🐛 TROUBLESHOOTING:

**Admin view toont "Geen Toegang"?**
- Check of je email correct is ingesteld in AdminPage.tsx
- Check of je ingelogd bent met die email

**24/7 filter toont geen resultaten?**
- Voeg `heeft_automaat: true` toe aan test farms
- Check of filter state correct werkt

**Database errors?**
- Run de migration SQL in Supabase
- Check of tabellen correct zijn aangemaakt

---

✨ **Klaar om te testen!** Start de dev server en probeer de nieuwe features uit!
