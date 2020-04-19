import React, { useState, useEffect } from 'react'
import api from '../../services/api';

import { Container } from './styles';
import TripCard from '../../components/Card';

export default function Reservas() {

    return (
        <Container>
            <TripCard
                title='Promoção para Brasília'
                status='Disponível'
                btnName='Solicitar reserva'
                btnFunction={() => { }}
            />
        </Container>
    )
}
