import React, {  useState, useEffect  } from 'react';

import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    
    ContentStyled,
    ContentTextStyled,
    ContentImageStyled,
    Container,
    ImageStyled,
    TitleStyled,
    SinopseStyled,
    MaskStyled,

    ListStyled,
    ListTypeStyled,
    AllListStyled,
    ComandStyled,
    NameStyled,
    ButtonDeleteStyled,
    ContentListStyled,
    ListAllStyled,

    LoadingContent
} from './home.styled'

interface IAnimesResults {
    id: number
    mal_id: number;
    title: string;
    image: string;
    user_id: number
}
interface ISeriesResults {
    id: number
    name: string;
    image_thumbnail_path: string;
    user_id: number
}
interface IValueSelect {
    title: string;
    synopsis: string;
    image: string;
}

const Home = () => {
    const id = localStorage.getItem('id')
    const authorization = localStorage.getItem('authorization')

    const [animesResults, setAnimesResults] = useState<[IAnimesResults]>()
    const [seriesResults, setSeriesResults] = useState<[ISeriesResults]>()
    const [value, setValue] = useState<IValueSelect>()

    useEffect(() => {        
        async function getData() {
            const responseAnimes = await api.get(`/listanimes`, {  headers: {
                authorization,
                id
            }  })
            setAnimesResults(responseAnimes.data)

            const responseSeries = await api.get(`/listseries`, {  headers: {
                authorization,
                id
            }  })
            setSeriesResults(responseSeries.data)
        }
        getData()
    }, [])

    return (
        <>
            <Header />
            
            <ContentStyled>
                <MaskStyled>

                    <Container>

                        <ContentTextStyled>
                            <TitleStyled>{value?.title}</TitleStyled>
                            <SinopseStyled>{value?.synopsis}</SinopseStyled>
                        </ContentTextStyled>
                        <ContentImageStyled>
                            <ImageStyled src={value?.image} alt={value?.title} />
                        </ContentImageStyled>

                    </Container>

                </MaskStyled>
            </ContentStyled>

            <ListStyled>
                <ContentListStyled>

                    <ListTypeStyled>Animes Favoritos</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled> 
                            {animesResults?.map(result => {    
                                return(
                                    <li key={result.mal_id}>

                                        <img 
                                            src={result.image} 
                                            alt={result.title}

                                            onClick={async () => {
                                                var response = await api.get("/anime", {
                                                    headers: {
                                                        mal_id: result.mal_id,
                                                    }
                                                })

                                                setValue(response.data)
                                            }}
                                        />
                                        <ComandStyled>
                                            <NameStyled>{result.title}</NameStyled>
                                            <ButtonDeleteStyled

                                                onClick={() => {
                                                    
                                                    api.delete("/deleteanime", {
                                                        headers: {
                                                            id: result.id,
                                                            authorization
                                                        }
                                                    })
                                                }}
                                            >
                                                X
                                            </ButtonDeleteStyled>
                                        </ComandStyled>
                                        
                                    </li>
                                )
                            })}

                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>

                <ContentListStyled>

                    <ListTypeStyled>Séries Favoritas</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled>
                            {seriesResults?.map(result => {
                                    return(
                                        <li key={result.id} >

                                            <img 
                                                src={result.image_thumbnail_path} 
                                                alt={result.name} 

                                                onClick={async () => {
                                                    var response = await api.get("/serie", {
                                                        headers: {
                                                            id: result.id,
                                                        }
                                                    })
    
                                                    var objSerie = {
                                                        "image": response.data.image_thumbnail_path,
                                                        "title": response.data.name,
                                                        "synopsis": "Not Found"
                                                    }
                                                    setValue(objSerie)
                                                }}
                                            />
                                            <ComandStyled>
                                                <NameStyled>{result.name}</NameStyled>
                                                <ButtonDeleteStyled

                                                    onClick={() => {
                                                        console.log(result.id)
                                                        api.delete("/deleteserie", {
                                                            headers: {
                                                                id: result.id,
                                                                authorization
                                                            }
                                                        })
                                                    }}
                                                >
                                                    X
                                                </ButtonDeleteStyled>
                                            </ComandStyled>
                                        </li>
                                    )
                                })}
                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>
            </ListStyled>

            <Footer />

        </>
    )
}

export default Home