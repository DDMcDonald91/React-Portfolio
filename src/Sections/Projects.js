import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../Components/ProjectCard';
import greystone from '../Components/Images/greystone.png';
import poke from '../Components/Images/poke.png';
import timeless from '../Components/Images/timeless.png';


export default function Projects() {
  return (
    <Container fluid id='projects-container'>
        <Container id='projects-inner-container'>
        <Container>
           <h3 className='section-title'>My Projects</h3>
        </Container>
        <Container>
            <Row>
                <Col className='project-card' sm={12} md={6} lg={4}><ProjectCard image={poke} title='Poke App' text='A Pokemon project created using React and a Pokemon API. Click the link to learn more.' skill1='React' skill2='API/Axios' skill3='Bootstrap' demo='https://ddmcdonald91.github.io/Poke-App/' github='https://github.com/DDMcDonald91/Poke-App' /></Col>
                <Col className='project-card' sm={12} md={6} lg={4}><ProjectCard image={greystone} title='Greystone Winery' text='A winery project created using React and Bootstrap. Click the link to learn more.' skill1='React' skill2='Bootstrap' skill3='Canva' demo='https://ddmcdonald91.github.io/Greystone-Winery-Page/' github='https://github.com/DDMcDonald91/Greystone-Winery-Page' /></Col>
                <Col className='project-card' sm={12} md={6} lg={4}><ProjectCard image={timeless} title='Timeless NFT Collection' text='A NFT collection project created using React & Solidity. Click the link to learn more.' skill1='React' skill2='Solidity' skill3='Bootstrap' demo='https://ddmcdonald91.github.io/Timeless-Impressions-NFT/' github='https://github.com/DDMcDonald91/Timeless-Impressions-NFT' /></Col>
            </Row>
        </Container>
        </Container>
    </Container>
  )
}
