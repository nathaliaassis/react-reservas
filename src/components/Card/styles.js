import styled from 'styled-components';


export const Card = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    flex: 1;
    min-width: 230px;
    margin: 5px;
    padding: 8px;
    border-radius: 7px;
    background-color: white;

    img{
        width: 100%;
        border-radius: 5px;
        margin-bottom: 8px;
    }
`;

export const Status = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #313131;
    margin-bottom: 12px;
`;
export const BtnReservar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    border: none;
    border-radius: 5px;
    padding: 12px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.2px;
    margin-top: auto;
`;