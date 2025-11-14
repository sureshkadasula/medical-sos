import '../styles/SOSHistory.css';
import React from "react";

function SOSHistory() {
  return (
    <div className="sos-history-container">
      <div className="sos-history-header">
        <div className="sos-history-header-row">
          <div className="search-container">
            <div className="search-icon">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="search-input"
              placeholder="Search SOS cases by ID or location..."
            />
          </div>
          
          <div className="filter-buttons">
            <button className="filter-button">
              <span className="material-symbols-outlined">filter_list</span>
              <span>All Cases</span>
            </button>
            <button className="filter-button active">
              <span className="material-symbols-outlined">hourglass_empty</span>
              <span>Pending</span>
            </button>
            <button className="filter-button">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Completed</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sos-history-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Patient</th>
                <th>Location</th>
                <th>Time</th>
                <th>Status</th>
                <th><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name">#SOS2024-001</td>
                <td>John Doe</td>
                <td>Downtown Area</td>
                <td>10:30 AM</td>
                <td className="status">
                  <span className="status-badge completed">Resolved</span>
                </td>
                <td className="actions">
                  <a href="#" className="action-link">View Details</a>
                  <button className="deactivate-button">Archive</button>
                </td>
              </tr>
              <tr>
                <td className="name">#SOS2024-002</td>
                <td>Jane Smith</td>
                <td>City Hospital</td>
                <td>11:15 AM</td>
                <td className="status">
                  <span className="status-badge active">In Progress</span>
                </td>
                <td className="actions">
                  <a href="#" className="action-link">View Details</a>
                  <button className="deactivate-button">Complete</button>
                </td>
              </tr>
              <tr>
                <td className="name">#SOS2024-003</td>
                <td>Mike Wilson</td>
                <td>Suburb Area</td>
                <td>12:00 PM</td>
                <td className="status">
                  <span className="status-badge pending">Pending</span>
                </td>
                <td className="actions">
                  <a href="#" className="action-link">View Details</a>
                  <button className="deactivate-button">Assign</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <p>Showing 1 to 3 of 1,247 cases</p>
          <div className="pagination">
            <button className="pagination-button" disabled>Previous</button>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SOSHistory;