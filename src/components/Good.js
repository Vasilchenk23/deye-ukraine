import { supabase } from "@/db/supabaseClient";
import Goods from "@/components/Goods";

export default async function Good() {
  const { data, error } = await supabase
    .from("good")
    .select("id, name, status, price, image_url, slug, description");

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return <Goods products={data} />;
}
