import { Container } from 'react-bootstrap';
import HeroText from '../Components/HeroText.js';

export default function Hero() {
  return (
    <Container fluid id='hero-container'>
        <Container style={{paddingTop: '10rem'}}>
            <HeroText />
        </Container>
    </Container>
  )
}
