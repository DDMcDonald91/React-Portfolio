import { Container, Card } from 'react-bootstrap';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import idPic from './Images/idPic.jpg';

export default function DisplayCard(props) {
  return (
    <Container>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={idPic} />
            <Card.Body>
            <Card.Title>Dominik McDonald | Front End Developer</Card.Title>
            <Card.Text>
                <a href='https://www.linkedin.com/in/dominik-mcdonald-a70ab2146' target='_blank' rel="noreferrer"><AiFillLinkedin className='contact-icons' /></a>
                <a href='https://github.com/DDMcDonald91' target='_blank' rel="noreferrer"><AiFillGithub className='contact-icons' /></a>
                <a href='https://www.upwork.com/freelancers/~01ebead8c2173e55c1' target='_blank' rel="noreferrer"><SiUpwork className='contact-icons' /></a>
            </Card.Text>
            </Card.Body>
        </Card>
  </Container>
  )
}
