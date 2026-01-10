-- ============================================
-- AUTOMATEN & VERIFICATIE UPDATE
-- ============================================
-- Run this SQL in Supabase SQL Editor to add new fields

-- Add new columns to farms table
ALTER TABLE farms 
ADD COLUMN IF NOT EXISTS heeft_automaat BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS telefoonnummer TEXT;

-- Create index for filtering
CREATE INDEX IF NOT EXISTS idx_farms_heeft_automaat ON farms(heeft_automaat);
CREATE INDEX IF NOT EXISTS idx_farms_is_verified ON farms(is_verified);

-- Update existing farms to be verified (optional - for existing data)
-- UPDATE farms SET is_verified = true WHERE created_at < NOW();

-- ============================================
-- ADMIN TABLE (for admin users)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add your admin email
INSERT INTO admin_users (email) 
VALUES ('farmsconncection@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- ============================================
-- RLS POLICIES FOR ADMIN
-- ============================================
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only admins can view admin_users table
CREATE POLICY "Only admins can view admin users"
  ON admin_users FOR SELECT
  USING (
    email = (SELECT email FROM user_profiles WHERE id = auth.uid())
  );

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users WHERE email = user_email
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- VERIFICATION FUNCTIONS
-- ============================================

-- Function to verify a farm (admin only)
CREATE OR REPLACE FUNCTION verify_farm(farm_id UUID, admin_email TEXT)
RETURNS VOID AS $$
BEGIN
  IF is_admin(admin_email) THEN
    UPDATE farms SET is_verified = true WHERE id = farm_id;
  ELSE
    RAISE EXCEPTION 'Unauthorized: Only admins can verify farms';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get unverified farms (admin only)
CREATE OR REPLACE FUNCTION get_unverified_farms(admin_email TEXT)
RETURNS TABLE (
  id UUID,
  name TEXT,
  address TEXT,
  owner_id UUID,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  IF is_admin(admin_email) THEN
    RETURN QUERY
    SELECT f.id, f.name, f.address, f.owner_id, f.created_at
    FROM farms f
    WHERE f.is_verified = false
    ORDER BY f.created_at DESC;
  ELSE
    RAISE EXCEPTION 'Unauthorized: Only admins can view unverified farms';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
