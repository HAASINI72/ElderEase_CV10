import React, { useState } from 'react';
import '../styles/ConsultationHistory.css';

export default function ConsultationHistory({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);

  const historyData = [
    { date: '2025-07-01', doctor: 'Dr. Sharma', notes: 'Routine check-up' },
    { date: '2025-06-20', doctor: 'Dr. Reddy', notes: 'Blood pressure issue' },
    { date: '2025-06-05', doctor: 'Dr. Kumar', notes: 'Diabetes consultation' },
  ];

  return (
    <div className={`history-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="history-card">
        <label className="dark-toggle">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          🌙 Dark Mode
        </label>

        <h2>📜 Consultation History</h2>
        <div className="history-list">
          {historyData.map((item, index) => (
            <div className="history-item" key={index}>
              <p><strong>🗓 Date:</strong> {item.date}</p>
              <p><strong>👨‍⚕️ Doctor:</strong> {item.doctor}</p>
              <p><strong>📝 Notes:</strong> {item.notes}</p>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
