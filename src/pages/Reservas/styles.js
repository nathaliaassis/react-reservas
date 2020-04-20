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
    min-width: 230px;
    padding: 16px;
    border-radius: 7px;
    background-color: white;
    margin-bottom: 16px;

    img{
        width: 230px;
        border-radius: 5px;
    }
`;

export const Qtd = styled.span`
    font-size: 18px;
    font-weight: 300;
    color: #313131;
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
    margin-top: 16px;
    margin-right: auto;
    cursor: pointer;
`;