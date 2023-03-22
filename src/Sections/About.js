import { Container, Row, Col, Button  } from 'react-bootstrap';
import DisplayCard from '../Components/DisplayCard.js';
import UpdatedResume from '../Documents/UpdatedResume.pdf';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Container fluid id='about-container'>
        <Container id='about-inner-container'>
          <Container style={{paddingLeft: '0px'}} className='mb-5'>
            <h3 className='section-title'>About Me</h3>
          </Container>
          <Container style={{paddingLeft: '0px'}}>
              <Row>
                  <Col style={{paddingLeft: '0px'}} sm={12} md={5}>
                    <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.75, delay: .1 }}
                      viewport={{ once: true }}
                    >
                      <DisplayCard style={{paddingLeft: '0px'}} />
                    </motion.div>
                  </Col>
                  <Col style={{padding: '10px'}} sm={12} md={7}>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: .1 }}
                        viewport={{ once: true }}
                      >
                      <p className='body-text'>Hi, I am a React Front End Developer with several years of expierence. 
                      I am passionate all things regarding web design and development.
                      I truly enjoy learning new technologies and techniques to further better my skills.</p>
                      <br/>
                      <a href={UpdatedResume} target='_blank' rel="noreferrer" download><Button variant="dark">Download Resume</Button></a>
                    </motion.div>
                  </Col>
              </Row>
          </Container>
        </Container>
    </Container>
  )
}
