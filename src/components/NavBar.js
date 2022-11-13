import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css"

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Pokédex</Navbar.Brand>
        <Nav className="mx-right">
          <Nav.Link href="#home" style={{ opacity: 0.7 }}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
