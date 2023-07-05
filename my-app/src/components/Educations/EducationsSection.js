import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/Education.css';
import Egg from '../../assets/EGG.png'
import AP from '../../assets/AP.jpg'
import Henry from '../../assets/Henry.png'
import UNLP from '../../assets/UNLP.png'

const Education = () => {
  return (
    <div className="education">
      <div className="content">
        <h1>Education</h1>
        <ul>
          <li><h5>Egresado de bootcamp SoyHenry</h5></li>
          <p>Descripción del programa:</p>
          <p>
            Bootcamp intensivo de desarrollo web Full Stack en SoyHenry, donde adquirí conocimientos en tecnologías como JavaScript, React, Redux, Node.js, Express, HTML, CSS, entre otras.
          </p>
          {/* Agrega el enlace al certificado */}
          <h6>
            Certificado: <a href='https://certificates.soyhenry.com/cert?id=0d032152-9f21-4854-bf39-8a70bae7f499' target="_blank" rel="noopener noreferrer">Ver certificado</a>
          </h6>
        
          <li><h5>Curso de ArgentinaPrograma</h5></li>
          <p>Descripción del programa:</p>
          <p>
            Curso de programación lanzado por el gobierno nacional donde pude adquirir conocimientos en Angular, Java, HTML, CSS, Bootstrap y SQL.
          </p>
          <li><h5>Licenciatura en Música en la Universidad Nacional de La Plata</h5></li>
          {/* ... */}
          <li><h5>Curso de FrontEnd Developer en el bootcamp Egg</h5></li>
          <p>Descripción del programa:</p>
          <p>
            Bootcamp intensivo de desarrollo FrontEnd donde adquirí conocimientos en HTML, CSS, Javascript.
          </p>
          
        </ul>
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={100}
        >
          <div className="carousel-slide">
            <img src={Henry} alt="Imagen 1" className="carousel-image" />
          </div>
          <div className="carousel-slide">
            <img src={AP} alt="Imagen 2" className="carousel-image" />
          </div>
          <div className="carousel-slide">
            <img src={UNLP} alt="Imagen 4" className="carousel-image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Education;






  