import React, {  useState  } from 'react';
import {  Link  } from 'react-router-dom';
import axios from 'axios';

import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    PageStyled,
    Container,
    SearchStyled,
    InputSearchStyled,
    ButtonSearchStyled,
    InfoSearchStyled,

    ContentStyled,
    ContentInfoStyled,
    ListStyled,
    NameStyled,
} from './searchContent.styled'

interface IValueInput {
    value: string;
}
interface IResults {
    mal_id: number;
    title: string;
    synopsis: string;
    image_url: string;
}

const ListAnimes = () => {

    const id = localStorage.getItem('id')

    const [values, setvalues] = useState<IValueInput>()
    const [results, setResults] = useState<[IResults]>()

    function getValue(event: React.ChangeEvent<HTMLInputElement>): void {
        let value: any = event.target.value
        setvalues(value)
    }
    async function getData() {
        const response = await axios(`https://api.jikan.moe/v3/search/anime?q=${values}`)
        setResults(response.data.results)
    }

    return(
        <>
            <Header />
                <PageStyled>
                    <Container>
                        <SearchStyled>
                            <InputSearchStyled placeholder="Search Anime" onChange={getValue}/>
                            <ButtonSearchStyled onClick={getData}>Search</ButtonSearchStyled>
                        </SearchStyled>
                        <InfoSearchStyled>Click para adicionar aos favoritos</InfoSearchStyled>
                        <ContentStyled>
                        <ListStyled>
                            {results?.map(result => {
                                return <li >
                                            <ContentInfoStyled onClick={() => {

                                                api.post("/createanime", {
                                                    mal_id: result.mal_id,
                                                    title: result.title,
                                                    synopsis: result.synopsis,
                                                    image: result.image_url,
                                                    user_id: id
                                                })
                                            }}>
                                                <img src={result.image_url} alt={result.title} />
                                            </ContentInfoStyled>
                                            <NameStyled as={Link} to="/">{result.title}</NameStyled>
                                        </li>
                            })}
                        </ListStyled>
                        </ContentStyled>
                    </Container>
                </PageStyled>
            <Footer />
        </>
    )
}

export default ListAnimes;