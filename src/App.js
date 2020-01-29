import React from 'react';
import api from './services/api';
import './App.css';

// Imports
import logo from './Assets/coffee-logo2.png';

function App() {
  // Création de la méthode qui va nous permettre d'écouter l'événement sur le bouton
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Hello');
  }
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Coffee&Code"/>

      <div className="content">
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          />

          <button className="btn" type="submit">Validez</button>
        </form>
      </div>
    </div>
  );
}

export default App;
