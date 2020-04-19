import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './styles';
import Logo from '../../assets/img/logo_white.png';

export default function Header() {
    const reserveQnt = useSelector(state => state.reserve.length);

    return (
        <S.Container>
            <img src={Logo} alt='Logo do projeto' className='logo' />

            <Link to='/reservas' className='reserva'>
                <strong>Minhas reservas:</strong>
                <span>
                    { reserveQnt === 1 ? 
                        `${reserveQnt} reserva` :
                        `${reserveQnt} reservas` 
                    }
                </span>
            </Link>
        </S.Container>
    )
}
