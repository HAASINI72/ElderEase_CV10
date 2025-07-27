import React, { useEffect, useState } from 'react';
import '../styles/BookAppointment.css';

export default function BookAppointment({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    doctor: '',
  });

  const doctorList = [
    'Dr. Priya Sharma',
    'Dr. Arjun Mehta',
    'Dr. Radhika Nair',
    'Dr. Sanjay Rao',
    'Dr. Meera Das',
  ];

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) setDarkMode(JSON.parse(storedMode));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(formData);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    alert('✅ Appointment saved!');
    onNavigate('home');
  };

  return (
    <div className={`appointment-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="appointment-card">
        <label className="dark-toggle">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          🌙 Dark Mode
        </label>
        <h2>📅 Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${formData.name && 'filled'}`}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className={`form-group ${formData.date && 'filled'}`}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label>Select Date</label>
          </div>

          <div className={`form-group ${formData.time && 'filled'}`}>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <label>Time</label>
          </div>

          <div className={`form-group ${formData.doctor && 'filled'}`}>
            <select name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="">-- Select Doctor --</option>
              {doctorList.map((doc, idx) => (
                <option key={idx} value={doc}>{doc}</option>
              ))}
            </select>
            <label>Select Doctor</label>
          </div>

          <button type="submit" className="submit-btn">📌 Book Now</button>
        </form>
        <button className="back-btn" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
