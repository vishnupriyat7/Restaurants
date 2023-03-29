import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

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
    <Row xs={1} md={4} className="g-4 row-cols-1">
      {restaurants &&
        restaurants.map(restaurant =>
          <Col
            className="d-flex align-items-center justify-content-center h-25"
           
            key={restaurant.id}
          >
            <Card style={{ width: "20rem" }}>
              <Card.Header>
                {restaurant.cuisine_type}
              </Card.Header>
              <Card.Img variant="top" style={{height: "20rem"}} src={restaurant.photograph} />
              <Card.Body>
                <Card.Title>
                  {restaurant.name}
                </Card.Title>
                <Card.Text>
                  {restaurant.address}
                </Card.Text>
                <Card.Text>
                  {restaurant.neighborhood}
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
    </Row>
  );
}

export default Home;
