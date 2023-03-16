import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import CardMovies from '../../Components/CardMovies/cardMovies';
import SearchBox from '../../Components/Search/searchBox';



const Home = () => {
    const [content, setContent] = useState([]);
    const[pageNo, setPageNo] = useState(1)

    console.log(process.env.Api_Key)
    const API_KEY = '31efb342feaceceeb22902f6a79f0e0d'
    const[searchValue, setSearchValue] = useState('trending/all/day')
    const GetDataTrending = async (searchValue)=>{
        const url = `https://api.themoviedb.org/3/${searchValue}/500?api_key=31efb342feaceceeb22902f6a79f0e0d&page=${pageNo}`; 
        const url1 =`https://api.themoviedb.org/3/${searchValue}?api_key=31efb342feaceceeb22902f6a79f0e0d`
        const {data} = await axios.get(url1);
        setContent(data.results);
        console.log('data', data)
    } 
    useEffect(()=>{
    GetDataTrending(searchValue);
    },[searchValue])
  return (
    <div className='homePage'>
        <Container>
            <Row>
                <Col className='col-12'>
                  <section>
                        <h1 className="txtCenter">Top Trending</h1>
                        <h3 className="txtCenter">Tv And Movies</h3>
                        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                  </section>
                </Col>
                {
                        content && content.length > 0 ? content.map((item, index)=>{
                            return (
                                <CardMovies key={index} data={item} 
                                mediaType="TV"
                                />
                                )
                        }) : 'Loading ....'
                    }

               

            </Row>
        </Container>
    </div>
  )
}

export default Home;