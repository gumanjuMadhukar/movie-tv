import React, { useState, useEffect } from "react";
import CardMovies from "../../Components/CardMovies/cardMovies";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import SearchBox from "../../Components/Search/searchBox";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [searchValue, setSearchValue] = useState('trending');
  const GetDataTrending = async (searchValue) => {
    const url1 = `https://api.themoviedb.org/3/search/movie?api_key=31efb342feaceceeb22902f6a79f0e0d&query=${searchValue}`;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=31efb342feaceceeb22902f6a79f0e0d`;
    const { data } = await axios.get(url1);
    setContent(data.results);
    console.log("data", data);
  };

  useEffect(() => {
    GetDataTrending(searchValue);
    //eslint-disable-next-line
  }, [searchValue]);
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending Movies</h1>
              <h3 className="txtCenter"> For You</h3>
              <SearchBox
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="col-2"></Col>
          <Col className="col-10">
            <Row>
              {content && content.length > 0
                ? content.map((item, index) => {
                    return (
                      <CardMovies key={index} data={item} mediaType="movie" />
                    );
                  })
                : "Loading ...."}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
