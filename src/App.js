import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Example from './components/Dashboard';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';

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
    </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
