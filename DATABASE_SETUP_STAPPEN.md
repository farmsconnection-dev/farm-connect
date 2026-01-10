# 🗄️ DATABASE SETUP - Stap voor Stap

## ✅ Wat je moet doen:

### Stap 1: Open Supabase Dashboard
1. Ga naar: **https://bpwlxlimlkmkqnnqxluk.supabase.co**
2. Log in met je account
3. Klik op **"SQL Editor"** in het linker menu (icoon: </> )
4. Klik op **"New Query"** (groene knop rechtsboven)

### Stap 2: Kopieer de SQL Code
1. Open het bestand: `migrations/001_add_automaat_verification.sql`
2. Selecteer ALLES (Ctrl+A)
3. Kopieer (Ctrl+C)

### Stap 3: Plak en Run de SQL
1. Plak de code in de Supabase SQL Editor (Ctrl+V)
2. Klik op **"Run"** (of druk Ctrl+Enter)
3. Wacht tot je "Success" ziet (groen vinkje)

### Stap 4: Verifieer de Tabellen
1. Klik op **"Table Editor"** in het linker menu
2. Zoek de `farms` tabel
3. Check of deze nieuwe kolommen heeft:
   - ✅ `heeft_automaat` (boolean)
   - ✅ `is_verified` (boolean)
   - ✅ `telefoonnummer` (text)
4. Check of er een nieuwe tabel `admin_users` bestaat
5. Open `admin_users` en check of je email erin staat

---

## 🎯 Wat doet deze SQL?

### 1. Voegt Nieuwe Kolommen Toe aan `farms`:
```sql
heeft_automaat    → Voor 24/7 automaten (true/false)
is_verified       → Voor admin verificatie (true/false)
telefoonnummer    → Extra contactveld (tekst)
```

### 2. Maakt `admin_users` Tabel:
```sql
id                → Unieke ID
email             → Admin email (jouw email!)
created_at        → Wanneer toegevoegd
```

### 3. Voegt Jouw Email Toe als Admin:
```sql
farmsconncection@gmail.com → JIJ bent nu admin!
```

### 4. Maakt Beveiligingsfuncties:
- `is_admin(email)` → Check of iemand admin is
- `verify_farm(id, email)` → Verifieer een boerderij (alleen admin)
- `get_unverified_farms(email)` → Haal niet-geverifieerde farms op (alleen admin)

---

## ✅ Na het Runnen:

**Test of het werkt:**

1. **Herstart je dev server:**
   ```bash
   npm run dev
   ```

2. **Log in met je admin email:**
   - Email: `farmsconncection@gmail.com`

3. **Open de sidebar:**
   - Je zou onderaan een "Admin" knop moeten zien! 🔒

4. **Klik op Admin:**
   - Je ziet het admin dashboard
   - Lijst van niet-geverifieerde boerderijen
   - "Keur Goed" en "Afwijzen" knoppen

---

## 🐛 Troubleshooting:

**Error: "relation farms does not exist"**
- Je moet eerst de basis `farms` tabel aanmaken
- Run eerst `supabase-schema.sql` (de originele schema file)

**Error: "column already exists"**
- De kolommen bestaan al, dat is OK!
- De SQL gebruikt `IF NOT EXISTS` dus het is veilig

**Admin knop verschijnt niet?**
- Check of je email correct is in `admin_users` tabel
- Check of je ingelogd bent met die email
- Herstart de dev server

**Geen farms zichtbaar?**
- Bestaande farms hebben `is_verified = NULL`
- Dat is OK! De filter toont farms met `is_verified !== false`
- NULL wordt gezien als "show" (backwards compatible)

---

## 📝 Optioneel: Bestaande Farms Verifiëren

Als je wilt dat ALLE bestaande farms automatisch geverifieerd worden:

```sql
UPDATE farms SET is_verified = true WHERE is_verified IS NULL;
```

Run dit in de SQL Editor na de migratie.

---

## 🎉 Klaar!

Na deze stappen:
- ✅ Database heeft nieuwe velden
- ✅ Jij bent admin
- ✅ Admin dashboard werkt
- ✅ Verificatie flow is actief
- ✅ 24/7 automaten filter werkt

**Veel succes!** 🚀
