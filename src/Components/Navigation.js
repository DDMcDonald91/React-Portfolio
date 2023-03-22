import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import navLogo from './Images/navLogo.jpeg'

export default function Navigation() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{once: true}}
    >
    <Container fluid id='navigation-container'>
          <Navbar bg="black" variant="dark" expand="md">
            <Container>
            <Navbar.Brand href="#home">
              <Image src={navLogo} style={{height: '75px', width: '100px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{marginLeft: 'auto'}}>
            <Nav.Link href="#hero-container">Home</Nav.Link>
            <Nav.Link href="#about-container">About</Nav.Link>
            <Nav.Link href="#skills-container">Skills</Nav.Link>
            <Nav.Link href="#projects-container">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
    </motion.div>
  )
}
