-- Add vending machine column to farms table
ALTER TABLE farms ADD COLUMN IF NOT EXISTS heeft_automaat BOOLEAN DEFAULT false;
