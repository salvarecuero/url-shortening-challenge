import React from "react";
import "./StatisticsCard.styles.scss";

function StatisticsCard({ Logo, title, children }) {
  return (
    <div className="statistics-card-container">
      <div className="statistics-card-logo">
        <Logo />
      </div>
      <div className="statistics-card-info">
        <span className="statistics-card-title">{title}</span>
        <span className="statistics-card-description">{children}</span>
      </div>
    </div>
  );
}

export default StatisticsCard;
