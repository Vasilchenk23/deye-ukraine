import { supabase } from "@/db/supabaseClient";
import TabbedContent from "@/components/TabbedContent";

export default async function InvertorPage({ params }) {
  const { goodName } = await params;

  const { data, error } = await supabase
    .from("good")
    .select("*")
    .eq("slug", decodeURIComponent(goodName)) 
    .single();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <TabbedContent data={data} />;
}
