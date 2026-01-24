# FarmConnect Email Setup Guide

Deze handleiding beschrijft hoe je de email functionaliteit activeert voor FarmConnect.

## 📧 Overzicht

FarmConnect verstuurt automatisch emails bij:
1. **Welkomstmail** - Na registratie van een boerderij/automaat
2. **Bevestigingsmail** - Na succesvolle betaling

## 🛠️ Vereisten

- Supabase project (al geconfigureerd)
- Resend account (gratis tier: 3000 emails/maand)
- Supabase CLI (voor deployment)

## Stap 1: Resend Account Aanmaken

1. Ga naar [resend.com](https://resend.com) en maak een gratis account
2. Verifieer je domein `farmconnect.be` in Resend:
   - Ga naar **Domains** → **Add Domain**
   - Voeg `farmconnect.be` toe
   - Voeg de DNS records toe die Resend geeft (SPF, DKIM, DMARC)
3. Kopieer je **API Key** vanuit Settings → API Keys

## Stap 2: Supabase CLI Installeren

```bash
# Windows (PowerShell als Administrator)
npm install -g supabase

# Of via Scoop
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

## Stap 3: Supabase Project Linken

```bash
# Login bij Supabase
supabase login

# Link je project (vervang PROJECT_REF met je project ID)
cd c:\Users\Gebruiker\Downloads\farm-connect-toolkit-4_01-14;10
supabase link --project-ref YOUR_PROJECT_REF
```

Je project ref vind je in Supabase Dashboard → Settings → General → Reference ID

## Stap 4: Secrets Toevoegen

```bash
# Voeg de Resend API key toe als secret
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxx
```

## Stap 5: Edge Functions Deployen

```bash
# Deploy de welkomst email functie
supabase functions deploy send-welcome-email

# Deploy de betalingsbevestiging functie
supabase functions deploy send-payment-confirmation
```

## Stap 6: Testen

Je kunt de functies testen via de Supabase Dashboard:

1. Ga naar **Edge Functions** in je Supabase project
2. Klik op `send-welcome-email`
3. Klik op **Invoke** en gebruik deze test payload:

```json
{
  "to": "test@example.com",
  "name": "Jan",
  "locationType": "boerderij",
  "packageType": "Boerderij Pakket - Jaarlijks",
  "farmName": "De Groene Weide"
}
```

## 📝 Integratie in de App

De email service wordt automatisch aangeroepen wanneer:

### Bij Registratie (in AddFarmModal.tsx of registratie flow):
```typescript
import { emailService } from '../utils/emailService';

// Na succesvolle farm registratie
await emailService.sendWelcomeEmail({
  to: userEmail,
  name: userName,
  locationType: 'boerderij', // of 'automaat'
  packageType: 'Boerderij Pakket - Jaarlijks',
  farmName: farmName
});
```

### Na Betaling (webhook of payment success):
```typescript
await emailService.sendPaymentConfirmation({
  to: userEmail,
  name: userName,
  locationType: 'boerderij',
  farmName: farmName,
  amount: '€96'
});
```

## 🔒 DNS Records voor farmconnect.be

Voeg deze records toe aan je domein voor email deliverability:

| Type | Name | Value |
|------|------|-------|
| TXT | @ | `v=spf1 include:resend.com ~all` |
| CNAME | resend._domainkey | (gegeven door Resend) |
| TXT | _dmarc | `v=DMARC1; p=none;` |

## 💡 Tips

- Test altijd eerst met je eigen email
- Check de spam folder als emails niet aankomen
- Monitor de Edge Functions logs in Supabase Dashboard
- Resend biedt gratis 3000 emails/maand

## 🚨 Troubleshooting

### Email komt niet aan
1. Check of de Edge Function succesvol is gedeployed
2. Controleer de logs in Supabase Dashboard → Edge Functions → Logs
3. Verifieer dat je domein correct is geconfigureerd in Resend

### CORS Error
- De Edge Functions hebben al CORS headers, maar check of je Supabase URL correct is in de frontend.

### Rate Limiting
- Resend gratis tier: max 100 emails/dag
- Upgrade naar betaalde plan voor meer volume
