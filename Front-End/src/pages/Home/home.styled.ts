import styled, { keyframes } from 'styled-components';

const fade = keyframes `
    from {
        transform: scale(1)
    }to {
        transform: scale(1.1)
    }
`

export const ContentStyled = styled.div `
    background: url("https://i.pinimg.com/originals/80/c1/77/80c177a67e327c07638b5aa11c8e0895.jpg");
    background-attachment: fixed;
    height: 620px;
    @media(max-width: 1080px){
        background-size: cover;
        background-position: top;
    }
`
export const MaskStyled = styled.div `
    width: 100%;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: rgba(0, 0, 0, 0.6);
`


export const Container = styled.div `
    width: 100%;
    max-width: 1050px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1080px){
        
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


export const ContentTextStyled = styled.div `
    max-width: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-shadow: #000 0 0 7px;
    margin: 15px;
`
export const TitleStyled = styled.h1 `
    font-size: 4.0rem;
    font-weight: 900;
    text-shadow: #fff 0 0 7px;
    margin-bottom: 5px;
`
export const SinopseStyled = styled.p `
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 3px;
    
`



export const ContentImageStyled = styled.div `
    
    display: flex;
    flex-direction: column;
    a{
        margin-top: 25px;
    }
    
    a:hover{
        transition: background 200ms;
        background: #1997c6;
    }
    
    h2{
        color: #fff;
        font-size: 1.3rem;
        text-shadow: #000 0 0 7px;
        margin-top: 5px;
    }
    @media(max-width: 1080px){
        
        order: -1
    }
`
export const ImageStyled = styled.img`
    width: 270px;
    border-radius: 10px;
    @media(max-width: 1080px){
        
        width: 250px
    }
    
`



export const ListStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ContentListStyled = styled.div `
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    @media(max-width: 755px){
        align-items: center;
    }
     
`

export const ListTypeStyled = styled.h2 `
    margin: 18px 0px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 800;
    text-shadow: #000 0 0 7px;
    text-transform: uppercase;
`
export const AllListStyled = styled.div `
    width: 100%;
   
`
export const ListAllStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: auto;
    grid-gap: 40px;
    justify-items: center;
    align-self: center;
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
        color:red
    }
    @media(max-width: 1200px){
        margin: 0px 50px;
    }
`
export const ComandStyled = styled.div `
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:hover{
        opacity: 0.7;
        transition: opacity 500ms;
        cursor: pointer;
    }
`
export const NameStyled = styled.h3 `
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: #fff 0 0 7px;
    text-align: left;
    
    width: 150px;
    
`
export const ButtonDeleteStyled = styled.button `
    color: #fff;
    background: #1997c6;
    text-shadow: #000 0 0 7px;
    font-size: 1.0rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    border: #1997c6 2px solid;
    border-radius: 5px;
    padding: 10px 10px;
    margin: 0px 5px;
    height: 30px;
    width: 30px;
`

export const LoadingContent = styled.h1 `
    color: #fff;
    background: #1997c6;
    text-shadow: #000 0 0 7px;
    font-size: 1.0rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    border: #1997c6 2px solid;
    border-radius: 5px;
    padding: 10px 10px;
    margin: 0px 5px;
    height: 30px;
    width: 30px;
`