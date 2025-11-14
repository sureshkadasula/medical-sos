import '../styles/Settings.css';
import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    emergencyResponse: true,
    notifications: true,
    dataRetention: false,
    darkMode: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1 className="settings-title">System Settings</h1>
        <p className="settings-description">Configure system-wide settings and preferences</p>
      </div>

      <div className="settings-sections">
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon general">
              <span className="material-symbols-outlined">settings</span>
            </div>
            <div className="settings-section-content">
              <h3>General Settings</h3>
              <p>Basic system configuration and preferences</p>
            </div>
          </div>
          <div className="settings-options">
            <div className="settings-option">
              <div className="settings-option-label">
                <h4 className="settings-option-title">Emergency Response Mode</h4>
                <p className="settings-option-description">Enable automatic priority routing for emergency cases</p>
              </div>
              <div
                className={`toggle-switch ${settings.emergencyResponse ? 'active' : ''}`}
                onClick={() => toggleSetting('emergencyResponse')}
              ></div>
            </div>
            <div className="settings-option">
              <div className="settings-option-label">
                <h4 className="settings-option-title">Dark Mode</h4>
                <p className="settings-option-description">Use dark theme for the application interface</p>
              </div>
              <div
                className={`toggle-switch ${settings.darkMode ? 'active' : ''}`}
                onClick={() => toggleSetting('darkMode')}
              ></div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon notifications">
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <div className="settings-section-content">
              <h3>Notifications</h3>
              <p>Manage notification preferences and alerts</p>
            </div>
          </div>
          <div className="settings-options">
            <div className="settings-option">
              <div className="settings-option-label">
                <h4 className="settings-option-title">Push Notifications</h4>
                <p className="settings-option-description">Receive real-time notifications for SOS alerts</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications ? 'active' : ''}`}
                onClick={() => toggleSetting('notifications')}
              ></div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon security">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="settings-section-content">
              <h3>Privacy & Security</h3>
              <p>Data protection and security settings</p>
            </div>
          </div>
          <div className="settings-options">
            <div className="settings-option">
              <div className="settings-option-label">
                <h4 className="settings-option-title">Data Retention</h4>
                <p className="settings-option-description">Automatically archive old records after retention period</p>
              </div>
              <div
                className={`toggle-switch ${settings.dataRetention ? 'active' : ''}`}
                onClick={() => toggleSetting('dataRetention')}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;