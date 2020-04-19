import React, { useState, useEffect } from 'react'
import api from '../../services/api';

import { Container } from './styles';
import TripCard from '../../components/Card';

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
        <Container>
            {trips.map(trip => (
                <TripCard
                    key={trip.id}
                    image={trip.image}
                    title={trip.title}
                    status={trip.status}
                    btnName='Solicitar reserva'
                    btnFunction={() => { }}
                />
            ))}
        </Container>
    )
}
