import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Restaurants</Navbar.Brand>
          <Nav className="xs-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header