import { supabase } from "@/db/supabaseClient";
import TabbedContent from "@/components/TabbedContent";

export default async function BatteryPage({ params }) {
  const { batteryName } = await params;

  const { data, error } = await supabase
    .from("battery")
    .select("*")
    .eq("name", decodeURIComponent(batteryName)) 
    .single();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <TabbedContent data={data} />;
}
