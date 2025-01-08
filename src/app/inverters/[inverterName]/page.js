import { supabase } from "@/db/supabaseClient";
import TabbedContent from "@/components/TabbedContent";

export default async function InvertorPage({ params }) {
  const { inverterName } = await params;

  const { data, error } = await supabase
    .from("inverter")
    .select("*")
    .eq("slug", decodeURIComponent(inverterName)) 
    .single();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <TabbedContent data={data} />;
}
