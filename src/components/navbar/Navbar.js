import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// // import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
class NavbarPart extends Component {
  render() {
    return (
      //         </Nav>
      // <div className="bodyNavBar d-flex justify-content-center">
      //   <Navbar className="bg-body-#DDDDDD " expand="lg"  >
      //     <div className="d-flex justify-content-between m-auto">
      //       <Navbar.Brand href="#home" className="circle-and-name col">
      //         <div className="a">A</div>
      //         <div className="Abdeladim-ElOTHMANI">Abdeladim ElOTHMANI</div>
      //       </Navbar.Brand>
      //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //       <Navbar.Collapse id="basic-navbar-nav">
      //         <Nav className=" navbarLinks col-8">
      //           <Nav.Link href="#Acceuile" className='mr-3'>Acceuile</Nav.Link>
      //           <Nav.Link href="#Sur-moi" className='mr-3'>Sur moi</Nav.Link>
      //           <Nav.Link href="#Projets">Projets</Nav.Link>
      //         <Button variant="dark" className="contactez rounded-0">Contactez-nous</Button>
      //       </Navbar.Collapse>
      //     </div>
      //   </Navbar>
      // </div>
      <>
        <nav className="navbar navbar-expand-md bg-body-tertiary ">
          <div className="contenu-nav justify-content-between container">
            <div>
              <a className="navbar-brand d-flex align-items-center" href="#tes">
                <div className="a">A</div>
                <div className="Abdeladim-ElOTHMANI">Abdeladim ElOTHMANI</div>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav  ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Acceuile"
                  >
                    Acceuile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Sur moi">
                    Sur moi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#Projets">
                    Projets
                  </a>
                </li>
                <li>
                  <Button variant="dark" className="contactez rounded-0 mt-2">
                    Contactez-nous
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default NavbarPart;
