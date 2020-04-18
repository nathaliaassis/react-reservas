import React, { useState, useEffect } from 'react'
import api from '../../services/api';

export default function Home() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {

            const res = await api.get('trips');
            setTrips(res.data);
        }
        loadApi();
    }, []);

    return (
        <div>
            home
        </div>
    )
}
