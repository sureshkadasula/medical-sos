import '../styles/Dashboard.css';
import React from "react";
import StatsGrid from "./StatsGrid";
import ActivityTable from "./ActivityTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
      </div>
      <StatsGrid />
      <ActivityTable />
    </div>
  );
}

export default Dashboard;