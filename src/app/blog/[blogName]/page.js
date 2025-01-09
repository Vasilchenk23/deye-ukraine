import { supabase } from "@/db/supabaseClient";
import BlogTabble from "@/components/BlogTabble";

export default async function BatteryPage({ params }) {
  const { blogName } = await params;

  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", decodeURIComponent(blogName)) 
    .single();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <BlogTabble data={data} />;
}
