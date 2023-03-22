import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';

export default function HeroText() {
  return (
    <Container className='section-title'>
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString('Hi.')
        .pauseFor(2000)
        .deleteAll()
        .typeString('My Name is Dominik McDonald')
        .pauseFor(2000)
        .deleteAll()
        .typeString('I Am A Full Stack Dev!')
        .start();
        }}
    />
    </Container>
  )
}
