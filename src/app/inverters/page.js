import { supabase } from "@/db/supabaseClient";

export default async function Inverters() {
  const { data, error } = await supabase.from("inverter").select("*");

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className="solar-panels-page">
      <h1 className="invertor-h1">Iнвертори</h1>
      <div className="products">
        {data.map((invertor) => (
          <div 
            key={invertor.id} 
            className="product-card"
            style={{ cursor: "pointer" }}
          >
            <a href={`/inverters/${invertor.slug}`}>
              <img src={invertor.image_url} alt={invertor.name} className="product-image" />
              <h2>{invertor.name}</h2>
              <p>Цiна: {invertor.price} грн</p>
              <p
                style={{
                  color: invertor.status === "На замовлення" ? "red" : invertor.status === "Є в наявності" ? "green" : "black"
                }}
              >
                {invertor.status}
              </p>
              <button className="buy-button">Придбати</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
