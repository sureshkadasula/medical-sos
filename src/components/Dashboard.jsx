import '../styles/Dashboard.css';
import React from "react";
import StatsGrid from "./StatsGrid";
import ActivityTable from "./ActivityTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <StatsGrid />
      <ActivityTable />
    </div>
  );
}

export default Dashboard;