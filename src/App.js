import React from 'react';

import './App.css';

// Imports
import logo from './Assets/coffee-logo2.png';
import Routes from './routes';


function App() {
  
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Coffee&Code"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
