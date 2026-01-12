-- ============================================
-- FIX: RLS Policy voor Farm Registratie
-- ============================================
-- RUN THIS IN SUPABASE SQL EDITOR
-- Dit lost het probleem op waarbij boeren geen farms kunnen registreren

-- 1. Drop de oude conflicterende policies
DROP POLICY IF EXISTS "Farmers can create farms" ON farms;
DROP POLICY IF EXISTS "Farmers can insert own farm by email" ON farms;

-- 2. Maak een nieuwe, werkende INSERT policy
-- Deze policy staat INSERT toe als:
--   - De owner_email overeenkomt met het email van de ingelogde gebruiker, OF
--   - De owner_id overeenkomt met de uid van de ingelogde gebruiker
CREATE POLICY "Farmers can register farm"
  ON farms FOR INSERT
  WITH CHECK (
    owner_email = (auth.jwt() ->> 'email')
    OR owner_id = auth.uid()
  );

-- 3. Update policies ook voor andere operaties
DROP POLICY IF EXISTS "Farmers can update own farms" ON farms;
DROP POLICY IF EXISTS "Farmers can update own farm by email" ON farms;

CREATE POLICY "Farmers can manage own farm"
  ON farms FOR UPDATE
  USING (
    owner_email = (auth.jwt() ->> 'email')
    OR owner_id = auth.uid()
  );

DROP POLICY IF EXISTS "Farmers can delete own farms" ON farms;
DROP POLICY IF EXISTS "Farmers can delete own farm by email" ON farms;

CREATE POLICY "Farmers can delete own farm"
  ON farms FOR DELETE
  USING (
    owner_email = (auth.jwt() ->> 'email')
    OR owner_id = auth.uid()
  );

-- 4. Verify de nieuwe policies bestaan
SELECT schemaname, tablename, policyname, cmd 
FROM pg_policies 
WHERE tablename = 'farms';
