import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  return (
   <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <Navbar.Brand data-bs-target="#navbarColor01" aria-controls="navbarColor01" href="#home">Daily Bible Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">The Bible</Nav.Link>
            <Nav.Link href="#link">Today's Daily Verse</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Notes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Account Info
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header