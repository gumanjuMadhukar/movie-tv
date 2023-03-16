import React, { useState, useEffect } from "react";
import CardMovies from "../../Components/CardMovies/cardMovies";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Movies = () => {
  const [content, setContent] = useState([]);
  const GetDataTrending = async () => {
    //    const API_KEY = '31efb342feaceceeb22902f6a79f0e0d'
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=31efb342feaceceeb22902f6a79f0e0d`
    );
    setContent(data.results);
    console.log('data', data)
  };

  useEffect(() => {
    GetDataTrending();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending Movies</h1>
              <h3 className="txtCenter"> For You</h3>
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
