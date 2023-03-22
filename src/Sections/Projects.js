import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../Components/ProjectCard';
import { ProjectData } from '../Components/ProjectData';
import { motion } from 'framer-motion';


export default function Projects() {
  return (
    <Container fluid id='projects-container'>
        <Container id='projects-inner-container'>
        <Container className='mb-5'>
           <h3 className='section-title'>My Projects</h3>
        </Container>
        <Container>
          <Row>
            {ProjectData.map((project, index) => {
              return(
                <Col xs={12} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index / 10 }}
                    >
                    <ProjectCard key={index} image={project.image} title={project.title} text={project.text} skills={project.skills} demo={project.demo} githubDisplay={project.githubDisplay} privateDisplay={project.privateDisplay} github={project.github} />
                  </motion.div>
                </Col>
              )
            })}
          </Row>
        </Container>
        </Container>
    </Container>
  )
}
