import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import "./TOPBAR.scss";

function TOPBAR() {
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
            <Link style={{ textDecoration: "none" }} to="/home">
              <span className="nav-link">Dashboard</span>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/home/mealplan">
              <span className="nav-link">Meal-Plan</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/home/getrecipes">
              <span className="nav-link">Get Recipes</span>
            </Link>
            <div className="topbtn"></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TOPBAR;
