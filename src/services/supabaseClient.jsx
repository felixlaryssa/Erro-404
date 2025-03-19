import { createClient } from "@supabase/supabase-js";

// Conexão por url usando variáveis de ambiente corretamente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Exportar objeto supabase contendo o banco
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
