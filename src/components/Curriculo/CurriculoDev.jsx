import React, { useState } from "react";
import "./css/main.css";

const CurriculoDev = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <main className={`cv-main ${modoOscuro ? "modo-oscuro" : ""}`}>
      <header>
        <div className="container-modo-oscuro">
          <button onClick={toggleModoOscuro}>
            {modoOscuro ? (
              <svg className="icon-modo-dark" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"
                ></path>
              </svg>
            ) : (
              <svg className="icon-modo-light" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M8.652,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C8.989,16.555,8.838,16.404,8.652,16.404z"
                ></path>
                <path
                  fill="none"
                  d="M11.348,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C11.685,16.555,11.535,16.404,11.348,16.404z"
                ></path>
                <path
                  fill="none"
                  d="M17.415,5.281V4.607c0-2.224-1.847-4.045-4.103-4.045H10H6.687c-2.256,0-4.103,1.82-4.103,4.045v0.674H10H17.415z"
                ></path>
                <path
                  fill="none"
                  d="M18.089,10.674V7.304c0,0,0-0.674-0.674-0.674V5.955H10H2.585v0.674c-0.674,0-0.674,0.674-0.674,0.674v3.371c-0.855,0.379-1.348,1.084-1.348,2.022c0,1.253,2.009,3.008,2.009,3.371c0,2.022,1.398,3.371,3.436,3.371c0.746,0,1.43-0.236,1.98-0.627c-0.001-0.016-0.009-0.03-0.009-0.047v-2.022c0-0.372,0.303-0.674,0.674-0.674c0.301,0,0.547,0.201,0.633,0.474h0.041v-0.137c0-0.372,0.303-0.674,0.674-0.674s0.674,0.302,0.674,0.674v0.137h0.041c0.086-0.273,0.332-0.474,0.633-0.474c0.371,0,0.674,0.302,0.674,0.674v2.022c0,0.016-0.008,0.03-0.009,0.047c0.55,0.391,1.234,0.627,1.98,0.627c2.039,0,3.436-1.348,3.436-3.371c0-0.362,2.009-2.118,2.009-3.371C19.438,11.758,18.944,11.053,18.089,10.674z M5.618,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011s1.011,0.453,1.011,1.011S6.177,18.089,5.618,18.089z M6.629,13.371H5.474c-0.112,0-0.192-0.061-0.192-0.135c0-0.074,0.08-0.151,0.192-0.174l1.156-0.365V13.371z M8.652,12.521c-0.394,0.163-0.774,0.366-1.148,0.55c-0.061,0.03-0.132,0.052-0.2,0.076v-0.934c0.479-0.411,0.906-0.694,1.348-0.879V12.521z M5.281,10c-1.348,0-1.348-2.696-1.348-2.696h5.393C9.326,7.304,6.629,10,5.281,10z M10.674,12.296c-0.22-0.053-0.444-0.084-0.674-0.084s-0.454,0.032-0.674,0.084v-1.168C9.539,11.086,9.762,11.06,10,11.05c0.238,0.01,0.461,0.036,0.674,0.078V12.296z M12.696,13.146c-0.068-0.024-0.14-0.046-0.2-0.076c-0.374-0.184-0.754-0.386-1.148-0.55v-1.188c0.442,0.185,0.87,0.467,1.348,0.879V13.146zM14.382,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011c0.558,0,1.011,0.453,1.011,1.011S14.94,18.089,14.382,18.089z M13.371,13.371v-0.674l1.156,0.365c0.112,0.022,0.192,0.099,0.192,0.174c0,0.074-0.08,0.135-0.192,0.135H13.371z M14.719,10c-1.348,0-4.045-2.696-4.045-2.696h5.393C16.067,7.304,16.067,10,14.719,10z"
                ></path>
                <path
                  fill="none"
                  d="M10,16.067c-0.186,0-0.337,0.151-0.337,0.337V19.1c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.696C10.337,16.218,10.186,16.067,10,16.067z"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <h1>Gerardo A. Suárez B.</h1>
        <h2>Frontend Developer</h2>
        <p>
          Soy un apasionado desarrollador de con amplia experiencia en la
          creación de sitios web personalizados, temas y plugins. Con un enfoque
          en la calidad del código, la eficiencia y la usabilidad, tengo un
          sólido historial de entregar proyectos exitosos que cumplen con las
          necesidades y expectativas de mis clientes.
        </p>
        <div className="logos-container">
          <div className="logo-css">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
              <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
              <path
                fill="#ecedee"
                d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
              />
              <path
                fill="#fff"
                d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
              />
            </svg>
          </div>
          <div className="logo-html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
              <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
              <path
                fill="#ecedee"
                d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
              />
              <path
                fill="#fff"
                d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
              />
            </svg>
          </div>
          <div className="logo-js">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <rect width="630" height="630" fill="#f7df1e" />
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
            </svg>
          </div>
          <div className="logo-mario">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
              <g>
                <path
                  className="st0"
                  d="M101.01,21h81.65v16.33h48.99v16.33c-10.88,0-21.77,0-32.66,0v16.33h32.66v16.33h16.33v16.33
              c-5.44,0-10.89,0-16.33,0v16.33c-5.44,0-10.89,0-16.33,0v16.33c-10.88,0-21.77,0-32.66,0v16.33h48.99v16.33h16.33v65.32
              c-10.88,0-21.77,0-32.66,0v16.33h16.33v16.33h16.33V279c-21.77,0-43.55,0-65.32,0c0-9.8,0-19.6,0-29.39c-5.44,0-10.89,0-16.33,0
              c0-5.44,0-10.89,0-16.33c-10.88,0-21.77,0-32.66,0v16.33c-5.44,0-10.89,0-16.33,0V279c-21.77,0-43.55,0-65.32,0
              c0-4.35,0-8.71,0-13.06h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33c-10.88,0-21.77,0-32.66,0
              c0-21.77,0-43.55,0-65.32h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33h16.33c0-5.44,0-10.89,0-16.33
              c-10.88,0-21.77,0-32.66,0c0-16.33,0-32.66,0-48.99h16.33c0-10.88,0-21.77,0-32.66h16.33C101.01,31.89,101.01,26.44,101.01,21z"
                />
                <path
                  className="st1"
                  d="M101.01,21h81.65v16.33h48.99v16.33c-48.98,0-97.98,0-146.96,0c0-5.44,0-10.89,0-16.33h16.33
              C101.01,31.89,101.01,26.44,101.01,21z M117.34,135.3h16.33v32.66h32.66c0-5.44,0-10.89,0-16.33h16.33v32.66h16.33
              c-0.07,10.09,0,32.66,0,32.66h16.33v32.66h-48.99v-16.33c0,0-21.77,0-32.66,0v16.33c-16.33,0-32.66,0-48.99,0
              c0-10.88,0-21.77,0-32.66h16.33c0-10.88,0-21.77,0-32.66h16.33C117.34,167.96,117.34,151.63,117.34,135.3z"
                />
                <path
                  className="st2"
                  d="M133.67,53.66h32.66v32.66h16.33v16.33c-5.44,0-10.89,0-16.33,0v16.33h48.99v16.33c-38.1,0-76.21,0-114.3,0
              c0-10.88,0-21.77,0-32.66h32.66c0-5.44,0-10.89,0-16.33c-5.44,0-10.89,0-16.33,0c0-5.44,0-10.89,0-16.33h16.33
              C133.67,64.54,133.67,59.1,133.67,53.66z M182.66,53.66h16.33v16.33h32.66v16.33h16.33v16.33c-16.33,0-32.66,0-48.99,0
              c0-5.44,0-10.89,0-16.33c-5.44,0-10.89,0-16.33,0C182.66,75.43,182.66,64.54,182.66,53.66z M84.68,69.99h16.33v32.66
              c-5.44,0-10.89,0-16.33,0C84.68,91.76,84.68,80.87,84.68,69.99z M52.03,184.29h32.66v16.33h16.33v16.33c-5.44,0-10.89,0-16.33,0
              v16.33c-10.88,0-21.77,0-32.66,0C52.03,216.95,52.03,200.62,52.03,184.29z M117.34,184.29h16.33v16.33c-5.44,0-10.89,0-16.33,0
              C117.34,195.18,117.34,189.73,117.34,184.29z M166.33,184.29h16.33v16.33c-5.44,0-10.89,0-16.33,0
              C166.33,195.18,166.33,189.73,166.33,184.29z M215.32,184.29h32.66v48.99c-10.88,0-21.77,0-32.66,0c0-5.44,0-10.89,0-16.33
              c-5.44,0-10.89,0-16.33,0c0-5.44,0-10.89,0-16.33h16.33C215.32,195.18,215.32,189.73,215.32,184.29z"
                />
              </g>
            </svg>
          </div>
        </div>
      </header>

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

      <script src="script.js" defer></script>
    </main>
  );
};

export default CurriculoDev;
