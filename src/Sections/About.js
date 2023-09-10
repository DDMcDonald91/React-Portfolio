import { Container, Row, Col, Button  } from 'react-bootstrap';
import DisplayCard from '../Components/DisplayCard.js';
import DominikDevResume from '../Documents/DominikDevResume.pdf';
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
                  <Col style={{padding: '20px'}} sm={12} md={7}>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: .1 }}
                        viewport={{ once: true }}
                      >
                      <p className='body-text'>Hello! I'm a React Front End Developer with 3 years of experience building web applications. Some of my recent projects include a custom fullstack site built with React, ChatGPT, and a blogging app built with Google Firebase. I'm particularly skilled at optimizing site performance and building intuitive user interfaces. I'm always eager to learn new technologies and techniques to improve my skills - currently, I'm working on mastering Python. Thanks for taking the time to check out my portfolio!.</p>
                      <br/>
                      <a href={DominikDevResume} target='_blank' rel="noreferrer" download><Button variant="dark">Download Resume</Button></a>
                    </motion.div>
                  </Col>
              </Row>
          </Container>
        </Container>
    </Container>
  )
}
