import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation() {
  return (
    <Container fluid id='navigation-container'>
          <Navbar bg="black" variant="dark" expand="md">
            <Container>
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#hero-container">Home</Nav.Link>
            <Nav.Link href="#about-container">About</Nav.Link>
            <Nav.Link href="#skills-container">Skills</Nav.Link>
            <Nav.Link href="#projects-container">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  )
}
