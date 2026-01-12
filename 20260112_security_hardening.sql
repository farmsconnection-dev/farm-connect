-- ================================================================
-- SECURITY HARDENING SCRIPT (2026-01-12)
-- Beveiliging tegen fraude via manipulatie van kritieke velden.
-- Draai dit script in de Supabase SQL Editor.
-- ================================================================

-- 1. Functie die controleert of u de admin bent of een gewone gebruiker
--    En die voorkomt dat gewone gebruikers gevoelige velden aanpassen.
CREATE OR REPLACE FUNCTION public.protect_critical_fields()
RETURNS TRIGGER AS $$
DECLARE
  current_user_email text;
BEGIN
  -- Haal email op van de gebruiker die het verzoek doet
  -- (auth.jwt() bevat de claims, maar auth.users tabel is veiliger)
  SELECT email INTO current_user_email FROM auth.users WHERE id = auth.uid();

  -- 🛑 ADMIN CHECK: Vervang e-mail hieronder met uw exacte admin e-mail als die anders is!
  -- Als het de admin is, mag alles.
  IF current_user_email = 'farmsconnection@gmail.com' THEN
    RETURN NEW;
  END IF;

  -- 🛡️ VOOR GEWONE GEBRUIKERS (Farmers & Consumers):
  
  IF (TG_OP = 'INSERT') THEN
    -- Bij aanmaken van een boerderij:
    -- Forceer verificatie ALTIJD op false (moet door admin goedgekeurd worden)
    NEW.is_verified := false; 
    
    -- Forceer saldo op 0 (geen gratis geld)
    NEW.referral_balance := 0; 

    -- Forceer subscription op null of trial (afhankelijk van logica, hier null/default)
    -- NEW.subscription := 'trial'; -- Optioneel
  
  ELSIF (TG_OP = 'UPDATE') THEN
    -- Bij bewerken van een boerderij:
    
    -- Blokkeer wijziging van is_verified: Zet terug naar de OUDE waarde
    IF NEW.is_verified IS DISTINCT FROM OLD.is_verified THEN
        NEW.is_verified := OLD.is_verified;
    END IF;
    
    -- Blokkeer wijziging van referral_balance
    IF NEW.referral_balance IS DISTINCT FROM OLD.referral_balance THEN
        NEW.referral_balance := OLD.referral_balance;
    END IF;

    -- Blokkeer wijziging van subscription status
    IF NEW.subscription IS DISTINCT FROM OLD.subscription THEN
        NEW.subscription := OLD.subscription;
    END IF;
    
    -- Blokkeer wijziging van referral_code (eens gegeven, blijft gegeven)
    IF NEW.referral_code IS DISTINCT FROM OLD.referral_code AND OLD.referral_code IS NOT NULL THEN
        NEW.referral_code := OLD.referral_code;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Koppel de functie aan de 'farms' tabel met een Trigger
DROP TRIGGER IF EXISTS tr_protect_critical_fields ON public.farms;

CREATE TRIGGER tr_protect_critical_fields
BEFORE INSERT OR UPDATE ON public.farms
FOR EACH ROW
EXECUTE FUNCTION public.protect_critical_fields();

-- Klaar! Uw database is nu beveiligd tegen deze manipulaties.
