import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="navbarFooter all_navbar navbar navbar-expand-lg navbar-dark bg-primary">
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