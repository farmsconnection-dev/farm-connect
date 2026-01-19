-- Farm Connect Database Schema
-- Run this in Supabase SQL Editor to create/update tables

-- ============================================
-- FARMS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS farms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT,
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL,
    image TEXT,
    owner_email TEXT,
    owner_id UUID REFERENCES auth.users(id),
    products JSONB DEFAULT '[]'::jsonb,
    schedule JSONB,
    heeft_automaat BOOLEAN DEFAULT false,
    automaat_adres TEXT,
    automaat_locatie TEXT,
    is_verified BOOLEAN DEFAULT false,
    extra_automaten INTEGER DEFAULT 0,
    subscription TEXT,
    phone_visible BOOLEAN DEFAULT true,
    statusUpdate JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USER_PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL,
    name TEXT,
    photo_url TEXT,
    role TEXT DEFAULT 'consumer',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- FEEDBACK TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email TEXT,
    user_id UUID REFERENCES auth.users(id),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_farms_owner_id ON farms(owner_id);
CREATE INDEX IF NOT EXISTS idx_farms_is_verified ON farms(is_verified);
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_feedback_user_id ON feedback(user_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE farms ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- FARMS POLICIES
DROP POLICY IF EXISTS "Public farms are viewable by everyone" ON farms;
CREATE POLICY "Public farms are viewable by everyone"
    ON farms FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Users can insert their own farms" ON farms;
CREATE POLICY "Users can insert their own farms"
    ON farms FOR INSERT
    WITH CHECK (auth.uid() = owner_id OR owner_email = auth.email());

DROP POLICY IF EXISTS "Users can update their own farms" ON farms;
CREATE POLICY "Users can update their own farms"
    ON farms FOR UPDATE
    USING (auth.uid() = owner_id OR owner_email = auth.email());

DROP POLICY IF EXISTS "Users can delete their own farms" ON farms;
CREATE POLICY "Users can delete their own farms"
    ON farms FOR DELETE
    USING (auth.uid() = owner_id OR owner_email = auth.email());

-- USER_PROFILES POLICIES
DROP POLICY IF EXISTS "Users can view all profiles" ON user_profiles;
CREATE POLICY "Users can view all profiles"
    ON user_profiles FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Users can insert their own profile" ON user_profiles;
CREATE POLICY "Users can insert their own profile"
    ON user_profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
CREATE POLICY "Users can update their own profile"
    ON user_profiles FOR UPDATE
    USING (auth.uid() = id);

-- FEEDBACK POLICIES
DROP POLICY IF EXISTS "Anyone can insert feedback" ON feedback;
CREATE POLICY "Anyone can insert feedback"
    ON feedback FOR INSERT
    WITH CHECK (true);

DROP POLICY IF EXISTS "Only admins can view feedback" ON feedback;
CREATE POLICY "Only admins can view feedback"
    ON feedback FOR SELECT
    USING (auth.email() = 'farmsconnection@gmail.com');

-- ============================================
-- FUNCTIONS
-- ============================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_farms_updated_at ON farms;
CREATE TRIGGER update_farms_updated_at
    BEFORE UPDATE ON farms
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
