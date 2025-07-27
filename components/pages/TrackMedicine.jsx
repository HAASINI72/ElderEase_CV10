import React, { useState } from 'react';
import '../styles/TrackMedicine.css';

export default function TrackMedicine({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);
  const [medicine, setMedicine] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicine && time) {
      alert('💊 Medicine Intake Recorded!');
      setMedicine('');
      setTime('');
      setNotes('');
    } else {
      alert('Please fill in required fields');
    }
  };

  return (
    <div className={`track-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="track-card">
        <label className="dark-toggle">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          🌙 Dark Mode
        </label>

        <h2>💊 Track Medicine</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${medicine ? 'filled' : ''}`}>
            <input
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              required
            />
            <label>Medicine Name</label>
          </div>

          <div className={`form-group ${time ? 'filled' : ''}`}>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <label>Time</label>
          </div>

          <div className={`form-group ${notes ? 'filled' : ''}`}>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
            />
            <label>Notes (optional)</label>
          </div>

          <button type="submit" className="submit-btn">💾 Save</button>
        </form>

        <button className="back-btn" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
