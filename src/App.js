import React from 'react';
import './App.css';
import Main from './components/Main';
// Assuming navbar is a component, you should import it correctly
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Main />
    </div>
  );
}

export default App;
