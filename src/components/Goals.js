import React from "react";

export const Goals = () => {
  return (
    <div className="goal-container">
      <h2>Працюючи з нами ви отримуєте</h2>
      <div className="goal-grid">
        <div className="goal-card">
          <div className="goal-icon">📦</div>
          <h3>Індивідуальний підхід та сервіс</h3>
          <p>Індивідуальний та комплексний підхід до вирішення задач замовника.</p>
        </div>
        <div className="goal-card highlighted">
          <div className="goal-icon">⚙️</div>
          <h3>Кваліфікація і досвід</h3>
          <p>Висока технічна кваліфікація співробітників, багаторічний досвід роботи в галузі.</p>
        </div>
        <div className="goal-card">
          <div className="goal-icon">🔌</div>
          <h3>Прямі поставки обладнання</h3>
          <p>Поставки по всій Україні.</p>
        </div>
        <div className="goal-card">
          <div className="goal-icon">💰</div>
          <h3>У нас є ПДВ (НДС)</h3>
          <p>Пропонуємо обладнання з офіційною документацією, враховуючи ПДВ.</p>
        </div>
      </div>
    </div>
  );
};
