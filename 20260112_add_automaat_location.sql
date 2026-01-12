-- Add automaat location fields to farms table
ALTER TABLE farms ADD COLUMN IF NOT EXISTS automaat_locatie TEXT;
ALTER TABLE farms ADD COLUMN IF NOT EXISTS automaat_adres TEXT;
