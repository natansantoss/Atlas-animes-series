import styled, {  keyframes  } from 'styled-components';

const fade = keyframes `
    from {
        opacity: 1;
        transform: scale(1)
    }to {
        opacity: 0.18;
        transform: scale(1.1)
    }
`
const move = keyframes `
    from {
        transform: translateY(0%)
    }to {
        transform: translateY(-100%)
    }
`

export const PageStyled = styled.div`
    padding: 100px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SearchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button:hover{
        transition: background 200ms;
        background: #1997c6;
    }
    @media(max-width: 657px){
        flex-direction: column;
    }
`
export const InputSearchStyled = styled.input`
    width: 100%;
    background: #1e1f25;
    border: #1997c6 2px solid;
    color: #fff;
    text-shadow: #000 0 0 7px;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    @media(max-width: 657px){
        margin-bottom: 15px;
        height: 40px;
    }
`
export const ButtonSearchStyled = styled.button`
    color: #fff;
    text-shadow: #000 0 0 7px;
    font-size: 1.0rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    background: #1e1f25;
    border: #1997c6 2px solid;
    border-radius: 5px;
    padding: 6px 15px;
    margin: 0px 15px;
`
export const InfoSearchStyled = styled.h2`
    margin-top: 20px;
    color: #fff;
    text-shadow: #000 0 0 7px;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;
`



export const ContentStyled = styled.div`
    width: 100%;
    margin-top: 30px;
`
export const ContentInfoStyled = styled.div``
export const ListStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: auto;
    grid-gap: 45px;
    justify-items: center;
    align-self: center;
    margin: 50px;
    li{
        list-style: none;
    }
    
    li img{
        width: 180px;
        height: 250px;
        border-radius: 5px;
    }
    li img:hover{
        cursor: pointer;
        animation: ${fade} 0.4s forwards;
    }
    li div:hover + a{
        animation-fill-mode: backwards;
        animation: ${move} 0.3s forwards;
        display: flex;
    }
`
export const NameStyled = styled.a`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: #fff 0 0 7px;
    text-align: left;
    text-decoration: none;
    width: 200px;
`