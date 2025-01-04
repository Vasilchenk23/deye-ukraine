import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Deye in Ukraine</h2>
          <p>Здійснюємо поставки в Україні із врахуванням ПДВ</p>
        </div>

        <div className="footer-contacts">
          <h3>Контакти</h3>
          <p>📍 пров. Вишневий, 3, Харкiв, Україна</p>
          <p>📞 050-343-14-14</p>
          <p>📞 050-343-91-20</p>
          <p>📧 designer.didro@gmail.com</p>
        </div>

        <div className="footer-callback">
          <h3>Замовити зворотній дзвінок</h3>
          <form className="callback-form">
            <input type="text" placeholder="Ім'я *" required />
            <input type="tel" placeholder="Телефон *" required />
            <input type="text" placeholder="Зручний час для дзвінка" />
            <button type="submit">Замовити</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© DeyeUkraine 2025</p>
      </div>
    </footer>
  );
};
