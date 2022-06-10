import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';

export default function HeroText() {
  return (
    <Container className='section-title'>
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString('hi.')
        .pauseFor(2000)
        .deleteAll()
        .typeString('my name is Dominik McDonald')
        .pauseFor(2000)
        .deleteAll()
        .typeString('i am a frontend dev!')
        .start();
        }}
    />
    </Container>
  )
}
