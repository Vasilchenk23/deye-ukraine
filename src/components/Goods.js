import { supabase } from "@/db/supabaseClient";
import Image from "next/image";

export default async function Goods() {
  const { data, error } = await supabase
    .from("good")
    .select("id, name, status, price, image_url, slug");

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  const getStatusColor = (status) => {
    if (status === "На замовлення") return "red";
    if (status === "Є в наявності") return "green";
    return "black";
  };

  return (
    <div className="goods-container">
      <h1 id="goods">Товари</h1>
      <div className="products">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <a href={`/good/${encodeURIComponent(product.slug)}`} className="product-link">
              <div>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={970}
                  height={1080}
                  className="product-image"
                />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-status"
                style={{ color: getStatusColor(product.status) }}
                >{product.status}</p>
                <p className="product-price">Ціна з ПДВ: {product.price} грн</p>
              </div>
            <button className="buy-button">Купити</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
