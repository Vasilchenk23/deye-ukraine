"use client";

import { useState } from "react";
import Image from "next/image";

export default function GoodsClient({ products }) {
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const getStatusColor = (status) => {
    if (status === "На замовлення") return "red";
    if (status === "Є в наявності") return "green";
    return "black";
  };

  const toggleDescription = (id) => {
    setActiveCard((prevActive) => (prevActive === id ? null : id));
  };

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/modal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, product: selectedProduct.name }),
      });

      if (response.ok) {
        setFormData({ name: "", phone: "" });
        alert("Зачекайте, зараз вам зателефонують :)");
        handleCloseModal();
      } else {
        alert("Помилка :(");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="goods-container">
      <h1 id="goods">Товари</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* <a href={`/good/${encodeURIComponent(product.slug)}`} className="product-link"> */}
              <div>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={970}
                  height={1080}
                  className="product-image"
                />
                <h2 className="product-title">{product.name}</h2>
                <p
                  className="product-status"
                  style={{ color: getStatusColor(product.status) }}
                >
                  {product.status}
                </p>
                <p className="product-price">Цiна: {product.price} грн</p>
              </div>
            {/* </a> */}
            <p
              className="toggle-description-text"
              onClick={() => toggleDescription(product.id)}
            >
              {activeCard === product.id ? "Сховати опис" : "Детальніше"}
            </p>
            {activeCard === product.id && (
              <div className="product-description">
                <p>{product.description}</p>
              </div>
            )}
            <div className="get-button-container">
              <button className="get-button" onClick={() => handleOrderClick(product)}>
                Замовити
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && handleCloseModal()}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Оформлення замовлення</h2>
            <p>Товар: <strong>{selectedProduct.name}</strong></p>
            <form onSubmit={handleSubmit}>
              Ваше ім'я:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="nameModal"
              />
              <br />
              Номер телефону:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="phoneModal"
              />
              <br />
              <button type="submit">Оформити замовлення</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
