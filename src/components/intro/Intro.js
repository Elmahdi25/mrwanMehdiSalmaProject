import React, { Component } from "react";
import "./intro.css";
import { Container, Row, Col } from "react-bootstrap";
import curvedArrow from "./curvedArrow.png";
import scratch from "./scratch.png";
import dw from "./dw.jpeg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
class Intro extends Component {
  render() {
    return (
      <>
        <section id="intro">
          <Container fluid>
            <Row>
              <Col xs={3}>
                <div className="introContent">
                  <span className="salut">Salut,</span>
                  <br />
                  <div className="hh">
                    <span className="introtext ">Je suis</span>
                    <span className="opticienPassionne">
                      {" "}
                      un opticien passionné,
                    </span>
                    <span className="introText">
                      Je magnifie votre vision et votre style.{" "}
                    </span>
                    <span className="introText">
                      Explorez mon portfolio pour découvrir la clarté et
                      l'élégance que je peux vous offrir.
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className="flechScratchRow">
                  <img src={curvedArrow} alt="Curved Arrow" />
                  <img src={scratch} alt="Scratch" />
                </div>
              </Col>
              <Col xs={3} className="imageBorderUnder">
                <img src={dw} alt="Abdeladim ELOTHMANI" className="imageAbdo" />
              </Col>
              <Col xs={3}>
                <div className="socialMedia">
                  <a
                    href="https://www.instagram.com/liledoptique1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="instagramIcon" />
                  </a>
                  <a
                    href="https://web.facebook.com/ileoptique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="facebookIcon" />
                  </a>
                  <a
                    href="https://wa.me/2120682165518"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="WhatsappIcon" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
export default Intro;
