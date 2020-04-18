import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 16px 0;
    padding: 10px;

    .logo{
        height: 20px;
    }
    .reserva{
        display: flex;
        flex-direction: column;
        text-align: right;
        color: white;
    text-decoration: none;
        letter-spacing: 1.2px;
    }
`;