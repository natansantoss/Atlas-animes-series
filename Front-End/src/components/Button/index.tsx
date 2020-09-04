import React from 'react';
import {  Link  } from 'react-router-dom'

import {
    ButtonNavStyled,
} from './button.styled'

interface IButtonProps {
    text: string;
    href: string;
}

const Button = (button: IButtonProps) => {
    return (
        <>
            <ButtonNavStyled as={Link} to={button.href}>{button.text}</ButtonNavStyled>
        </>     
    )
}

export default Button;
