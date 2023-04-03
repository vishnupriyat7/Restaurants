import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState([]);

  const { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((data) => data.json())
        .then((result) => setRestaurant(result.restaurants));
    };
    fetchData();
  }, []);
  //   console.log(restaurant);

  // eslint-disable-next-line eqeqeq
  const findRestaurant = restaurant.find((item) => item.id == id);
    // console.log(findRestaurant);

  return (
    <>
      {findRestaurant && (
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
          <Col md={12}  className="d-flex align-items-center justify-content-center">
                <h1>{`${findRestaurant.name}`}</h1>
            </Col>
          </Row>
            <Col md={12}>
              <Image
                src={`${findRestaurant.photograph}`}
                alt={`${findRestaurant.name}`}
                fluid
                variant="top"
                style={{ height: "35rem", width:"35rem" }}
              />
            </Col>
            <Col md={12}>
                <h3>Neighbourhood: {`${findRestaurant.name}`}</h3>
                <h4>Address: {`${findRestaurant.address}`}</h4>
                <h4>Cuisine Type: {`${findRestaurant.cuisine_type}`}</h4>
                <h4>Operating Hours: {`${findRestaurant.operating_hours[0]}`}</h4>
            </Col>
            
           
        </Container>
      )}
    </>
  );
}

export default RestaurantDetails;
