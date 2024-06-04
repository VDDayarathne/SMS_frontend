import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Example from './components/Dashboard';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import LatestNews from './components/LatestNews';
import FirstPage from './components/FirstPage';
import EventsAndTournament from  './components/EventsAndTournament';
import Sidebar from './components/Sidebar';
import AboutUs from './components/AboutUs';


function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Routes>
                <Route exact path="/" element={<FirstPage />} />
                <Route path="/Latest-news" element={<LatestNews />} />
      </Routes>

      <Routes>
                 <Route exact path="/" element={<FirstPage />} />
                 <Route path="/Event-Tournament" element={<EventsAndTournament />} />
      </Routes>
      <Routes>
                       <Route exact path="/" element={<Sidebar />} />
                       <Route path="/dashboard" element={<Dashboard />} />
      </Routes>



    </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
