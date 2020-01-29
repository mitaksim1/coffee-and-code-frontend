import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

  // Stocker une information dans le state
  // email = valeur de l'input
  // setEmail = actualise la valeur de l'email
  const [email, setEmail] = useState('');

  // Création de la méthode qui va nous permettre d'écouter l'événement sur le bouton
  async function handleSubmit(event) {
    event.preventDefault();

    // requête vers l'api
    // async/await pour attendre que la réponse arrive avant de passer à la ligne suivante
    const response = await api.post('/sessions', { email })

    const { _id } = response.data;

    // Pour qu'on sache quel utilisateur est train de réserver un café, on doit stocker son id
    localStorage.setItem('user', _id);
    
    // Une fois connecté, on veut que l'user soit dirigé vers la page dashboard où apparaîtrat tous les cafés 
    // history concerne la navigation
    history.push('/dashboard');
    }

    // evénement qui change la valeur de l'email
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <>
        <p>Réservez un <strong>Coffee Bar</strong> pour coder vos projets et rencontrez d'autres <strong>développeurs</strong> pour partager vos idées</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Votre e-mail" 
          value={email}
          // A chaque fois que l'user change la valeur de l'email (onChange) on reçoit un event
          //onChange={event => setEmail(event.target.value)}
          onChange={handleEmailChange}
          />

          <button className="btn" type="submit">Validez</button>
        </form>
        </>
    )
}