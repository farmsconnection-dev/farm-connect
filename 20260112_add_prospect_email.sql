-- Add email column to prospects table
ALTER TABLE prospects ADD COLUMN IF NOT EXISTS email TEXT;
