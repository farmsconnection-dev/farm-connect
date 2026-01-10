# 🚀 Laatste Supabase Stappen

Je app is live en beveiligd! Er zijn nog 2 kleine dingen die je in Supabase moet doen:

## Stap 1: Redirect URLs Updaten (voor Login op farmconnect.be)

1. Ga naar **Supabase Dashboard**
2. Klik op **Authentication** (icoon links)
3. Klik op **URL Configuration**
4. **Site URL:** Verander dit naar `https://farmconnect.be`
5. **Redirect URLs:** Voeg deze regels toe:
   - `https://farmconnect.be/**`
   - `https://www.farmconnect.be/**`
   - `http://localhost:5173/**`

   > **Vergeet niet op SAVE te klikken!**

## Stap 2: Database Update (voor Boer Verificatie)

1. Klik op **SQL Editor** (icoon links)
2. Klik op **"New Query"**
3. Plak deze code erin:

```sql
-- 1. Voeg owner_email toe aan farms
ALTER TABLE farms ADD COLUMN IF NOT EXISTS owner_email TEXT;
CREATE INDEX IF NOT EXISTS idx_farms_owner_email ON farms(owner_email);

-- 2. Beveiliging: Boeren kunnen alleen hun EIGEN farm aanpassen
CREATE POLICY "Farmers can update own farm by email"
  ON farms FOR UPDATE
  USING (owner_email = auth.jwt() ->> 'email');

CREATE POLICY "Farmers can insert own farm by email"
  ON farms FOR INSERT
  WITH CHECK (owner_email = auth.jwt() ->> 'email');
```

4. Klik **"Run"** (rechtsonder)

---

🎉 **Klaar!**
Nu is je app volledig beveiligd. Boeren moeten zich eerst registreren en jij moet ze goedkeuren (door `is_verified` op true te zetten in de database of admin panel).
