import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };


  return (
   <Navbar className="all_navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <Container fluid>
        <Navbar.Brand href="/">Daily Bible Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bible">The Bible</Nav.Link>
            <Nav.Link href="/dailyverse">Today's Daily Verse</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
          </Nav>
          {/* {this.state.auth === 1 && (

          )} */}
          <Nav>
            <NavDropdown className="me-5" title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/journalentries">
                Journal Entries
              </NavDropdown.Item>
              <NavDropdown.Item href="/accountinfo">
                Account Info
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;