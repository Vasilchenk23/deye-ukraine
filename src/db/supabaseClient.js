import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://foksekqwogadoajmkqia.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZva3Nla3F3b2dhZG9ham1rcWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MDc3NDIsImV4cCI6MjA1MTM4Mzc0Mn0.LxwV_rYXEdtfesbhWRXJjRlH4bBewVGa3CyhuJV7IYo'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
