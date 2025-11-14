import '../styles/sidebar.css';
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, icon, label, onClick, isCollapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {!isCollapsed && <p>{label}</p>}
    </Link>
  );
};

const LogoutButton = ({ icon, label, isCollapsed }) => {
  const handleLogout = () => {
    // In a real app, this would handle logout logic
    console.log("Logout clicked");
    // Example: redirect to login or clear auth tokens
  };

  return (
    <button
      onClick={handleLogout}
      className="nav-item logout-button"
      title={isCollapsed ? label : undefined}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {!isCollapsed && <p>{label}</p>}
    </button>
  );
};

function Sidebar({ isCollapsed, onToggleCollapse }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    onToggleCollapse(!isCollapsed);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="flex flex-col gap-4">
          {/* Mobile Close Button */}
          <button
            className="mobile-close-button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          
          {/* Collapse Toggle Button */}
          <button
            className="collapse-toggle"
            onClick={toggleCollapse}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          
          {/* Spacer between collapse toggle and navigation */}
          <div className="sidebar-spacer"></div>
          
          <nav>
            <NavItem to="/dashboard" icon="dashboard" label="Dashboard" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
            <NavItem to="/users" icon="group" label="Users" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
            <NavItem to="/doctors" icon="medical_services" label="Doctors" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
            <NavItem to="/history" icon="history" label="SOS History" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
            <NavItem to="/reports" icon="summarize" label="Reports" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
            <NavItem to="/settings" icon="settings" label="Settings" onClick={closeMobileMenu} isCollapsed={isCollapsed} />
          </nav>
        </div>
        <div className="logout-section">
          <LogoutButton icon="logout" label="Logout" isCollapsed={isCollapsed} />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;