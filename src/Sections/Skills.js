import { Container, Row, Col } from 'react-bootstrap';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { SiCss3, SiJavascript, SiBootstrap, SiReact, SiSolidity, SiShopify, SiWix, SiWordpress, SiCanva } from 'react-icons/si';


export default function Skills() {
  return (
    <Container fluid id='skills-container'>
        <Container id='skills-inner-container'>
        <Container>
            <h3 className='section-title'>My Skills</h3>
        </Container>
        <Container>
        <Row>
            <Col className='skill'><AiFillHtml5 /></Col>
            <Col className='skill'><SiCss3 /></Col>
            <Col className='skill'><SiJavascript /></Col>
            <Col className='skill'><SiBootstrap /></Col>
            <Col className='skill'><SiReact /></Col>
            <Col className='skill'><DiNodejs /></Col>
            <Col className='skill'><SiSolidity /></Col>
        </Row>
        <Container style={{width: '30%', background: 'white', height: '2px', margin: '2rem 0'}}></Container>
        <Row>
          <Col className='skill'><SiShopify /></Col>
          <Col className='skill'><SiWix /></Col>
          <Col className='skill'><SiWordpress /></Col>
          <Col className='skill'><SiCanva/></Col>
        </Row>
        </Container>
        </Container>
    </Container>
  )
}
