import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62,5%;
        @media(max-width: 1080px){
            font-size: 80%;
        }
        @media(max-width: 610px){
            font-size: 60%;
        }
    }
    
    body{
        font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background-color: #30343e;
    }
`

export default GlobalStyle