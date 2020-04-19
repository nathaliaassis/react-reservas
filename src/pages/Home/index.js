import React, { useState, useEffect } from 'react'
import api from '../../services/api';

import * as S from './styles';
import { Card } from '../../components/Card/styles';

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
        <S.Container>
            {trips.map(trip => (
                <Card key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <S.Status>
                        Status: {trip.status ? 'Disponível' : 'Indisponível'}
                    </S.Status>
                    <S.BtnReservar onClick={() => { }}>
                        Solicitar Reserva
                    </S.BtnReservar>
                </Card>
            ))}
        </S.Container>
    )
}
