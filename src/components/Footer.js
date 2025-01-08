"use client";
import React, { useState } from 'react';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/footer-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Зараз вам зателефонують!');
        setFormData({ name: '', phone: ''});
        setTimeout(() => setStatus(''), 4000); 
      } else {
        setStatus('Помилка при замовленні дзвінка.');
        setTimeout(() => setStatus(''), 4000); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Помилка сервера.');
    }
  };

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
          <form className="callback-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ім'я *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <button type="submit">Замовити</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© DeyeUkraine 2025</p>
      </div>
      {status && (
        <div className="status-message">
          <p>{status}</p>
        </div>
      )}
    </footer>
  );
};
