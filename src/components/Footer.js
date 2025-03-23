import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logos.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="left-section">
            <img src={logo} alt="Logo" className="footer-logo" style={{ width: '120px', filter: 'brightness(0) invert(1)' }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end right-section">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohammad-fahrezi-abaa53242/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/moh.fahrezi.142"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/moh.fahrezi"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025 @ Mohammad Fahrezi. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
