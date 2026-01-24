# FarmConnect Email Setup Guide (Brevo SMTP via Vercel)

Deze handleiding beschrijft hoe je de email functionaliteit activeert voor FarmConnect met Brevo en Vercel Serverless Functions.

## 📧 Overzicht

FarmConnect verstuurt automatisch emails bij:
1. **Welkomstmail** - Na registratie van een boerderij/automaat
2. **Bevestigingsmail** - Na succesvolle betaling

## ✅ Voordelen van deze aanpak
- **Geen extra CLI tools nodig** - Werkt direct met Vercel
- **Automatische deployment** - Push naar GitHub en het werkt
- **Gratis** - Brevo gratis plan: 300 emails/dag

## 🛠️ Vereisten

- Vercel project (al geconfigureerd via GitHub)
- Brevo account (gratis tier: 300 emails/dag)

## Stap 1: Brevo SMTP Gegevens Verzamelen

Je Brevo SMTP gegevens (uit Brevo Dashboard → SMTP & API → SMTP):
- **SMTP Server:** `smtp-relay.brevo.com`
- **Port:** `587`
- **Login:** Je Brevo e-mailadres
- **Password:** Je SMTP Master Password

## Stap 2: Environment Variables Toevoegen in Vercel

1. Ga naar [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klik op je **FarmConnect** project
3. Ga naar **Settings** → **Environment Variables**
4. Voeg deze twee variabelen toe:

| Name | Value |
|------|-------|
| `BREVO_LOGIN` | jouw-email@voorbeeld.be |
| `BREVO_PASSWORD` | xsmtpsib-xxxxxxxxxxxxxxx |

5. Klik op **Save**

## Stap 3: Redeploy

Na het toevoegen van de environment variables:
1. Ga naar **Deployments** tab
2. Klik op de 3 puntjes naast de laatste deployment
3. Klik op **Redeploy**

Of push een nieuwe commit naar GitHub - dit triggert automatisch een deployment.

## Stap 4: Testen

Je kunt de API testen met curl of Postman:

```bash
curl -X POST https://farmconnect.be/api/send-welcome-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "name": "Jan",
    "locationType": "boerderij",
    "packageType": "Boerderij Pakket - Jaarlijks",
    "farmName": "De Groene Weide"
  }'
```

## 📝 Integratie in de App

De email service is al geconfigureerd. Gebruik het zo:

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

## 🔒 Domein Verificatie in Brevo (Aanbevolen)

Voor betere email deliverability, verifieer je domein in Brevo:

1. Ga naar **Senders & IP** → **Domains**
2. Voeg `farmconnect.be` toe
3. Voeg de DNS records toe die Brevo geeft:
   - SPF record
   - DKIM record
   - DMARC record (optioneel)

## 📁 Bestandsstructuur

```
api/
├── send-welcome-email.ts      # Vercel Serverless Function
└── send-payment-confirmation.ts
src/
└── utils/
    └── emailService.ts        # Frontend email service
```

## 💡 Brevo Limieten (Gratis Plan)

- **300 emails per dag**
- Onbeperkte contacten
- Email tracking & analytics

## 🚨 Troubleshooting

### Email komt niet aan
1. Check of de environment variables correct zijn in Vercel
2. Bekijk de Function Logs in Vercel Dashboard
3. Check je spam folder
4. Verifieer je domein in Brevo

### 500 Error
- Check of BREVO_LOGIN en BREVO_PASSWORD zijn ingesteld in Vercel
- Bekijk de logs: Vercel Dashboard → Functions → Logs

### Rate Limiting
- Brevo gratis tier: max 300 emails/dag
- Upgrade naar betaalde plan voor meer volume
