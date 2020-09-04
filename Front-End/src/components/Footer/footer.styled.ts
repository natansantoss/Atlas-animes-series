import styled from 'styled-components'


export const FooterStyled = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: #252830;
    opacity: 0.8;
    position: fixed;
    bottom: 0;
    left: 0;
`
export const ContentFooterStyled = styled.div`
    width: 100%;
    max-width: 1050px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    a:hover{
        opacity: 0.7;
        text-decoration: underline;
    }
`
export const AuthorStyled = styled.a`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: #000 0 0 7px;
    text-align: left;
    text-decoration: none;
`