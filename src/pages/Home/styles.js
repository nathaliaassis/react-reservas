import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

export const Card = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    flex: 1;
    margin: 5px;
    width: 33,33%;
    padding: 16px;
    border-radius: 12px;
    background-color: white;

    img{
        width: 100%;
    }
`;
export const Status = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #313131;
`;
export const BtnReservar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    padding: 7px;
    color: white;
    font-size: 14px;
`;