import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('⚠️ Please enter both username and password.');
    } else {
      setError('');
      onLogin();
    }
  };

  return (
    <div className={`login-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="login-card">
        <label className="dark-toggle">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          🌙 Dark Mode
        </label>
        <h2>👵 Welcome to ElderEase</h2>
        <form onSubmit={handleSubmit}>
          <div className={`input-group ${username && 'filled'}`}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>

          <div className={`input-group ${password && 'filled'}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">🔓 Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
