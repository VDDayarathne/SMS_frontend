import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Example from './components/Dashboard';

import AboutUs from './components/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Example />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
