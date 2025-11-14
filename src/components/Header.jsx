import '../styles/Header.css';
import React from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

function Header() {
  const location = useLocation();
  
  // Get page title based on current path
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
      case '/users':
        return 'User Management';
      case '/dashboard':
        return 'Dashboard Overview';
      case '/doctors':
        return 'Doctor Management';
      case '/history':
        return 'SOS History';
      case '/reports':
        return 'Reports & Analytics';
      case '/settings':
        return 'System Settings';
      default:
        return 'Medical SOS Admin';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{pageTitle}</h1>
      </div>
      <div className="header-right">
        <ThemeToggle />
        <button className="header-button">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="header-button">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
}

export default Header;