import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import logo from '../Images/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navigation() {
  return (
    <>
      <Navbar className="pink-nav">
      <Container fluid>
      <Navbar.Brand as={Link} to="/"> <h1 className = "logo-text retro-text">Juleps</h1></Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link as={Link} to="/saved-cocktails" className = "nav-link" >Saved Cocktails</Nav.Link>
                <Nav.Link as={Link} to="/new-cocktail" className = "nav-link">Create a Cocktail</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
</>
  )
}
