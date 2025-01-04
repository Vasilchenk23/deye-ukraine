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
              <div>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={970}
                  height={1080}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>{product.status}</p>
                <p>Цена: {product.price} грн</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
