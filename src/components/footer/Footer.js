import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className="bg-primary">
    <Container fluid>
      <Navbar>
            <Navbar.Brand className="ms-5">Daily Bible Journal</Navbar.Brand>
            <Nav.Link className="ms-3" href="/contactus">Contact Us</Nav.Link>
            <Nav.Link className="ms-3" href="/faqs">FAQ's</Nav.Link>
        </Navbar>
    </Container>

    </Navbar>
  )
}

export default Footer