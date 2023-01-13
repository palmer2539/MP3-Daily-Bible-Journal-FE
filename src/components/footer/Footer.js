import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className="all_navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <Container fluid>
        <Navbar>
              <Navbar.Brand>Daily Bible Journal</Navbar.Brand>
              <Nav.Link className="ms-3" href="/contactus">Contact us</Nav.Link>
              <Nav.Link className="ms-3" href="/faqs">FAQ's</Nav.Link>
          </Navbar>
      </Container>
    </Navbar>
  )
}

export default Footer