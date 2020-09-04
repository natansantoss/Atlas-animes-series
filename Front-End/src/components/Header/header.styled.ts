import styled from 'styled-components'

export const HeaderStyled = styled.header`
    position: fixed; 
    width: 100%;
    height: 50px;
    background: #252830;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoutButtonStyled = styled.a`
    color: #fff;
    text-shadow: #fff 0 0 7px;
    font-size: 1.0rem;
    font-weight: 500;
    padding: 15px;
    cursor: pointer;
`
export const Container = styled.div`
    width: 100%;
    max-width: 1050px;
    margin: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LogoStyled = styled.div`
`
export const NameLogoStyled = styled.a`
    color: #fff;
    background: #1997c6;
    text-shadow: #000 0 0 7px;
    font-size: 1.8rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 6px 15px;
    cursor: pointer;
`
export const LogoutStyled = styled.div`
    a:hover{
        transition: background 200ms;
        background: #1997c6;
        text-decoration: underline
    }
`
export const NavStyled = styled(LogoutStyled)`
`