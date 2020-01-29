import axios from 'axios';

// Appel à l'api crée (backend)
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;