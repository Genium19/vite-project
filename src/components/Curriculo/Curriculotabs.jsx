import React, { useState } from "react";
import "./css/main.css";
import {
  IconExperiencia,
  IconCursos,
  IconEducacion,
  IconHabilidades,
  IconHerramientas,
} from "./Curriculoicon";

const TabContent1 = () => {
  return (
    <div>
      <section>
        <h3>EXPERIENCIA</h3>
        <ul>
          <li>
            <strong>EPIDATA</strong> - 2022 - Actualidad
            <br />
            Desarrollador Web y Diseñador Gráfico.
            <br />
            <ul>
              <li>
                Diseño e implementación de nuevas funcionalidades y componentes
                web.
              </li>
              <li>
                Revisión y mantenimiento de los websites en todos los ambientes
                de desarrollo.
              </li>
              <li>Integración del website principal con servicios externos.</li>
              <li>
                Resolución de problemas de compatibilidad entre los diferentes
                componentes.
              </li>
              <li>Diseño y gestión de campañas de email marketing.</li>
              <li>
                Optimización de la velocidad de la página y copias de seguridad
                del sitio desde el servidor.
              </li>
            </ul>
          </li>
          <li>
            <strong>UNIVERSIDAD CENTRAL DE VENEZUELA</strong> - 2019 -
            Actualidad
            <br />
            Profesor en la Escuela de Bibliotecología y Archivología de las
            siguientes asignaturas:
            <br />
            <ul>
              <li>
                Automatización y Simplificación de Procesos Ciencias de la
                Información
              </li>
              <li>Redes Sociales como fuentes de información.</li>
            </ul>
          </li>
          <li>
            <strong>CORPOELEC</strong> - 2019 - 2022
            <br />
            Desarrollador Web.
            <br />
            <ul>
              <li>Elaboración de Aplicaciones Web.</li>
              <li>Elaboración de bases de datos.</li>
              <li>Creación de diagramas de flujo.</li>
              <li>Automatización de procesos.</li>
            </ul>
          </li>
          <li>
            <strong>ODEBRECHT INGENIERÍA Y CONSTRUCCIÓN</strong> - 2018 - 2019
            <br />
            Coordinador de Documentación del Programa de Personas &
            Organización.
          </li>
          <li>
            <strong>
              OFICINA DE PLANIFICACIÓN DEL SECTOR UNIVERSITARIO (OPSU)
            </strong>{" "}
            - 2008 - 2018
            <br />
            Coordinador del Área de Bienestar Social, Ingreso y Desarrollo del
            Departamento de Personal.
          </li>
        </ul>
      </section>
    </div>
  );
};

const TabContent2 = () => {
  return (
    <div>
      <section>
        <h3>CURSOS RECIENTES</h3>
        <ul>
          <li>Curso de Entornos de Desarrollo y Deployment en WordPress</li>
          <li>Curso de SEO Técnico</li>
          <li>Curso de Optimización Web</li>
          <li>Curso Básico de JavaScript</li>
          <li>Curso de Frontend Developer</li>
          <li>Curso Profesional de WordPress</li>
          <li>Curso de Creación de Plugins para WordPress</li>
          <li>Curso de Creación de Temas para WordPress</li>
        </ul>
      </section>
    </div>
  );
};

const TabContent3 = () => {
  return (
    <div>
      <section>
        <h3>EDUCACIÓN</h3>
        <ul>
          <li>
            <strong>UNIVERSIDAD CENTRAL DE VENEZUELA</strong> - 2006 - 2011
            <br />
            Licenciado en Ciencias de la Información
          </li>
          <li>
            <strong>UNIVERSIDAD CENTRAL DE VENEZUELA</strong> - 2013 - 2016
            <br />
            Maestría en Información y Comunicación para el Desarrollo – Tesis
          </li>
        </ul>
      </section>
    </div>
  );
};

const TabContent4 = () => {
  return (
    <div>
      <section>
        <h3>HABILIDADES</h3>
        <ul>
          <li>
            Conocimiento de SEO y prácticas recomendadas para la optimización de
            motores de búsqueda en sitios de WordPress
          </li>
          <li>Escritura de código aplicando buenas prácticas de desarrollo.</li>
          <li>Revisión y mejora de código existente.</li>
          <li>Resolución de errores (Debugging).</li>
          <li>Reutilización de componentes.</li>
          <li>Estructura y organización de proyectos.</li>
          <li>Manejo de lenguaje de base de datos SQL.</li>
          <li>Diseño gráfico, diagramación e ilustración.</li>
          <li>Inglés intermedio.</li>
          <li>Proactivo y dinámico.</li>
          <li>Líder de equipos multidisciplinarios.</li>
          <li>Excelentes relaciones interpersonales.</li>
          <li>Capacidad de negociación.</li>
          <li>Diagramación, data manager.</li>
        </ul>
      </section>
    </div>
  );
};

const TabContent5 = () => {
  return (
    <div>
      <section>
        <h3>HERRAMIENTAS</h3>
        <ul>
          <li>Wordpress, Webflow, Appsheet</li>
          <li>HTML, CSS y JS.</li>
          <li>React, JSX.</li>
          <li>Jira, Trello, Asana, Azure, Odoo.</li>
          <li>Sistema de control de versiones (Git).</li>
          <li>Oracle, SQL Server, PostgreSQL, MySQL.</li>
          <li>Visual Studio Code.</li>
          <li>Adobe Ps, Ai, Ae, An, Pr, Xd y Figma.</li>
          <li>Metodologías ágiles (SCRUM, Kanban).</li>
        </ul>
      </section>
    </div>
  );
};

const Curriculotabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContents = [
    <TabContent1 />,
    <TabContent2 />,
    <TabContent3 />,
    <TabContent4 />,
    <TabContent5 />,
  ];

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          <IconExperiencia></IconExperiencia>
          Experiencia
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          <IconCursos></IconCursos>
          Cursos Recientes
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
            <IconEducacion></IconEducacion>
          Educación
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
            <IconHabilidades></IconHabilidades>
          Habilidades
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
            <IconHerramientas></IconHerramientas>
          Herramientas
        </button>
      </div>
      <div className="tab-content">{tabContents[activeTab]}</div>
    </div>
  );
};

export default Curriculotabs;
