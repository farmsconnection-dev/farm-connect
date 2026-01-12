# Security Audit & Risk Assessment (Januari 2026)

De applicatie is functioneel gereed. Hieronder volgt een analyse van de beveiligingsrisico's en concrete oplossingen.

## 1. Kritieke Risico's (Moet nu opgelost worden)

### A. Zelf-Verificatie Fraude (Rood)
**Probleem:**
De huidige Database Policies (RLS) staan toe dat een boer zijn eigen boerderij aanmaakt of bijwerkt. De policy controleert alleen of de gebruiker de 'eigenaar' is (`auth.uid() = owner_id`).
Er is echter geen controle op *welke velden* worden aangepast.
Een kwaadwillende gebruiker kan via de browser console of een script een verzoek sturen om `is_verified` op `true` te zetten. Hierdoor lijkt de boerderij direct geverifieerd zonder tussenkomst van de admin.

**Besluit:**
Dit moet geblokkeerd worden op database-niveau.

**Oplossing:**
We voegen een **Database Trigger** toe die bij elke `INSERT` of `UPDATE` actie automatisch het veld `is_verified` terugzet naar de oude waarde (bij update) of `false` (bij insert), *tenzij* de gebruiker een admin is (gecontroleerd via e-mail of role).

### B. Financiële Manipulatie (Rood)
**Probleem:**
Hetzelfde geldt voor `referral_balance` en `referral_code`. Een gebruiker kan zijn eigen saldo ophogen via een simpele API call, omdat hij schrijfrechten heeft op zijn eigen rij in de `farms` tabel.

**Oplossing:**
Ook hier is een **Trigger** nodig die voorkomt dat `referral_balance` wordt gewijzigd door de gebruiker. Alleen via speciale functies (RPC) of door een admin mag dit veld wijzigen.

---

## 2. Belangrijke Configuraties

### C. Google Maps API Key Beveiliging (Geel)
**Probleem:**
De API Key (`VITE_GOOGLE_MAPS_API_KEY`) is zichtbaar in de broncode (client-side). Dit is normaal voor Google Maps, maar kwaadwillenden kunnen deze key kopiëren en gebruiken voor hun eigen projecten, wat jou geld kost.

**Actie vereist van u:**
Ga naar de [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials) en stel **HTTP Referrer Restrictions** in op uw domein:
- `*.farmconnect.be/*`
- `farmconnect.be/*`
- `localhost:*` (voor development)

### D. E-mail Scraping (Geel)
**Probleem:**
Als het `owner_email` veld in de `farms` tabel staat, is dit uitleesbaar voor iedereen via de API (want `SELECT` policy is `true`). Dit maakt het mogelijk voor spammers om alle e-mailadressen van boeren te verzamelen.

**Oplossing:**
Overweeg of dit acceptabel is (zakelijke adressen). Zo niet, dan moeten we kolom-specifieke beveiliging toepassen, wat complexer is, of het e-mailadres niet opslaan in de publieke `farms` tabel maar alleen in `user_profiles` (die wel beveiligd zijn).

---

## 3. Aanbevolen Fix Plan

Ik stel voor om direct een SQL-script toe te passen (`20260112_security_hardening.sql`) dat de volgende veiligheidsmaatregelen activeert in Supabase:

1.  **Preventie Trigger:** Zorgt ervoor dat gewone gebruikers de velden `is_verified`, `referral_balance`, en `subscription` niet kunnen wijzigen.
2.  **Admin Check:** De trigger controleert of de gebruiker de admin (gij) is; zo ja, dan mag de wijziging wel doorgaan.

### Zullen we dit script nu aanmaken en toepassen?
