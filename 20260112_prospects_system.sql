-- ============================================
-- PROSPECT MANAGEMENT SYSTEM
-- ============================================

CREATE TABLE IF NOT EXISTS prospects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT,
  region TEXT,
  type TEXT DEFAULT 'other', -- farming type
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'sent', 'joined')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE prospects ENABLE ROW LEVEL SECURITY;

-- Policy: Only the specific admin can access this table
-- (Using the same email check as before for consistency)
CREATE POLICY "Admins can manage prospects"
  ON prospects
  TO authenticated
  USING (
    (SELECT email FROM auth.users WHERE id = auth.uid()) = 'farmsconnection@gmail.com'
  )
  WITH CHECK (
    (SELECT email FROM auth.users WHERE id = auth.uid()) = 'farmsconnection@gmail.com'
  );
