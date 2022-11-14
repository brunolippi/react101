import { Badge, Container, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="about-container">
      <h2 className="about">About</h2>
      <div className="about-subtitle">
        <Badge bg="secondary">#DevWeek2022</Badge>
      </div>
    </Container>
  );
}

export default About;
