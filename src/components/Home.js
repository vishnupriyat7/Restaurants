import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let restaurants = async () => {
      let resData = await fetch("./restaurants.json");
      let res = await resData.json();
      setRestaurants(res.restaurants);
      // console.log(res.restaurants);
    };
    restaurants();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 row-cols-1">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Col
              className="d-flex align-items-center justify-content-center h-25 bg-image hover-zoom"
              key={restaurant.id}
            >
              <Card style={{ width: "20rem", background: "linear-gradient(to bottom, #ffffff 0%, #ffcc66 100%)" }}>
                <Card.Header style={{fontSize: "1rem", fontWeight: "bold", color: "black"}}>{restaurant.cuisine_type}</Card.Header>
                <Card.Img
                  variant="top"
                  
                  style={{ height: "20rem" }}
                  src={restaurant.photograph}
                />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Text>{restaurant.address}</Card.Text>
                  <Card.Text>{restaurant.neighborhood}</Card.Text>
                  <Button variant="primary">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Home;
