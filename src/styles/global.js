import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html, body{
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: #212121;
    }
    #root{
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 1020px;
        height: 100%;
    }
`;