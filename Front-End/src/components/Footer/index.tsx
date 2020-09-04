import React from 'react';

import {
    FooterStyled,
    ContentFooterStyled,
    AuthorStyled,
} from './footer.styled'

const Footer = () => {
    return (
        <>
            <FooterStyled>
                <ContentFooterStyled>
                    <AuthorStyled href="https://github.com/natansantoss" target="_blank">By: Natan.Santos</AuthorStyled>
                </ContentFooterStyled>
            </FooterStyled>
        </>     
    )
}

export default Footer