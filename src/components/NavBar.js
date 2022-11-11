import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css"

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
          <Nav className="mx-right">
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
