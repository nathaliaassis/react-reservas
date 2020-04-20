import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import { Container } from './styles';
import TripCard from '../../components/Card';

export default function Home() {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const res = await api.get('trips');
            setTrips(res.data);
        }
        loadApi();
    }, []);

    function handleAdd(trip) {
        dispatch({
            type: 'ADD_RESERVE',
            trip
        });
    }

    return (
        <Container>
            {trips.map(trip => (
                <TripCard
                    key={trip.id}
                    image={trip.image}
                    title={trip.title}
                    status={trip.status ? 'Disponível' : 'Indisponível'}
                    btnName='Solicitar reserva'
                    onClick={() => handleAdd(trip)}
                />
            ))}
        </Container>
    )
}
