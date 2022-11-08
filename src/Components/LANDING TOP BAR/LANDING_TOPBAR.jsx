import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import "./LANDING_TOPBAR.scss";

function LANDING_TOPBAR() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <img
          width="75px"
          height="75px"
          src={logo}
          alt="logo"
          className="me-5"
        />
        <Navbar.Brand>Diet Hard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Instant Diet</Nav.Link>
            <div className="topbtn">
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <BUTTON type="button" buttonType={"contrast"}>
                  Login
                </BUTTON>
              </Link>

              <Link to="/sign-up" style={{ textDecoration: "none" }}>
                <BUTTON type="button" buttonType={"contrast"}>
                  sign up
                </BUTTON>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LANDING_TOPBAR;
