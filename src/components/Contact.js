import React from "react";

export const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <h2>Зв'яжіться з нами</h2>
      <form className="contact-form">
        <input type="text" placeholder="Ім'я *" className="contact-input" required />
        <div className="contact-row">
          <input type="tel" placeholder="Телефон *" className="contact-input" required />
          <input type="email" placeholder="Email" className="contact-input" />
        </div>
        <textarea
          placeholder="Введіть ваше повідомлення"
          className="contact-textarea"
          rows="4"
        ></textarea>
        <button type="submit" className="contact-button">Надіслати</button>
      </form>
    </div>
  );
};
