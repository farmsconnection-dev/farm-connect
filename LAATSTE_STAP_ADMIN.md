# ✅ LAATSTE STAP: Admin Route Toevoegen

## Sidebar ✅ KLAAR!
De admin menu item is al toegevoegd aan de sidebar!

## App.tsx - Voeg Admin Route Toe

Open `src/App.tsx` en zoek naar regel 433 (ongeveer):

```tsx
        )}
      </AnimatePresence>
```

Voeg VOOR `</AnimatePresence>` de volgende code toe:

```tsx
        {view === 'admin' && (
          <AdminPage
            t={t}
            farms={farms}
            setFarms={setFarms}
            userEmail={userProfile.email}
            showToast={showToast}
          />
        )}
```

### Het eindresultaat zou er zo uit moeten zien:

```tsx
        {view === 'inventory' && userType === 'farmer' && (
          <InventoryPage
            t={t}
            setView={setView}
            farms={farms}
            setFarms={setFarms}
            showToast={showToast}
            setSelectedImage={setSelectedImage}
          />
        )}
        {view === 'admin' && (          // ← NIEUW!
          <AdminPage                     // ← NIEUW!
            t={t}                        // ← NIEUW!
            farms={farms}                // ← NIEUW!
            setFarms={setFarms}          // ← NIEUW!
            userEmail={userProfile.email}// ← NIEUW!
            showToast={showToast}        // ← NIEUW!
          />                             // ← NIEUW!
        )}                               // ← NIEUW!
      </AnimatePresence>
```

## Dat is alles! 🎉

Na deze wijziging:
1. Herstart de dev server
2. Klik op het menu (hamburger icon)
3. Klik op "Admin" in de sidebar
4. Je ziet de admin dashboard!

**Let op:** Vergeet niet je admin email in te stellen in `AdminPage.tsx` regel 16!

Slaap lekker! 😴
