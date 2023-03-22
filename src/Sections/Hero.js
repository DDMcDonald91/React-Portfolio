import { Container } from 'react-bootstrap';
import HeroText from '../Components/HeroText.js';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: .1 }}
    viewport={{once: true}}
    >
    <Container fluid id='hero-container'>
        <Container style={{paddingTop: '10rem'}}>
            <HeroText />
        </Container>
    </Container>
    </motion.div>
  )
}
