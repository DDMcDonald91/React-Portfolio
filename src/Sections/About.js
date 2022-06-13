import { Container, Row, Col, Button  } from 'react-bootstrap';
import DisplayCard from '../Components/DisplayCard.js';
import UpdatedResume from '../Documents/UpdatedResume.pdf';

export default function About() {
  return (
    <Container fluid id='about-container'>
        <Container id='about-inner-container'>
        <Container style={{paddingLeft: '0px'}}>
          <h3 className='section-title'>About Me</h3>
        </Container>
        <Container style={{paddingLeft: '0px'}}>
            <Row>
                <Col style={{paddingLeft: '0px'}} sm={12} md={5}>
                <DisplayCard style={{paddingLeft: '0px'}} />
                </Col>
                <Col style={{padding: '10px'}} sm={12} md={7}>
                <p className='body-text'>Hi, I am a React Front End Developer with several years of expierence. 
                I am passionate all things regarding web design and development.
                I truly enjoy learning new technologies and techniques to further better my skills.</p>
                <br/>
                <a href={UpdatedResume} target='_blank' rel="noreferrer" download><Button>Resume</Button></a>
                </Col>
            </Row>
        </Container>
        </Container>
    </Container>
  )
}
