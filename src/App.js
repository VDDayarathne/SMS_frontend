import React, { useState, useEffect, Redirect } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
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
import Swimming from './components/Swimming';
import WelcomePage from './components/WelcomePage';
import Inventory from './components/Inventory';
import AdminDashboard from './components/AdminDashboard';
import NotificationList from './components/NotificationList';
import HelpPage from './components/HelpPage';
import MyPlan from './components/MyPlan';
import UpdateProfile from './components/UpdateProfile';
import PrivacyPage from './components/PrivacyPage';
import SettingsPage from './components/SettingsPage';
import Profile from './components/Profile';
import TermsPage from './components/TermsPage';
import CreateNotification from './components/CreateNotification';
import CreateNews from './components/CreateNews';
import CreateEventsAndTournaments from './components/CreateEventsAndTournaments';





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
              <Route exact path="/" element={<WelcomePage />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/Latest-news" element={<LatestNews />} />
              <Route path="/Event-Tournament" element={<EventsAndTournament />} />
              <Route path="/dashboard" element={user? <Dashboard user={user} onLogout={handleLogout} /> : <Redirect to="/" />} />
              <Route path="/sport-shedule" element={<SportShedule />} />
              <Route path="/sidebar" element={user? <Sidebar /> : <Redirect to="/" />} />
              <Route path="/sports" element={<Swimming />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/logout" element={<LoginForm />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/notification" element={<NotificationList />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/myplan" element={<MyPlan />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/updateprofile/:userId" element={<UpdateProfile />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/createnotification" element={<CreateNotification />} />
              <Route path="/createnews" element={<CreateNews />} />
              <Route path="/createtournament" element={<CreateEventsAndTournaments />} />


            </Routes>
    </BrowserRouter>

  );
}

export default App;