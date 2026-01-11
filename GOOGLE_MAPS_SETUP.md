# Google Maps API Setup Guide

## Probleem
De kaart toont de foutmelding: "API key ongeldig of billing niet geactiveerd"

## Oplossing

### Stap 1: Google Cloud Console Setup
1. Ga naar [Google Cloud Console](https://console.cloud.google.com/)
2. Maak een nieuw project aan (of selecteer bestaand project)
3. Ga naar **APIs & Services** → **Credentials**

### Stap 2: API Key Aanmaken
1. Klik op **+ CREATE CREDENTIALS** → **API Key**
2. Kopieer de gegenereerde key
3. Klik op **RESTRICT KEY** (aanbevolen voor beveiliging)

### Stap 3: APIs Inschakelen
Ga naar **APIs & Services** → **Library** en schakel in:
- ✅ **Maps JavaScript API**
- ✅ **Geocoding API**

### Stap 4: Billing Activeren (VERPLICHT!)
⚠️ **Google Maps werkt NIET zonder billing**
1. Ga naar **Billing** in het menu
2. Klik **Link a billing account**
3. Voeg een creditcard toe
4. **Geen zorgen**: Google geeft $200 gratis credits per maand. Voor jouw gebruik blijf je waarschijnlijk onder dit bedrag.

### Stap 5: API Key Restrictions (Optioneel maar aanbevolen)
1. Ga terug naar **Credentials**
2. Klik op je API key
3. Onder **Application restrictions**:
   - Kies **HTTP referrers (web sites)**
   - Voeg toe: `http://localhost:3001/*`
   - Voeg toe: `https://farmconnect.be/*` (of jouw domein)
   - Voeg toe: `https://*.farmconnect.be/*` (voor subdomains)

### Stap 6: .env File Aanmaken
1. Kopieer `.env.example` naar `.env`
2. Plak je API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSy...jouw_key_hier
   ```
3. Herstart de development server (`npm run dev`)

### Verificatie
Na het herstarten van de server:
1. Open de app
2. Klik op de rode **DEBUG** knop
3. Kijk bij **ENVIRONMENT & MAPS**:
   - `mapsKeyLength` moet > 30 zijn
   - `googleLoaded` moet `true` worden na een paar seconden

## Veelvoorkomende Fouten

### "RefererNotAllowedMapError"
→ Je hebt referrer restrictions ingesteld maar de huidige URL staat er niet bij.
→ Voeg `http://localhost:3001/*` toe aan de allowed referrers.

### "ApiNotActivatedMapError"
→ Maps JavaScript API is niet ingeschakeld.
→ Ga naar Library en schakel "Maps JavaScript API" in.

### "REQUEST_DENIED"
→ Billing is niet geactiveerd.
→ Ga naar Billing en link een billing account.

## Kosten
- **Gratis tier**: $200/maand
- **Kaart laden**: ~$7 per 1000 loads
- **Geocoding**: ~$5 per 1000 requests
- Voor een kleine app blijf je ruim binnen de gratis tier!
