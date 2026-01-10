-- Migration 002: Add owner_email to farms for verification

-- 1. Add owner_email column
ALTER TABLE farms ADD COLUMN IF NOT EXISTS owner_email TEXT;

-- 2. Create index for performance
CREATE INDEX IF NOT EXISTS idx_farms_owner_email ON farms(owner_email);

-- 3. Update RLS policies to allow owners to manage their farm by email
-- (This ensures that even without Auth ID mapping, email is sufficient for now)

-- Policy: Update own farm
CREATE POLICY "Farmers can update own farm by email"
  ON farms FOR UPDATE
  USING (owner_email = auth.jwt() ->> 'email');

-- Policy: Insert own farm
CREATE POLICY "Farmers can insert own farm by email"
  ON farms FOR INSERT
  WITH CHECK (owner_email = auth.jwt() ->> 'email');

-- Policy: Delete own farm
CREATE POLICY "Farmers can delete own farm by email"
  ON farms FOR DELETE
  USING (owner_email = auth.jwt() ->> 'email');

-- Note: Select policy is already public ("Anyone can view farms")
