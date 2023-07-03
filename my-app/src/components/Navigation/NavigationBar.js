import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../Styles/NavigationBar.css';

const NavigationBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link
            className="navbar__link"
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__link"
            activeClass="active"
            to="Experience"
            spy={true}
            smooth={true}
            duration={500}
          >
            Experiencias
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__link"
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__link"
            activeClass="active"
            to="Education"
            spy={true}
            smooth={true}
            duration={500}
          >
            Educación
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className="navbar__link"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
        <li className="navbar__item navbar__social-icons">
          <a href="https://www.facebook.com/jonathan.moran.144" className="navbar__social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/jona.moran93/" className="navbar__social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-moran-5b2048213/" className="navbar__social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;





