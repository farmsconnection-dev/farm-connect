# 🗄️ FarmConnect Database Setup

## Supabase Configuration

### 1. Environment Variables
De volgende environment variables zijn al geconfigureerd in `.env`:

```
VITE_SUPABASE_URL=https://bpwlxlimlkmkqnnqxluk.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_FKtKtICR_7xwejTHJwT5JA_JtFjOSe-
```

### 2. Database Schema Setup

1. **Open Supabase Dashboard**
   - Ga naar: https://bpwlxlimlkmkqnnqxluk.supabase.co
   - Log in met je account

2. **Run SQL Schema**
   - Klik op "SQL Editor" in het linker menu
   - Klik op "New Query"
   - Kopieer de volledige inhoud van `supabase-schema.sql`
   - Plak in de SQL editor
   - Klik op "Run" (of druk Ctrl+Enter)

3. **Verify Tables**
   - Klik op "Table Editor" in het linker menu
   - Je zou de volgende tabellen moeten zien:
     - `user_profiles`
     - `farms`
     - `favorites`

### 3. Database Structure

#### **user_profiles**
- `id` (UUID) - Primary key
- `email` (TEXT) - Unique email
- `name` (TEXT) - User name
- `photo_url` (TEXT) - Profile photo URL
- `role` (TEXT) - 'consumer' or 'farmer'
- `created_at`, `updated_at` (TIMESTAMP)

#### **farms**
- `id` (UUID) - Primary key
- `name` (TEXT) - Farm name
- `address` (TEXT) - Full address
- `lat`, `lng` (DECIMAL) - Coordinates
- `image` (TEXT) - Main image URL
- `images` (TEXT[]) - Array of image URLs
- `phone` (TEXT) - Contact number
- `schedule` (JSONB) - Opening hours
- `products` (JSONB) - Product list
- `payment_methods` (TEXT[]) - Accepted payments
- `subscription` (TEXT) - 'monthly', 'annual', or 'trial'
- `status_update` (JSONB) - Temporary status message
- `owner_id` (UUID) - Reference to user_profiles
- `follower_count` (INTEGER)
- `referral_code`, `referral_balance`
- `created_at`, `updated_at` (TIMESTAMP)

#### **favorites**
- `id` (UUID) - Primary key
- `user_id` (UUID) - Reference to user_profiles
- `farm_id` (UUID) - Reference to farms
- `created_at` (TIMESTAMP)

### 4. Using the Database in Your App

#### Import database functions:
```typescript
import { 
  getFarms, 
  createFarm, 
  updateFarm,
  getUserFavorites,
  addFavorite 
} from './lib/database';
```

#### Example: Fetch all farms
```typescript
const farms = await getFarms();
```

#### Example: Create a new farm
```typescript
const newFarm = await createFarm({
  name: 'Mijn Boerderij',
  address: 'Straat 1, 1000 Brussel',
  lat: 50.8503,
  lng: 4.3517,
  products: [],
  payment_methods: ['cash']
});
```

#### Example: Add to favorites
```typescript
await addFavorite(userId, farmId);
```

### 5. Real-time Updates

Subscribe to farm changes:
```typescript
const unsubscribe = subscribeFarms((farms) => {
  console.log('Farms updated:', farms);
  setFarms(farms);
});

// Later: cleanup
unsubscribe();
```

### 6. Security (Row Level Security)

De database heeft RLS policies:
- ✅ Iedereen kan farms bekijken
- ✅ Alleen farm owners kunnen hun eigen farms bewerken
- ✅ Users kunnen alleen hun eigen favorites beheren
- ✅ Users kunnen alleen hun eigen profile bewerken

### 7. Next Steps

1. ✅ Run `supabase-schema.sql` in Supabase SQL Editor
2. ✅ Verify tables are created
3. ✅ Test database connection in your app
4. 🔄 Optioneel: Migreer bestaande data van `constants.ts` naar database
5. 🔄 Implementeer authentication (Supabase Auth)

### 8. Migration Script (Optional)

Als je de 24 voorbeeld boerderijen naar de database wilt migreren, gebruik:

```typescript
import { INITIAL_FARMS } from './constants';
import { createFarm } from './lib/database';

async function migrateFarms() {
  for (const farm of INITIAL_FARMS) {
    await createFarm(farm);
  }
  console.log('Migration complete!');
}
```

## 🚀 Ready to use!

Je Supabase database is nu geconfigureerd en klaar voor gebruik!
