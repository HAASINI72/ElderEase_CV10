import { useState } from 'react';
import './App.css';
import './index.css';

import Login from './components/pages/Login.jsx';
import Home from './components/pages/Home.jsx';
import BookAppointment from './components/pages/BookAppointment.jsx';
import TrackMedicine from './components/pages/TrackMedicine.jsx';
import ConsultationHistory from './components/pages/ConsultationHistory.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'book':
        return <BookAppointment onNavigate={setCurrentPage} />;
      case 'track':
        return <TrackMedicine onNavigate={setCurrentPage} />;
      case 'history':
        return <ConsultationHistory onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        renderPage()
      )}
    </div>
  );
}

export default App;
