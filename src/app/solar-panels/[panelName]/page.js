import { supabase } from "@/db/supabaseClient";
import TabbedContent from "@/components/TabbedContent";

export default async function PanelPage({ params }) {
  const { panelName } = await params;

  const { data, error } = await supabase
    .from("solar-panels")
    .select("*")
    .eq("name", decodeURIComponent(panelName))
    .single();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <TabbedContent data={data} />;
}
