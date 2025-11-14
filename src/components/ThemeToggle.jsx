import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="material-symbols-outlined">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;