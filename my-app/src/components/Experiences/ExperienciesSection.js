import React from 'react';
import '../../Styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience" name="Experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Desarrollo de e-commerce</h3>
        <p>feb. 2023</p>
        <p>En remoto</p>
        <ul>
          <li>Realizado con React, Redux Toolkit, MongoDb, Typescript, Html y Bootstrap.</li>
          <li>Pagina de ventas de productos de merchandising del curso, como son remeras personalizadas, mates, termos, gorras, etc.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Asistente de enseñanza Full-Stack</h3>
        <p>sept. 2022</p>
        <ul>
          <li>Ayudante de bootcamp (TA) para alumnos de Desarrollo Full-Stack.</li>
          <li>Tareas principales:</li>
          <ul>
            <li>Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.</li>
            <li>Orientar a los estudiantes en los primeros pasos de la cursada.</li>
            <li>Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming).</li>
            <li>Proponer ideas para la mejora de los procesos del Bootcamp.</li>
          </ul>
        </ul>
      </div>

      <h3>Aplicación de comidas</h3>
      <p>jul. 2022 </p>
      <p>En remoto</p>
      <ul>
        <li>Desarrollo de aplicación:</li>
        <ul>
          <li>Realizada con React, Redux, PosgreSql, Javascript, Html y Css.</li>
          <li>Búsqueda, orden alfabético, filtrado por tipo de dieta, paginado y detalle de cada receta.</li>
        </ul>
      </ul>

      <h3>Aplicación de Videojuegos</h3>
      <p>jul. 2022</p>
      <p>En remoto</p>
      <ul>
        <li>Desarrollo de aplicación:</li>
        <ul>
          <li>Realizado con React, Redux, PosgreSql, Javascript, Html y Css.</li>
          <li>Búsqueda, orden alfabético, filtrado, paginado y detalle de cada videojuego.</li>
        </ul>
      </ul>

      <h3>Administración</h3>
      <p>feb. 2013 - mar. 2022</p>
      <p>Sierra Grande, Río Negro, Argentina</p>
      <ul>
        <li>Administración de facturas y cheques</li>
        <li>Pedidos de combustible</li>
        <li>Armado de planillas de horarios</li>
      </ul>
    </div>
  );
};

export default Experience;




