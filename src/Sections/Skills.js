import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from '../Components/SkillCard';
import { SkillsData } from '../Components/SkillsData';
import { motion } from 'framer-motion';


export default function Skills() {
  return (
    <Container fluid id='skills-container'>
        <Container id='skills-inner-container'>
        <Container className='mb-5'>
            <h3 className='section-title'>My Skills</h3>
        </Container>
        <Container>
          <Row xs={2} md={4}>
            {SkillsData.map((skill) => {
              return(
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: .1 }}
                >
                <Col>
                  <SkillCard title={skill.name} icon={skill.symbol} classification={skill.classification} />
                </Col>
                </motion.div>
              )
            })}
          </Row>
        </Container>
        </Container>
    </Container>
  )
}
