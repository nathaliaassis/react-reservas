import React from 'react';
import * as S from './styles';


export default function TripCard(props) {
    return (
        <S.Card>
            <img src={props.image} alt={props.title} />
            <strong>{props.title}</strong>
            <S.Status>{props.status}</S.Status>
            <S.BtnReservar type='button' onClick={props.btnFunction}>
                {props.btnName}
            </S.BtnReservar>
        </S.Card>
    );

}