import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Dashboard() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        async function loadCoffees() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setCoffees(response.data);
        }

        loadCoffees();
    }, []);

    return (
        <>
            <ul className="coffee-list">
                {coffees.map(coffee => (
                    <li key={coffee._id}>
                        <header />
                        <strong>{coffee.name}</strong>
                        <span>{coffee.price}</span>
                    </li>))}
            </ul>
        </>
    )
}