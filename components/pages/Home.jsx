import { useState } from 'react';
import '../styles/home.css';


const Home = ({ onNavigate }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`home-container ${darkMode ? 'dark' : ''}`}>
      <div className="home-header">
        <h1 className="home-title">👋 Welcome to ElderEase!</h1>
        <label className="dark-toggle">
          <input
            type="checkbox"
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          🌙 Dark Mode
        </label>
      </div>

      <div className="card-center-wrapper">
        <div className="card-container">
          {menuCard("📅 Book Appointment", () => onNavigate('book'))}
          {menuCard("💊 Track Medicine Intake", () => onNavigate('track'))}
          {menuCard("📜 Consultation History", () => onNavigate('history'))}
        </div>
      </div>
    </div>
  );
};

const menuCard = (text, onClick) => (
  <div
    className="menu-card"
    onClick={onClick}
    onMouseEnter={(e) => {
      e.currentTarget.classList.add('hovered');
    }}
    onMouseLeave={(e) => {
      e.currentTarget.classList.remove('hovered');
    }}
  >
    {text}
  </div>
);

export default Home;
