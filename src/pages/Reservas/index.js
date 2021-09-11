import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import * as S from './styles';

export default function Reservas() {
    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function decrementAmount(trip) {
        dispatch(updateAmountRequest(trip.id, trip.amount - 1));
    }
    function incrementAmount(trip) {
        dispatch(updateAmountRequest(trip.id, trip.amount + 1));
    }
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
                <S.Card className='card' key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <div className='box-qnt'>
                        <button className='remove' type='button'
                            onClick={() => decrementAmount(reserve)}
                        >
                            <MdRemoveCircle size={20} color='#191919' />
                        </button>
                        <S.Qtd>Quantidade: {reserve.amount}</S.Qtd>
                        <button className='remove' type='button'
                            onClick={() => incrementAmount(reserve)}
                        >
                            <MdAddCircle size={20} color='#191919' />
                        </button>
                    </div>
                    <button className='remove' type='button'
                        onClick={() => handleRemove(reserve.id)}
                    >
                        <MdDelete size={20} color='#191919' />
                    </button>
                </S.Card>
            ))
            }
            <S.BtnReservar type='button'>
                <Link to="/">
                    Solicitar reservas
                </Link>
            </S.BtnReservar>
        </S.Container>
    )
}
