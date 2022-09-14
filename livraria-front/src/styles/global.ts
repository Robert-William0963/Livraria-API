import { createGlobalStyle } from 'styled-components';
import background from '../assets/back-book.jpg';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background: #e1e4eb url(${background}) no-repeat;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px Roboto, sans-serif
    }
    #root {
        max-width: 960px;
        max-height: 300px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    button {
        cursor: pointer;
    }

`;
