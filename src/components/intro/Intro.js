import React, { Component } from "react";
import "./intro.css";
import { Col } from "react-bootstrap";
import flech from "./flech.png";
import scratch from "./scratch.png";
import dw from "./dw.jpeg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salut: "Salut",
    };
  }

  componentDidMount() {
    this.updateSalutText();
    window.addEventListener("resize", this.updateSalutText);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSalutText);
  }

  updateSalutText = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 770) {
      this.setState({ salut: "Abdeladim ElOTHMANI" });
    } else {
      this.setState({ salut: "Salut," });
    }
  };

  render() {
    return (
      <>
        <section id="intro">
          <div className="d-flex align-items-center justify-content-center m-auto">
            <div className="row ">
              <Col className="col-sm-10 col-lg-3 m-auto">
                <div className="introContent">
                  <span className="salut">{this.state.salut}</span>
                  <br />
                  <div className="hh">
                    <span className="introtext">Je suis</span>
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
              <Col className="col-sm-10 col-lg-3">
                <div className="flechScratchRow d-flex flex-column justify-content-center m-auto align-items-center">
                  <img src={flech} alt="Curved Arrow" className="mt-5 pt-4 curvedArrow" />
                  <img src={scratch} alt="Scratch" className="scratch"/>
                </div>
              </Col>
              <Col className="imageBorderUnder d-flex align-items-center justify-content-center m-auto col-sm-10 col-lg-3 ">
                <img src={dw} alt="Abdeladim ELOTHMANI" className="imageAbdo" />
                <div className="socialMedia mt-5 pt-5">
                  <a
                    href="https://www.instagram.com/liledoptique1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="instagramIcon  ms-5" />
                  </a>
                  <a
                    href="https://web.facebook.com/ileoptique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="facebookIcon  ms-5" />
                  </a>
                  <a
                    href="https://wa.me/2120682165518"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="WhatsappIcon  ms-5" />
                  </a>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Intro;
