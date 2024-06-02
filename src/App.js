import React from 'react';
import './App.css';
import Main from './components/Main';
// Assuming navbar is a component, you should import it correctly
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Main />
    </div>
  );
}

export default App;
