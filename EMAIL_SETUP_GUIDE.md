# FarmConnect Email Setup Guide (Brevo SMTP)

Deze handleiding beschrijft hoe je de email functionaliteit activeert voor FarmConnect met Brevo.

## 📧 Overzicht

FarmConnect verstuurt automatisch emails bij:
1. **Welkomstmail** - Na registratie van een boerderij/automaat
2. **Bevestigingsmail** - Na succesvolle betaling

## 🛠️ Vereisten

- Supabase project (al geconfigureerd)
- Brevo account (gratis tier: 300 emails/dag)
- Supabase CLI (voor deployment)

## Stap 1: Brevo SMTP Gegevens

Je Brevo SMTP gegevens:
- **SMTP Server:** `smtp-relay.brevo.com`
- **Port:** `587`
- **Login:** Je Brevo e-mailadres
- **Password:** Je SMTP Master Password (uit Brevo dashboard)

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
# Voeg de Brevo credentials toe als secrets
supabase secrets set BREVO_LOGIN=jouw-email@example.com
supabase secrets set BREVO_PASSWORD=xsmtpsib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

### Bij Registratie:
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

### Na Betaling:
```typescript
await emailService.sendPaymentConfirmation({
  to: userEmail,
  name: userName,
  locationType: 'boerderij',
  farmName: farmName,
  amount: '€96'
});
```

## 🔒 Domein Verificatie in Brevo

Voor betere deliverability, verifieer je domein in Brevo:

1. Ga naar **Senders & IP** → **Domains**
2. Voeg `farmconnect.be` toe
3. Voeg de DNS records toe die Brevo geeft:
   - SPF record
   - DKIM record
   - DMARC record (optioneel maar aanbevolen)

## 💡 Brevo Limieten (Gratis Plan)

- **300 emails per dag**
- Onbeperkte contacten
- Email tracking & analytics

## 🚨 Troubleshooting

### Email komt niet aan
1. Check of de Edge Function succesvol is gedeployed
2. Controleer de logs in Supabase Dashboard → Edge Functions → Logs
3. Verifieer dat je domein correct is geconfigureerd in Brevo
4. Check je spam folder

### Connection Error
- Zorg dat port 587 wordt gebruikt (niet 465)
- Controleer of je SMTP credentials correct zijn

### Rate Limiting
- Brevo gratis tier: max 300 emails/dag
- Upgrade naar betaalde plan voor meer volume
