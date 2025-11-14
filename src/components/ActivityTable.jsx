import '../styles/ActivityTable.css';
import React from "react";

const StatusBadge = ({ type, label }) => (
  <span className={`status-badge ${type}`}>{label}</span>
);

function ActivityTable() {
  const activities = [
    {
      id: '#SOS-7892',
      name: 'Olivia Rhye',
      doctor: 'Dr. John Carter',
      status: 'completed',
      time: '2m ago'
    },
    {
      id: '#SOS-7891',
      name: 'Phoenix Baker',
      doctor: 'Dr. Susan Lewis',
      status: 'active',
      time: '5m ago'
    },
    {
      id: '#SOS-7890',
      name: 'Lana Steiner',
      doctor: 'Unassigned',
      status: 'pending',
      time: '12m ago'
    },
    {
      id: '#SOS-7889',
      name: 'Candice Wu',
      doctor: 'Dr. Peter Benton',
      status: 'completed',
      time: '34m ago'
    }
  ];

  return (
    <div className="activity-card">
      <div className="card-header">
        <h3 className="card-title">Recent Activity</h3>
        <a href="#" className="view-all-link">View all</a>
      </div>
      <div className="activity-table">
        <table>
          <thead>
            <tr>
              <th>Case ID</th>
              <th>User</th>
              <th>Assigned Doctor</th>
              <th>Status</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="name">{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.doctor}</td>
                <td className="status">
                  <StatusBadge type={activity.status} label={activity.status} />
                </td>
                <td className="time">{activity.time}</td>
                <td className="actions">
                  <a href="#" className="action-link">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;