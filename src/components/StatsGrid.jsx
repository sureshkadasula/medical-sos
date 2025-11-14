import '../styles/StatsGrid.css';
import React from "react";
import StatCard from "./StatCard";

function StatsGrid() {
  return (
    <div className="stats-grid">
      <StatCard
        title="Total Users"
        value="1,482"
        change="+1.5%"
        changeType="positive"
        icon="group"
      />
      <StatCard
        title="Registered Doctors"
        value="215"
        change="+0.8%"
        changeType="positive"
        icon="medical_services"
      />
      <StatCard
        title="Active SOS Requests"
        value="7"
        change="3 Critical"
        changeType="negative"
        icon="warning"
      />
      <StatCard
        title="Resolved Cases"
        value="12"
        change="+2 yesterday"
        changeType="positive"
        icon="check_circle"
      />
    </div>
  );
}

export default StatsGrid;