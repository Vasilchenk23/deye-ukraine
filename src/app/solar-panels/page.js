import { supabase } from "@/db/supabaseClient";

export default async function SolarPanel() {
  const { data, error } = await supabase.from("solar-panels").select("*");

  if (error) {
    console.error("Error get data:", error);
    return <div>Error get data</div>;
  }

  return (
    <div className="solar-panels-page">
      <h1 className="solar-panels-h1">Сонячні панелі</h1>
      <div className="products">
        {data.map((panel) => (
          <div
            key={panel.id}
            className="product-card"
            style={{ cursor: "pointer" }}
          >
            <a href={`/solar-panels/${encodeURIComponent(panel.name)}`}>
            <div className="container-image"></div>
              <img
                src={panel.image_url}
                alt={panel.name}
                className="product-image"
              />
              <h2>{panel.name}</h2>
              <p>Ціна: {panel.price}</p>
              <p
                style={{
                  color: panel.status === "На замовлення" ? "red" : panel.status === "Є в наявності" ? "green" : "black"
                }}
              >
                {panel.status}
              </p>
              <button className="button-get-panel">Придбати</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
