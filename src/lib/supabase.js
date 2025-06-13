// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ymieprnynmvtuhdmnpxc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltaWVwcm55bm12dHVoZG1ucHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjE0NzgsImV4cCI6MjA2NDEzNzQ3OH0.l81FMvGjc7ZZtI3olIR5OfVemh34gaxWvMSYCjnNe_U' // lấy từ Project Settings -> API
export const supabase = createClient(supabaseUrl, supabaseKey)
