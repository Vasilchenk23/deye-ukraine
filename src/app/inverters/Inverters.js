import { supabase } from "@/db/supabaseClient";

export default async function Inverters() {
  const { data, error } = await supabase
    .from("inverter")
    .select("*")

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className="solar-panels-page">
      <h1>Инверторы</h1>
      <div className="products">
        {data.map((panel) => (
          <div key={panel.id} className="product-card">
            <img src={panel.image_url} alt={panel.name} className="product-image" />
            <h2>{panel.name}</h2>
            <p>Цена: {panel.price} грн</p>
            <p>Статус: {panel.status}</p>
            <button>Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}
