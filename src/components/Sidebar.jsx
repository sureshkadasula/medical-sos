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
          <div className="sidebar-header">
            <button
              className="mobile-close-button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div
              className={`logo ${isCollapsed ? 'collapsed-logo' : ''}`}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGXr8M6WldjJYPbcHhmz7czHizHHWwbaG4TPmOtGP63GAZX-kbVAHh8Ogwv8MCJHTfVgx1xPIOGpYPiBRLz9w6J3wDH3IflE8zV4MgQLEQtdlNunzC5MovJbxF2egU1Ikz_xmlVkPpD-FWiGPGru9f2nO_jTes1DixpQUd6Q-EAVN7JeKgpqMOGZHAlO6H0oPpFXTqEF-uvn8samAafYcufZVW5Xz2V92c8eO_VdmqG94r4Esch0h2VL_FcHgT9k8sy53C6Mbp83KB")',
              }}
            ></div>
            
            {!isCollapsed && (
              <div className="logo-text">
                <h1>Medical SOS</h1>
                <p>Admin Panel</p>
              </div>
            )}
            
            {isCollapsed && (
              <div className="collapsed-logo-text" title="Medical SOS">
                <h1>MS</h1>
              </div>
            )}
          </div>
          
          {/* Collapse Toggle Button */}
          <button
            className="collapse-toggle"
            onClick={toggleCollapse}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          
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