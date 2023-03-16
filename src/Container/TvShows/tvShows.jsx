import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMovies from "../../Components/CardMovies/cardMovies";

const TvShows = () => {
  const [content, setContent] = useState([]);
  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=31efb342feaceceeb22902f6a79f0e0d`
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
              <h1 className="txtCenter">Top Trending TV Series</h1>
              <h3 className="txtCenter"> For You</h3>
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="col-2">
            
          </Col>
          <Col className="col-10">
            <Row>
              {content && content.length > 0
                ? content.map((item, index) => {
                    return (
                      <CardMovies
                        key={index}
                        data={item}
                        mediaType="tv"
                      />
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

export default TvShows;
