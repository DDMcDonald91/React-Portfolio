import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';

export default function HeroText() {
  return (
    <Container className='section-title'>
      <Typewriter
        onInit={(typewriter) => {
        typewriter
        .pauseFor(500)
        .typeString('Hi.<br />')
        .pauseFor(750)
        .typeString('My Name is Dominik McDonald.<br />')
        .pauseFor(750)
        .typeString('I Am A Frontend Developer!')
        .start();
        }}
    />
    </Container>
  )
}
