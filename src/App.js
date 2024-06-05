import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Example from './components/Dashboard';
import Dashboard from './components/Dashboard';
import LatestNews from './components/LatestNews';
import FirstPage from './components/FirstPage';
import EventsAndTournament from  './components/EventsAndTournament';
import Sidebar from './components/Sidebar';
import AboutUs from './components/AboutUs';
import SportShedule from './components/SportShedule';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : '';
    });

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={!user? (<LoginForm onLogin={handleLogin} />) : (<Dashboard user={user} onLogout={handleLogout} />)} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Latest-news" element={<LatestNews />} />
        <Route path="/Event-Tournament" element={<EventsAndTournament />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sport-shedule" element={<SportShedule />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;