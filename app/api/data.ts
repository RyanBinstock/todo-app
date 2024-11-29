import { createClient } from "@/utils/supabase/server";


export async function fetchTodos() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('tasks').select();

  console.log(data);
  return JSON.stringify(data);
}