import '../styles/StatCard.css';
import React from "react";

function StatCard({ title, value, change, changeType, icon, isHighlighted = false }) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className={`stat-card-icon ${title.toLowerCase().includes('user') ? 'users' : title.toLowerCase().includes('doctor') ? 'doctors' : title.toLowerCase().includes('sos') ? 'sos' : 'reports'}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="stat-card-trend">
          <span className="material-symbols-outlined">{changeType === 'positive' ? 'trending_up' : 'trending_down'}</span>
          {change}
        </div>
      </div>
      <div className="stat-card-content">
        <p className="stat-card-title">{title}</p>
        <p className="stat-card-value">{value}</p>
        <p className="stat-card-description">compared to last month</p>
      </div>
    </div>
  );
}

export default StatCard;