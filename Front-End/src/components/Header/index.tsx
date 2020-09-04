import React from 'react'
import {  Link  } from 'react-router-dom'

import Button from '../Button'

import {
    HeaderStyled,
    LogoutStyled,
    Container,
    LogoStyled,
    NameLogoStyled,
    LogoutButtonStyled,
    NavStyled,
} from './header.styled'

const Header = () => {
    function logout () {
        localStorage.removeItem('authorization')
        localStorage.removeItem('id')
    }
    
    return(
        <>
            <HeaderStyled>
                <Container>
                    <LogoStyled>
                        <NameLogoStyled as={Link} to="/home">Atlas</NameLogoStyled>
                    </LogoStyled>
                    <NavStyled>
                        <Button href="/home" text="Home" />
                        <Button href="/search-animes" text="Animes"/>
                        <Button href="/search-series" text="Series"/>
                    </NavStyled>
                    <LogoutStyled>
                        <LogoutButtonStyled as={Link} to="/" onClick={logout}>Logout</LogoutButtonStyled>
                    </LogoutStyled>
                </Container>
            </HeaderStyled>
        </>  
    )
}

export default Header