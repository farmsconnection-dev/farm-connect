# ⚙️ Supabase URL Configuratie

Om te zorgen dat Google Login werkt met je nieuwe domein (`farmconnect.be`), moet je dit toevoegen in Supabase:

1. Ga naar **Supabase Dashboard** (https://bpwlxlimlkmkqnnqxluk.supabase.co)
2. Klik op **Authentication** (icoon links)
3. Klik op **URL Configuration** (in het menu onder 'Configuration')
4. **Site URL:** Verander dit naar: `https://farmconnect.be`
5. **Redirect URLs:** Klik "Add URL" en voeg toe:
   - `https://farmconnect.be/**`
   - `https://www.farmconnect.be/**`
   - `http://localhost:5173/**` (zodat het lokaal ook blijft werken)

6. Klik **Save**

---

Daarna werkt Google Login perfect op je nieuwe domein! 🚀
