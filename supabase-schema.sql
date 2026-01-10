-- ============================================
-- FARMCONNECT DATABASE SCHEMA
-- ============================================
-- Run this SQL in your Supabase SQL Editor to create all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USER PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  photo_url TEXT,
  role TEXT DEFAULT 'consumer' CHECK (role IN ('consumer', 'farmer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- FARMS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS farms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  image TEXT,
  images TEXT[],
  phone TEXT,
  schedule JSONB,
  products JSONB NOT NULL DEFAULT '[]',
  payment_methods TEXT[],
  joined_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  follower_count INTEGER DEFAULT 0,
  last_stock_update TIMESTAMP WITH TIME ZONE,
  referral_code TEXT UNIQUE,
  referral_balance DECIMAL(10, 2) DEFAULT 0,
  subscription TEXT CHECK (subscription IN ('monthly', 'annual', 'trial')),
  status_update JSONB,
  owner_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- FAVORITES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  farm_id UUID REFERENCES farms(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, farm_id)
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_farms_lat_lng ON farms(lat, lng);
CREATE INDEX IF NOT EXISTS idx_farms_owner_id ON farms(owner_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_farm_id ON favorites(farm_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE farms ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

-- User Profiles Policies
CREATE POLICY "Users can view all profiles"
  ON user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Farms Policies
CREATE POLICY "Anyone can view farms"
  ON farms FOR SELECT
  USING (true);

CREATE POLICY "Farmers can create farms"
  ON farms FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Farmers can update own farms"
  ON farms FOR UPDATE
  USING (auth.uid() = owner_id);

CREATE POLICY "Farmers can delete own farms"
  ON farms FOR DELETE
  USING (auth.uid() = owner_id);

-- Favorites Policies
CREATE POLICY "Users can view own favorites"
  ON favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites"
  ON favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own favorites"
  ON favorites FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_farms_updated_at
  BEFORE UPDATE ON farms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SEED DATA (Optional - uncomment to use)
-- ============================================

-- Example: Insert a test farm
-- INSERT INTO farms (name, address, lat, lng, products, payment_methods)
-- VALUES (
--   'Test Boerderij',
--   'Teststraat 1, 1000 Brussel',
--   50.8503,
--   4.3517,
--   '[{"id": "p1", "name": "Aardappelen", "available": true, "category": "vegetables", "price": "2.50", "unit": "kg"}]'::jsonb,
--   ARRAY['cash', 'payconiq']
-- );
