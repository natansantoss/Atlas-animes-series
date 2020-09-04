import React, {  useState  } from 'react'
import {  Link  } from 'react-router-dom';

import api from '../../services/api';

import {
    BackgroundStyled,
    MaskBlackStyled,
    Container,

    RegisterStyled,
    ImageDetailStyled,
    TextDetaildStyled,
    InfoStyled,

    DescriptionStyled,
    TitleRegisterStyled,
    FormStyle,
    LabelStyled,
    ButtonStyled,
    LoginStyled,
    InputStyled,
} from './authenticate.styled'

interface IUserValues {
    value: string
}

const Auth = () => {
    const[email, setEmail] = useState<IUserValues>()
    const[password, setPassword] = useState<IUserValues>()

    function getEmail(event: React.ChangeEvent<HTMLInputElement>) {
        var valueEmail: any = event.target.value
        setEmail(valueEmail)
    }
    function getPassword(event: React.ChangeEvent<HTMLInputElement>) {
        var valuePassword: any = event.target.value
        setPassword(valuePassword)
    }

    async function submit() {

        const res = await api.post('/auth', {
            email,
            password
        })

        const {  token  } = res.data
        const {  id  } = res.data.user

        localStorage.setItem('id', id)
        localStorage.setItem('authorization', token)        
    }

    return (
        <>
            <BackgroundStyled>
                <Container>
                    <RegisterStyled>
                        <ImageDetailStyled>
                            <MaskBlackStyled>
                                <InfoStyled>Bem-Vindo(a) Novamente.</InfoStyled>
                                <DescriptionStyled>
                                    ATLAS, um site para que você Mantenha seus Animes e Séries favoritos organizados e catalogados para consultar quando quiser...
                                </DescriptionStyled>
                            </MaskBlackStyled>
                        </ImageDetailStyled>
                        <TextDetaildStyled>
                            <TitleRegisterStyled>Login</TitleRegisterStyled>

                            <FormStyle >
                                <LabelStyled>E-Mail</LabelStyled>
                                <InputStyled type="email" onChange={getEmail}/>
                                <LabelStyled>Senha</LabelStyled>
                                <InputStyled type="password" onChange={getPassword}/>

                                <ButtonStyled>
                                    <LoginStyled as={Link} to="/register">Ainda não possuo uma conta</LoginStyled>
                                    <LoginStyled as={Link} to="/home" onClick={submit}>Login</LoginStyled>
                                </ButtonStyled>

                            </FormStyle>
                        </TextDetaildStyled>
                    </RegisterStyled>
                </Container>
            </BackgroundStyled>
        </>
    )
}

export default Auth