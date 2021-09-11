import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h2{
        color: white;
        margin-bottom: 24px;
    }

`;

export const Card = styled.div`
    position: relative;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    flex: 1;
    flex-wrap: wrap;
    min-width: 230px;
    padding: 16px;
    border-radius: 7px;
    background-color: white;
    margin-bottom: 16px;

    img{
        width: 230px;
        border-radius: 5px;
    }
    .box-qnt{
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .remove{
        background: transparent;
        border: none;
        box-shadow: none;
        outline: none;
        cursor: pointer;
    }
`;

export const Qtd = styled.span`
    font-size: 18px;
    font-weight: 300;
    color: #313131;
    padding: 0 8px;
`;
export const BtnReservar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cdced1;
    border: none;
    border-radius: 5px;
    padding: 12px;
    color: #212121;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.2px;
    width: 200px;
    margin-right: auto;
    cursor: pointer;

    a {
        text-decoration: none;
    }
`;
