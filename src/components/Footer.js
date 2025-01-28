"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MultipleMarkersMap from './MultipleMarkersMap';

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
      } else {
        setStatus('Помилка при замовленні дзвінка.');
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
          <p>Здійснюємо поставки в Україні із врахуванням ПДВ💰</p>
          <p>Наша велика компанія:<a target='_blank' href="https://promdesign.ua/" style={{textDecoration:"underline"}}>https://promdesign.ua/</a>😉</p>
          <div className='social-media'>
          {/* <a href="https://www.instagram.com/deyeeco/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.png" alt="instagram" className="instagram" width={100} height={100} />
            </a> */}
            <a href="https://t.me/DeyeEcoBot" target="_blank" rel="noopener noreferrer">
              <Image src="/images/telegram.png" alt="telegram" className="telegram" width={100} height={100} />
            </a>
          </div>
        </div>

        <div className="footer-contacts">
          <h3>Контакти</h3>
          {/* <p>📍 вул. Віктора Некрасова (колиш. Північно-Сирецька), 49В</p>
          <p>📞 050-301-13-05</p>
          <p>📞 093-170-00-18</p> */}
          <p>📍 пров. Вишневий, 3, Харкiв, Україна</p>
          📞 <a href="#" style={{ textDecoration:'underline'}}>050 325 62 64</a>
          📞 <a href="tel:+380675750556" style={{ textDecoration:'underline'}}>067 575 05 56</a>
          <br></br>
          <br></br>
          📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=o.dereguz@promdesign.ua" style={{ textDecoration:'underline'}}>o.dereguz@promdesign.ua</a>
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
      {status && (
        <div className="status-message">
          <p>{status}</p>
          <button onClick={() => handleCloseModal(setStatus(false))}>Закрити</button>
        </div>
      )}
      <MultipleMarkersMap/>
      <div className="footer-bottom">
        <p>© DeyeUkraine 2025</p>
      </div>
    </footer>
  );
};
