import React from 'react'
import * as S from './styles';
import Logo from '../../assets/img/logo_white.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <S.Container>
            <img src={Logo} alt='Logo do projeto' className='logo' />

            <Link to='/reservas' className='reserva'>
                <strong>Minhas reservas:</strong>
                <span>0 reservas</span>
            </Link>
        </S.Container>
    )
}
