import { supabase } from "@/db/supabaseClient";
import Image from "next/image";

export default async function Goods() {
  const { data, error } = await supabase
    .from("inverter")
    .select("id, name, status, price, image_url");

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className="goods-container">
      <h1 id="goods">Товары</h1>
      <div className="products">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <a href={`/inverters/${encodeURIComponent(product.name)}`} className="product-link">
              <div>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={970}
                  height={1080}
                  className="product-image"
                />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-status">{product.status}</p>
                <p className="product-price">Цена: {product.price} грн</p>
              </div>
            </a>
            <button className="buy-button">Купити</button>
          </div>
        ))}
      </div>
    </div>
  );
}
