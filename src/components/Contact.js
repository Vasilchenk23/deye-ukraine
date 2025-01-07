"use client";
import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Зараз Вам зателефонують!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 4000); 
      } else {
        setStatus('Помилка при замовленні дзвінка.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Помилка на нашому серверi.');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Зв'яжіться з нами</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          className="contact-input"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <div className="contact-row">
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="contact-input"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Введіть ваше повідомлення"
          className="contact-textarea"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact-button">Надіслати</button>
      </form>
      {status && (
        <div className="status-message">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};
