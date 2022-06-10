import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.js'
import Hero from './Sections/Hero.js';
import About from './Sections/About.js';
import Skills from './Sections/Skills.js';
import Projects from './Sections/Projects.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <>
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </>
  );
}

export default App;
