# 📝 Feedback Systeem - Google Sheets Setup Guide

## ✅ Wat is er toegevoegd?

Een feedback-systeem met:
- **Zwevende knop** rechtsonder op alle pagina's (behalve landing page)
- **Modal popup** met textarea voor feedback
- **Google Sheets integratie** (geen e-mail nodig)
- **Bevestigingsmelding** na succesvol versturen

---

## 🔧 Stap 1: Maak een Google Sheet aan

1. Ga naar [Google Sheets](https://sheets.google.com)
2. Klik op **"Blank"** om een nieuw spreadsheet te maken
3. Geef het een naam: **"FarmConnect Feedback"**
4. Maak de volgende kolommen in rij 1:
   - **A1**: `Timestamp`
   - **B1**: `Feedback`

---

## 🚀 Stap 2: Maak een Google Apps Script

1. In je Google Sheet, klik op **Extensions** → **Apps Script**
2. Verwijder de standaard code
3. Plak de volgende code:

```javascript
function doPost(e) {
  try {
    // Open het actieve spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse de JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Voeg een nieuwe rij toe met timestamp en feedback
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.feedback || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Klik op **💾 Save** (geef het project een naam, bijv. "FeedbackHandler")
5. Klik op **Deploy** → **New deployment**
6. Klik op het tandwiel-icoontje ⚙️ naast "Select type"
7. Kies **"Web app"**
8. Configureer als volgt:
   - **Description**: "Feedback API"
   - **Execute as**: **Me** (jouw e-mailadres)
   - **Who has access**: **Anyone**
9. Klik op **Deploy**
10. **Kopieer de Web App URL** (ziet eruit als: `https://script.google.com/macros/s/AKfycby.../exec`)

---

## 🔗 Stap 3: Voeg de URL toe aan je app

1. Open het bestand: `src/App.tsx`
2. Zoek naar regel **1132** (of zoek naar `HIER_KOMT_JOUW_URL_UIT_STAP_2`)
3. Vervang de placeholder URL met jouw Google Apps Script URL:

```tsx
<FeedbackModal
  isOpen={isFeedbackOpen}
  onClose={() => setIsFeedbackOpen(false)}
  googleSheetsUrl="https://script.google.com/macros/s/JOUW_SCRIPT_ID/exec"
/>
```

---

## ✅ Stap 4: Test het systeem

1. Start je development server (als die nog niet draait):
   ```bash
   npm run dev
   ```

2. Open de app in je browser
3. Klik op de **"Feedback"** knop rechtsonder
4. Typ een testbericht
5. Klik op **"Verstuur"**
6. Je zou een "Bedankt!" melding moeten zien
7. Controleer je Google Sheet - er zou een nieuwe rij moeten zijn met:
   - Timestamp (datum/tijd)
   - Je feedback-bericht

---

## 🎨 Aanpassingen (optioneel)

### Knop positie aanpassen
In `src/App.tsx`, regel ~1120:
```tsx
className="fixed bottom-6 right-6 ..."
```
Verander `bottom-6` of `right-6` naar andere waarden (bijv. `bottom-20`, `left-6`)

### Knop tekst aanpassen
Regel ~1123:
```tsx
<span className="hidden sm:inline">Feedback</span>
```
Verander "Feedback" naar je gewenste tekst

### Modal tekst aanpassen
In `src/components/modals/FeedbackModal.tsx`:
- Regel 107: Titel "Feedback"
- Regel 108: Subtitel "Deel je ervaring met ons"
- Regel 114: Placeholder tekst in textarea

---

## 🔒 Privacy & Beveiliging

✅ **Geen e-mailadressen**: Het systeem slaat alleen de feedback-tekst en timestamp op
✅ **Anoniem**: Gebruikers hoeven zich niet te identificeren
✅ **CORS-safe**: Gebruikt `no-cors` mode voor cross-origin requests

---

## 🐛 Troubleshooting

### "Feedback wordt niet opgeslagen"
1. Controleer of je de juiste URL hebt gekopieerd (moet eindigen op `/exec`)
2. Controleer of de Apps Script deployment op **"Anyone"** staat
3. Check de browser console (F12) voor foutmeldingen

### "Script authorization required"
1. Ga terug naar Apps Script
2. Klik op **Run** → **doPost**
3. Autoriseer de app met je Google account
4. Deploy opnieuw

### "Timestamp is verkeerd"
De timestamp wordt automatisch gegenereerd in ISO 8601 formaat (UTC tijd).
Om lokale tijd te gebruiken, pas de Apps Script aan:
```javascript
new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Brussels' })
```

---

## 📊 Data Analyse

Je Google Sheet bevat nu alle feedback. Je kunt:
- **Filteren** op datum/tijd
- **Exporteren** naar CSV/Excel
- **Grafieken** maken van trends
- **Delen** met je team

---

## 🚀 Volgende Stappen

Na deployment naar Vercel:
1. Test de feedback-knop op de live site
2. Deel de feedback-link met je team
3. Controleer regelmatig je Google Sheet voor nieuwe feedback

**Klaar!** 🎉 Je feedback-systeem is nu actief.
