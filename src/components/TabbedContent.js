"use client"; 
import { useState } from "react";

export default function TabbedContent({ data }) {
  const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getStatusColor = (status) => {
    if (status === "На замовлення") return "red";
    if (status === "Є в наявності") return "green";
    return "black";
  };

  const handleOrderClick = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/modal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', phone: ''});
        alert('Зачекайте зараз вам зателефонують :)')
        handleCloseModal(true);
      } else {
        setTimeout(() => setStatus(''), 4000); 
        alert('Помилка :(')
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="panel-container">
      <h1 className="panel-title">{data.name}</h1>
      <div className="panel-main">
        <div className="container-image">
          <img className="panel-image" src={data.image_url} alt={data.name} />
        </div>
        <div className="panel-info">
          <p className="panel-price"><b>{data.price}</b> ₴</p>
          <br />
          <p className="panel-status" style={{ color: getStatusColor(data.status) }}>
            {data.status}
          </p>
        </div>
      </div>
      <div className="get-button-container">
        <button className="get-button" onClick={handleOrderClick}>Замовити</button>
      </div>
      <div className="tabs">
        <button
          onClick={() => handleTabClick("description")}
          className={`tab ${activeTab === "description" ? "active" : ""}`}
        >
          Опис
        </button>
        <button
          onClick={() => handleTabClick("tech")}
          className={`tab ${activeTab === "tech" ? "active" : ""}`}
        >
          Технічна документація
        </button>
        <button
          onClick={() => handleTabClick("docx")}
          className={`tab ${activeTab === "docx" ? "active" : ""}`}
        >
          Документація
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "description" && (
          <div className="tab-panel">
            <h2>Опис</h2>
            <p>{data.description}</p>
          </div>
        )}
        {activeTab === "tech" && (
          <div className="tab-panel">
            <h2>Технічна документація</h2>
            <p>{data.tech}</p>
          </div>
        )}
        {activeTab === "docx" && (
          <div className="tab-panel">
            <h2>Документація</h2>
            <a href={data.docx} target="_blank" rel="noopener noreferrer" className="download-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path fill="currentColor" d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zm1 14H6V5h7v5h5v7z"/>
              </svg>
              Завантажити PDF
            </a>
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Оформлення замовлення</h2>
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
