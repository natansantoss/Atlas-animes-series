import styled from 'styled-components';

export const BackgroundStyled = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center; 
`
export const RegisterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    width: 70vw;
    height: 80vh;
    border-radius: 20px;
    background: #252830;
    @media(max-width: 720px){
        height: 100%;
        flex-direction: column
    }
`
export const ImageDetailStyled = styled.div `
    background: url("https://i.pinimg.com/originals/80/c1/77/80c177a67e327c07638b5aa11c8e0895.jpg") no-repeat;
    background-position: top;
    width: 30vw;
    height: 100%;
    @media(max-width: 720px){
        width: 100%;
    }
`
export const MaskBlackStyled = styled.div `
    width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    @media(max-width: 720px){
        text-align: center;
        width: 100%;
    }
`
export const InfoStyled = styled.h2`
    color: #fff;
    font-size: 3.0rem;
    font-weight: 900;
    text-shadow: #fff 0 0 7px;
    margin-bottom: 50px;
`
export const DescriptionStyled = styled.p`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    text-shadow: #000 0 0 7px;
    
`
export const TextDetaildStyled = styled.div `
    width: 70vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 25px;
`
export const TitleRegisterStyled = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: #fff 0 0 7px;
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
`
export const FormStyle = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    text-align: left;
    a:hover{
        transition: background 200ms;
        background: #1997c6;
    }
`
export const LabelStyled = styled.label`
    color: #fff;
    font-size: 1.0rem;
    font-weight: 400;
    text-shadow: #000 0 0 7px;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 5px;
`
export const ButtonStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`
export const LoginStyled = styled.a`
    color: #fff;
    text-shadow: #fff 0 0 7px;
    font-size: 1.0rem;
    font-weight: 500;
    padding: 20px;
    cursor: pointer;
`

export const InputStyled = styled.input`
    width: 100%;
    background: #1e1f25;
    border: #1997c6 1px solid;
    color: #fff;
    text-shadow: #000 0 0 7px;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
`