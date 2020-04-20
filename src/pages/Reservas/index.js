import React from 'react'
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

import * as S from './styles';

export default function Reservas() {
    const reserves = useSelector(state => state.reserve);
    console.log('result', reserves);
    return (
        <S.Container>
            <h2>Você solicitou: {reserves.length} reservas</h2>
            {reserves.map(reserve => (
                <S.Card className='card'>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <S.Qtd>Quantidade: {reserve.amount}</S.Qtd>
                    <MdDelete size={20} color='#191919' />
                </S.Card>
            ))
            }
            <S.BtnReservar type='button' onClick={() => { }}>
                Solicitar reservas
            </S.BtnReservar>
        </S.Container>
    )
}
