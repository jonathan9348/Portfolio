import React from 'react';
import Logo from '../../assets/Logo.png';
import NewPhoto from '../../assets/perfil.png';
import '../../Styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <h1 className='ocupattion'>Full Stack Developer</h1>
      <div className="line-divider"></div>
      <div className="content-container">
      
        
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Desarrollador Full stack con una formación sólida en tecnologías como React, Redux, PosgreSql, Html, Css y Javascript.
          </p>
          <p>
            Desde Henry pude adquirir habilidades blandas que me han ayudado al momento de encarar el proyecto de e-commerce que realizamos con mi equipo de trabajo, logrando así sacar adelante un trabajo que requería de 6 a 8 personas. Se dieron 4 bajas en medio del proceso, pero en vez de bajar los brazos esto nos hizo más unidos y nos dio más ganas de trabajar. Más allá de la infinidad de problemas que tuvimos, principalmente por no tener la mano de obra necesaria para un proyecto tan grande, pudimos sacarlo adelante, destacando el esfuerzo y resiliencia del grupo.
          </p>
          <p>
            Actualmente tengo como objetivo principal poder brindarle mis conocimientos a quien le interese y así poder encontrar las soluciones a cada problema que se presente. Dispuesto y preparado para trabajar en equipo con el fin de sacar adelante cualquier desafío.
          </p>
          <p>
            El camino hasta lograr quien soy hoy no fue para nada fácil. Desde entrar en el mundo de la tecnología hasta recorrerlo, pero entendí que es así, una ruta de desafíos constantes que hay que afrontar. Sin embargo, los resultados obtenidos son muy buenos tanto a nivel técnico como en habilidades blandas. Hoy estoy decidido a seguir por acá, siento que es lo mío y que puedo aportar muchísimo.
          </p>
        </div>
        <div className="photo-container">
          <img src={NewPhoto} alt="New Photo" className="new-photo" />
        </div>
     
      </div>
    </div>
  );
};

export default AboutMe;





