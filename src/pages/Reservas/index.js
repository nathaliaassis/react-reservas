import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve } from '../../store/modules/reserve/actions';
import { MdDelete } from 'react-icons/md';

import * as S from './styles';

export default function Reservas() {
    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function handleRemove(id) {
        dispatch(removeReserve(id))
    }
    return (
        <S.Container>
            <h2>Você selecionou: {reserves.length === 1 ?
                `${reserves.length} reserva` :
                `${reserves.length} reservas`
            }</h2>
            {reserves.map(reserve => (
                <S.Card className='card'>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <S.Qtd>Quantidade: {reserve.amount}</S.Qtd>
                    <button className='remove' type='button'
                        onClick={() => handleRemove(reserve.id)}
                    >
                        <MdDelete size={20} color='#191919' />
                    </button>
                </S.Card>
            ))
            }
            <S.BtnReservar type='button' onClick={() => { }}>
                Solicitar reservas
            </S.BtnReservar>
        </S.Container>
    )
}
