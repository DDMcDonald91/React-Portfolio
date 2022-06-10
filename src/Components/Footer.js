import { Container, Nav } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <Container id='footer-container' fluid>
        <Nav id='footer'activeKey="/home">
    <Nav.Item>
      <Nav.Link href='https://github.com/DDMcDonald91' target='_blank' eventKey="link-1"><AiFillGithub className='footer-icons' /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='https://www.linkedin.com/in/dominik-mcdonald-a70ab2146' target='_blank' eventKey="link-2"><AiFillLinkedin className='footer-icons' /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='https://twitter.com/dmcdonald1991' target='_blank' eventKey="link-3"><AiFillTwitterCircle className='footer-icons' /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='https://www.instagram.com/nikolas0/?hl=en' target='_blank' eventKey="link-3"><AiFillInstagram className='footer-icons' /></Nav.Link>
    </Nav.Item>
  </Nav>
    </Container>
  )
}
