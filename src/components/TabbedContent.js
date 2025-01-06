"use client"; 
import { useState } from "react";

export default function TabbedContent({ data }) {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="panel-container">
      <h1 className="panel-title">{data.name}</h1>
      <div className="panel-main">
        <img className="panel-image" src={data.image_url} alt={data.name} />
        <div className="panel-info">
          <p className="panel-price">Ціна: {data.price}</p>
          <br></br>
          <p className="panel-status">{data.status}</p>
        </div>
      </div>
      <div className="get-button-container">
        <button className="get-button">Замовити</button>
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
      </div>
    </div>
  );
}
