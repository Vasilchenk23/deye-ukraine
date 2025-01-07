import { supabase } from "@/db/supabaseClient";

export default async function Inverters() {
  const { data, error } = await supabase.from("battery").select("*");

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className="solar-panels-page">
      <h1 className="battery-h1">Акумулятори</h1>
      <div className="products">
        {data.map((battery) => (
          <div 
            key={battery.id} 
            className="product-card"
            style={{ cursor: "pointer" }}
          >
            <a href={`/battery/${encodeURIComponent(battery.name)}`}>
              <img src={battery.image_url} alt={battery.name} className="product-image" />
              <h2>{battery.name}</h2>
              <p>Цiна: {battery.price}</p>
              <p
                style={{
                  color: battery.status === "На замовлення" ? "red" : battery.status === "Є в наявності" ? "green" : "black"
                }}
              >
                {battery.status}
              </p>
              <button className="button-get-battery">Придбати</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
