# Supabase Database Setup Guide

## Problem
Data is not being saved to the database. This guide will help you set up the Supabase database correctly.

## Steps to Fix

### 1. Open Supabase Dashboard
1. Go to https://supabase.com
2. Log in to your account
3. Select your project: `bpwlxlimlkmkqnnqxluk`

### 2. Run Database Schema
1. In Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy the entire contents of `supabase_schema.sql`
4. Paste into the SQL editor
5. Click **Run** button

### 3. Verify Tables Created
After running the schema, verify tables exist:
1. Click **Table Editor** in left sidebar
2. You should see these tables:
   - `farms`
   - `user_profiles`
   - `feedback`

### 4. Check RLS Policies
1. Click on `farms` table
2. Go to **Policies** tab
3. Verify these policies exist:
   - "Public farms are viewable by everyone"
   - "Users can insert their own farms"
   - "Users can update their own farms"
   - "Users can delete their own farms"

### 5. Test the Connection
1. Refresh your app (F5)
2. Try to save opening hours
3. Check browser console (F12) for errors
4. If successful, you should see: "✅ Farm updated successfully"

## Common Issues

### Issue: "Permission denied"
**Solution:** RLS policies not set correctly. Re-run the schema SQL.

### Issue: "Column does not exist"
**Solution:** Table schema outdated. Re-run the schema SQL to add missing columns.

### Issue: "Cannot connect to Supabase"
**Solution:** Check `.env` file has correct credentials.

## Database Schema Overview

### farms table
- Stores all farm data
- Includes: name, address, location, products, schedule, images
- Has `is_verified` for admin approval
- Has `phone_visible` for privacy

### user_profiles table
- Stores user information
- Linked to Supabase auth users
- Includes: name, email, photo, role

### feedback table
- Stores user feedback
- Only admins can view

## Need Help?
If data still doesn't save after running the schema:
1. Check browser console for errors
2. Check Supabase logs in dashboard
3. Verify your user is logged in
