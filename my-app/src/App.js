import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/Navigation/NavigationBar';
import Contact from './components/Contact/ContactSection';
import Experience from './components/Experiences/ExperienciesSection';
import Education from './components/Educations/EducationsSection';
import Projects from './components/Proyects/ProyectsSection';
import AboutMe from './components/AboutMe/AboutMe';
import './Styles/App.css'


const App = () => {
  return (
    <div className="background-gradient">
      <NavigationBar />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;


