import '../styles/Users.css';
import React, { useState } from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock user data - in a real app, this would come from an API
  const users = [
    {
      id: 1,
      name: "Olivia Rhye",
      phone: "+1 (555) 123-4567",
      age: 28,
      bloodGroup: "O+",
      registrationDate: "2024-03-15",
    },
    {
      id: 2,
      name: "Phoenix Baker",
      phone: "+1 (555) 234-5678",
      age: 34,
      bloodGroup: "A-",
      registrationDate: "2024-03-12",
    },
    {
      id: 3,
      name: "Lana Steiner",
      phone: "+1 (555) 345-6789",
      age: 42,
      bloodGroup: "B+",
      registrationDate: "2024-03-10",
    },
    {
      id: 4,
      name: "Candice Wu",
      phone: "+1 (555) 456-7890",
      age: 25,
      bloodGroup: "AB+",
      registrationDate: "2024-03-05",
    },
    {
      id: 5,
      name: "Natali Craig",
      phone: "+1 (555) 567-8901",
      age: 31,
      bloodGroup: "O-",
      registrationDate: "2024-02-28",
    },
    {
      id: 6,
      name: "Drew Cano",
      phone: "+1 (555) 678-9012",
      age: 56,
      bloodGroup: "A+",
      registrationDate: "2024-02-25",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewContacts = (userId) => {
    // In a real app, this would navigate to user contacts page
    console.log("View contacts for user:", userId);
  };

  const handleDeactivate = (userId) => {
    // In a real app, this would show a confirmation dialog and deactivate user
    console.log("Deactivate user:", userId);
  };

  const handleAddUser = () => {
    // In a real app, this would open a modal or navigate to add user form
    console.log("Add new user");
  };

  const handleFilters = () => {
    // In a real app, this would open filter options
    console.log("Open filters");
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <div className="users-header-row">
          <div className="search-container">
            <div className="search-icon">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="search-input"
              placeholder="Search users by name or phone..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <div className="action-buttons">
            <button className="action-button filter" onClick={handleFilters}>
              <span className="material-symbols-outlined">filter_list</span>
              <span>Filters</span>
            </button>
            <button className="action-button primary" onClick={handleAddUser}>
              <span className="material-symbols-outlined">add</span>
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>

      <div className="users-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Registration Date</th>
                <th><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="name">{user.name}</td>
                  <td>{user.phone}</td>
                  <td className="age">{user.age}</td>
                  <td className="blood-group">{user.bloodGroup}</td>
                  <td className="date">{user.registrationDate}</td>
                  <td className="actions">
                    <a
                      href="#"
                      className="action-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleViewContacts(user.id);
                      }}
                    >
                      View Contacts
                    </a>
                    <button
                      className="deactivate-button"
                      onClick={() => handleDeactivate(user.id)}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <p>Showing 1 to 6 of 1,482 results</p>
          <div className="pagination">
            <button className="pagination-button" disabled>Previous</button>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;