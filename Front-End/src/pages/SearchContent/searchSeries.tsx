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
    id: number;
    name: string;
    image_thumbnail_path: string;
}

const ListSeries = () => {

    const id = localStorage.getItem('id')

    const [values, setvalues] = useState<IValueInput>()
    const [results, setResults] = useState<[IResults]>()

    function getValue(event: React.ChangeEvent<HTMLInputElement>): void {
        let value: any = event.target.value
        setvalues(value)
    }
    async function getData() {
        const response = await axios(`https://www.episodate.com/api/search?q=${values}`)
        setResults(response.data.tv_shows)
    }

    return(
        <>
            <Header />
                <PageStyled>
                    <Container>
                        <SearchStyled>
                            <InputSearchStyled placeholder="Search Serie" onChange={getValue}/>
                            <ButtonSearchStyled onClick={getData}>Search</ButtonSearchStyled>
                        </SearchStyled>
                        <InfoSearchStyled>Click para adicionar aos favoritos</InfoSearchStyled>
                        <ContentStyled>
                        <ListStyled>
                            {results?.map(result => {
                                return <li key={result.id}>
                                            <ContentInfoStyled onClick={() => {
                                                
                                                api.post("/createserie", {
                                                    name: result.name,
                                                    image_thumbnail_path: result.image_thumbnail_path,
                                                    id: result.id,
                                                    user_id: id
                                                })

                                            }}>
                                                <img src={result.image_thumbnail_path} alt={result.name} />
                                            </ContentInfoStyled>
                                            <NameStyled as={Link} to="/">{result.name}</NameStyled>
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

export default ListSeries;