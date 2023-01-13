import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"


const Header = () => {
  return (
   <Navbar className="all_navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <Navbar.Brand data-bs-target="#navbarColor01" aria-controls="navbarColor01" href="/">Daily Bible Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bible">The Bible</Nav.Link>
            <Nav.Link href="/dailyverse">Today's Daily Verse</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/notes">
                Notes
              </NavDropdown.Item>
              <NavDropdown.Item href="/accountinfo">
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