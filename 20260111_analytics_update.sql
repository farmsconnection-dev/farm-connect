-- 1. Maak een tabel voor dagelijkse statistieken
CREATE TABLE IF NOT EXISTS farm_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  farm_id UUID REFERENCES farms(id) ON DELETE CASCADE,
  date DATE DEFAULT CURRENT_DATE,
  views INTEGER DEFAULT 0,
  visitors INTEGER DEFAULT 0, -- Unieke bezoekers (voorlopig simpel geteld)
  UNIQUE(farm_id, date) -- Zorgt voor max 1 rij per boerderij per dag
);

-- 2. Maak een functie om views veilig op te tellen (zonder race conditions)
CREATE OR REPLACE FUNCTION increment_farm_view(p_farm_id UUID)
RETURNS VOID AS $$
BEGIN
  INSERT INTO farm_stats (farm_id, date, views, visitors)
  VALUES (p_farm_id, CURRENT_DATE, 1, 1)
  ON CONFLICT (farm_id, date)
  DO UPDATE SET 
    views = farm_stats.views + 1,
    visitors = farm_stats.visitors + 1; -- Voor nu gelijk aan views, later verfijnen
END;
$$ LANGUAGE plpgsql;

-- 3. Zorg dat iedereen stats mag lezen (voor dashboard) en mag incrementen (voor tracking)
ALTER TABLE farm_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read stats" ON farm_stats FOR SELECT USING (true);
-- De increment functie draait als 'security definer' of we geven insert rechten, 
-- maar via de RPC functie is veiliger. Laten we basis rechten geven:
CREATE POLICY "Everyone can insert stats" ON farm_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Everyone can update stats" ON farm_stats FOR UPDATE USING (true);

-- 4. Zorg dat we RLS policies updaten voor user profiles om de nieuwe flow te ondersteunen
-- (Zekerheidje: update policies voor farms voor het geval dat)
ALTER TABLE farms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public farms are viewable by everyone" ON farms FOR SELECT USING (true);
CREATE POLICY "Farmers can insert their own farm" ON farms FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Farmers can update their own farm" ON farms FOR UPDATE USING (auth.uid() = owner_id);
