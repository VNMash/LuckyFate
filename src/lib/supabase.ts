import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// For demo purposes, use test values if not configured
const defaultUrl = 'https://demo-project.supabase.co'
const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW8tcHJvamVjdCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQ1MTkyNzIwLCJleHAiOjE5NjA3Njg3MjB9.demo-key'

export const supabase = createClient(
  supabaseUrl || defaultUrl, 
  supabaseAnonKey || defaultKey
)

// Check if real Supabase is configured (not demo values)
export const isSupabaseConfigured = !!(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-ref') &&
  !supabaseUrl.includes('demo-project') &&
  supabaseUrl.includes('.supabase.co')
)

// Types for our database
export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface AuthUser {
  id: string
  email: string
  full_name: string
}