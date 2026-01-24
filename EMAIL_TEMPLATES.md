# FarmConnect Email Templates

## 1. Welkomstmail (Na Registratie, Vóór Betaling)

**Onderwerp:** Welkom bij FarmConnect – Je registratie is bijna voltooid!

---

Beste ondernemer,

Bedankt voor je registratie op FarmConnect! Je hebt de eerste stap gezet om je boerderij of automaat beter vindbaar te maken voor lokale consumenten.

**Wat is de volgende stap?**

Om je locatie officieel op onze kaart te activeren, vragen we je om je gekozen pakket te bevestigen en de betaling af te ronden. Zodra dit is gebeurd, ben je direct zichtbaar voor iedereen in jouw regio.

**Gekozen pakket:** [Boerderij Pakket / Solo Automaat]

**[Knop: Ga naar betaling / Voltooi registratie]**

Heb je vragen over de verschillende pakketten? We helpen je graag!

Met vriendelijke groet,

Het FarmConnect Team

---

## 2. Bevestigingsmail (Na Betaling)

**Onderwerp:** Hoera! Uw locatie staat nu live op FarmConnect 🚜

---

Beste ondernemer,

Bedankt voor uw betaling! We hebben deze in goede orde ontvangen.

Vanaf dit moment is uw **[Boerderij / Automaat]** officieel zichtbaar op de kaart van FarmConnect. Consumenten in uw regio kunnen u nu direct vinden en ontdekken welke verse producten u aanbiedt.

### Wat kunt u nu doen?

1. **Controleer uw profiel:** Log in op uw dashboard om te zien hoe uw locatie op de kaart wordt weergegeven.

2. **Voeg foto's toe:** Profielen met duidelijke foto's van de boerderij of de automaat trekken meer bezoekers aan.

3. **Houd uw aanbod actueel:** Heeft u nieuwe producten in de automaat? Pas het direct aan zodat klanten altijd weten wat er op voorraad is.

### Uw factuur

U vindt de factuur van uw betaling als bijlage bij deze e-mail (of in uw persoonlijke dashboard onder 'Betalingen').

---

Bedankt dat u deel uitmaakt van onze missie om de lokale landbouw te versterken. Samen maken we het verschil:

**Zonder de boer geen eten!**

Met vriendelijke groet,

Het FarmConnect Team

[farmconnect.be](https://farmconnect.be)

---

## Implementatie Notities

### Vereiste technologie:
- **Supabase Edge Functions** (gratis) met Resend API
- Of **externe email service**: Resend, SendGrid, Mailgun

### Variabelen per email:
| Variabele | Beschrijving |
|-----------|--------------|
| `{{naam}}` | Naam van de ondernemer |
| `{{locatie_type}}` | "Boerderij" of "Automaat" |
| `{{pakket}}` | Gekozen pakket naam |
| `{{prijs}}` | Bedrag |
| `{{factuur_url}}` | Link naar PDF factuur |
| `{{dashboard_url}}` | Link naar dashboard |

### Triggers:
1. **Welkomstmail**: Na succesvol opslaan van farm in database (farms tabel insert)
2. **Bevestigingsmail**: Na succesvolle betaling (webhook van Stripe/Mollie)
