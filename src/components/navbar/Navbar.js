import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import "./navbar.css";
class NavbarPart extends Component {
    render() {
      return (
        <div className="bodyNavBar">
          <Navbar className="bg-body-#DDDDDD" expand="lg" xs={12} sm={6} md={3} >
            <Container fluid>
              <Navbar.Brand href="#home" className="circle-and-name col">
                <div className="a">A</div>
                <div className="Abdeladim-ElOTHMANI">Abdeladim ElOTHMANI</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" navbarLinks col-8">
                  <Nav.Link href="#Acceuile" className='mr-3'>Acceuile</Nav.Link>
                  <Nav.Link href="#Sur-moi" className='mr-3'>Sur moi</Nav.Link>
                  <Nav.Link href="#Projets">Projets</Nav.Link>
                </Nav>
                <Button variant="dark" className="contactez rounded-0">Contactez-nous</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
  export default NavbarPart;