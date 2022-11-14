import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import pokeball from "../pokeball.png";

function NavBar() {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Link to="">
          <Navbar.Brand>
            <img
              src={pokeball}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            Pokédex
          </Navbar.Brand>
        </Link>
        <Nav className="mx-right">
          <Nav.Link style={{ opacity: 0.7 }}>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
