import '../styles/Doctors.css';
import React from "react";

function Doctors() {
  // Mock doctor data with verification status
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      license: "MD-12345",
      doctorId: "D-12345",
      verificationStatus: "verified",
      status: "active",
      cases: 247,
      rating: "4.8/5"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Emergency Medicine",
      license: "MD-67890",
      doctorId: "D-67890",
      verificationStatus: "pending",
      status: "active",
      cases: 512,
      rating: "4.6/5"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrics",
      license: "MD-54321",
      doctorId: "D-54321",
      verificationStatus: "rejected",
      status: "pending",
      cases: 189,
      rating: "4.9/5"
    }
  ];

  const handleApprove = (doctorId) => {
    console.log("Approve doctor:", doctorId);
    // In a real app, this would update the doctor status
  };

  const handleReject = (doctorId) => {
    console.log("Reject doctor:", doctorId);
    // In a real app, this would update the doctor status
  };

  const renderActions = (doctor) => {
    switch (doctor.verificationStatus) {
      case 'verified':
        return (
          <div className="actions-menu">
            <button className="three-dots-button" title="More actions">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        );
      case 'pending':
        return (
          <div className="approval-actions">
            <button
              className="approve-button"
              onClick={() => handleApprove(doctor.id)}
            >
              Approve
            </button>
            <button
              className="reject-button"
              onClick={() => handleReject(doctor.id)}
            >
              Reject
            </button>
          </div>
        );
      case 'rejected':
        return (
          <div className="rejected-id">
            D: {doctor.doctorId}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="doctors-container">
      <div className="doctors-header">
        <div className="doctors-header-row">
          <div className="search-container">
            <div className="search-icon">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="search-input"
              placeholder="Search doctors by name or specialty..."
            />
          </div>
          
          <div className="action-buttons">
            <button className="action-button filter">
              <span className="material-symbols-outlined">filter_list</span>
              <span>Filters</span>
            </button>
            <button className="action-button primary">
              <span className="material-symbols-outlined">add</span>
              <span>Add Doctor</span>
            </button>
          </div>
        </div>
      </div>

      <div className="doctors-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Doctor Profile</th>
                <th>Specialization</th>
                <th>License</th>
                <th>Verification Status</th>
                <th>Status</th>
                <th>Cases</th>
                <th>Avg. Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="name">{doctor.name}</td>
                  <td>{doctor.specialization}</td>
                  <td className="license-cell">
                    <div className="license-number">{doctor.license}</div>
                    <button className="view-license-button">View License</button>
                  </td>
                  <td className="verification-status">
                    <span className={`verification-badge ${doctor.verificationStatus}`}>
                      {doctor.verificationStatus.charAt(0).toUpperCase() + doctor.verificationStatus.slice(1)}
                    </span>
                  </td>
                  <td className="status">
                    <span className={`status-badge ${doctor.status === 'active' ? 'active' : 'pending'}`}>
                      {doctor.status === 'active' ? 'Active' : 'On Leave'}
                    </span>
                  </td>
                  <td className="cases">{doctor.cases}</td>
                  <td className="rating">{doctor.rating}</td>
                  <td className="actions">
                    {renderActions(doctor)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <p>Showing 1 to 3 of 156 doctors</p>
          <div className="pagination">
            <button className="pagination-button" disabled>Previous</button>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;