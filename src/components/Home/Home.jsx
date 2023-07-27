import React, { useState } from "react";
import "./css/Home.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  LogoJs,
  LogoReact,
  LogoNodejs,
  IconDark,
  IconLight,
  LogoMario,
} from "../Curriculo/Curriculoicon";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={`ml-14 ${
        isDarkMode ? "dark" : ""
      } dark:bg-gray-900 text-primary dark:text-slate-300`}
    >
      <header className="p-0 m-0">
        <nav className="flex bg-primary dark:bg-gray-600 fixed top-0 left-0 w-full items-center justify-end pt-16 space-x-6 h-[120px] sm:pr-12 xs:pr-4 z-50">
          <ul className="font-regular xs:text-sm md:text-lg">
            <li>
              <a href="#" className="text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contacto
              </a>
            </li>
          </ul>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <IconDark /> : <IconLight />}
          </button>
        </nav>
      </header>
      <main className="p-0 m-0 ">
        <section className="hero relative bg-imghero bg-cover bg-fixed py-40 text-center m-0 grid xs:grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="hero--izq relative">
            <h1 className="font-Unbounded text-white xs:text-xl sm:text-2xl lg:text-4xl">
              Bienvenidos a Genium App{" "}
            </h1>
            <p className="mt-4 xs:text-lg lg:text-xl text-white">
              En esta aplicación verás algunos proyectos que he realizado
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-primary text-white py-2 px-4 rounded-full mx-auto block">
              Ver Curriculo
            </button>
          </div>
          <div className="hero--der relative w-28 mx-auto transition-transform hover:scale-x-[-1]">
            <LogoMario></LogoMario>
          </div>
        </section>
        <div className="h-5 bg-blue-300 border-2 border-dashed border-opacity-20 border-blue-950 rounded-b-full"></div>

        <section className="products ">
          <h2 className="font-Unbounded text-primary xs:text-lg sm:text-xl lg:text-4xltext-2xl text-center my-16 dark:text-slate-300">
            Proyectos Realizados
          </h2>
          <div className="grid xs:mx-4 xs:px-1 md:mx-16 gap-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white">
            <div className="product relative bg-imgpokomonos bg-cover rounded-3xl p-10 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-primary bg-opacity-70 rounded-3xl"></div>
              <h3 className="relative text-lg text-center font-semibold mt-2">
                Pokomonos
              </h3>
              <p className="relative text-center">Game Developer</p>
              <button className="relative w-36 rounded-full bg-blue-500 hover:bg-primary text-white py-2 px-4 mt-2 mx-auto block">
                Jugar
              </button>
            </div>

            <div className="product relative bg-imgtodo bg-cover bg-center rounded-3xl p-10 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-primary bg-opacity-70 rounded-3xl"></div>
              <h3 className="relative text-lg text-center font-semibold mt-2">
                TO DO Machine
              </h3>
              <p className="relative text-center">Organiza tus tareas</p>
              <button className="relative w-36 rounded-full bg-blue-500 hover:bg-primary text-white py-2 px-4 mt-2 mx-auto block">
                Comenzar
              </button>
            </div>
            <div className="product relative bg-imgtodo bg-cover bg-center rounded-3xl p-10 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-primary bg-opacity-70 rounded-3xl p-10"></div>
              <h3 className="relative text-lg text-center font-semibold mt-2">
                Pinta Pizarra
              </h3>
              <p className="relative text-center">
                Eres un artista en potencia
              </p>
              <button className="relative w-36 rounded-full bg-blue-500 hover:bg-primary text-white py-2 px-4 mt-2 mx-auto block">
                Dar pinceladas
              </button>
            </div>
          </div>
        </section>

        <section className="featured xs:px-6 sm:px-16 mb-32">
          <h2 className="font-Unbounded text-primary xs:text-lg sm:text-xl lg:text-4xltext-2xl text-center my-16 dark:text-slate-300">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-16">
            <div className="feature flex-1 p-6 rounded-3xl border-b-2 border-solid border-sky-400 min-w-[200px] shadow-none transition-shadow hover:shadow-xl">
              <div className="w-28 mx-auto">
                <LogoReact></LogoReact>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">React</h3>
              <p className="text-justify">
                React es una biblioteca de JavaScript desarrollada por Facebook
                que se utiliza para construir interfaces de usuario interactivas
                y reutilizables. Permite la creación de componentes
                reutilizables y utiliza el concepto de Virtual DOM para
                optimizar el rendimiento de las aplicaciones web.
              </p>
            </div>
            <div className="feature flex-1 p-6 rounded-3xl border-b-2 border-solid border-sky-400 min-w-[200px] shadow-none transition-shadow hover:shadow-xl">
              <div className="w-24 mx-auto">
                <LogoJs></LogoJs>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">
                Javascript
              </h3>
              <p className="text-justify">
                JavaScript es un lenguaje de programación de alto nivel que se
                utiliza principalmente para agregar interactividad y
                funcionalidad a las páginas web. Es ampliamente utilizado tanto
                en el lado del cliente (navegador) como en el lado del servidor
                (Node.js), y permite la manipulación dinámica de elementos HTML,
                interacción con el usuario, llamadas a API y más.
              </p>
            </div>
            <div className="feature flex-1 p-6 rounded-3xl border-b-2 border-solid border-sky-400 min-w-[200px] shadow-none transition-shadow hover:shadow-xl">
              <div className="w-28 mx-auto">
                <LogoNodejs></LogoNodejs>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">
                Node.js
              </h3>
              <p className="text-justify">
                es un entorno de ejecución de JavaScript del lado del servidor
                que utiliza el motor de JavaScript V8 de Google. Permite
                ejecutar código JavaScript en el servidor y proporciona
                capacidades de red y E/S de manera eficiente. Node.js es
                conocido por su capacidad para manejar un alto volumen de
                solicitudes simultáneas y es ampliamente utilizado para
                desarrollar aplicaciones web y servidores de aplicaciones
                escalables.
              </p>
            </div>
          </div>
        </section>

        <section className="projets xs:px-6 sm:px-16 mb-32">
          <h2 className="font-Unbounded text-primary xs:text-lg sm:text-xl lg:text-4xltext-2xl text-center my-16 dark:text-slate-300">
            Proyectos Js
          </h2>
          <div className="flex space-x-6 overflow-x-auto overflow-scroll-x-contain">
            <div className="project flex-1 p-6 rounded-3xl border-2 border-solid border-sky-700 min-w-max">
              <div className="w-24 mx-auto">
                <LogoJs></LogoJs>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">
                Calculadora
              </h3>
              <p className="text-justify">En construcción</p>
            </div>
            <div className="project flex-1 p-6 rounded-3xl border-2 border-solid border-sky-700 min-w-max">
              <div className="w-24 mx-auto">
                <LogoJs></LogoJs>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">Turnos</h3>
              <p className="text-justify">En construcción</p>
            </div>
            <div className="project flex-1 p-6 rounded-3xl border-2 border-solid border-sky-700 min-w-max">
              <div className="w-24 mx-auto">
                <LogoJs></LogoJs>
              </div>
              <h3 className="text-lg text-center font-semibold my-4">Boleto</h3>
              <p className="text-justify">En construcción</p>
            </div>
          </div>
        </section>

        <section className="cta text-center mb-10">
          {/* Contenido del llamado a la acción (call-to-action) */}
          <h2 className="text-primary dark:text-slate-300">
            "El conocimiento es un tesoro que seguirá a su dueño a cualquier
            parte"
          </h2>
        </section>
      </main>

      <footer className="bg-primary h-16 flex items-center justify-center">
        {/* Contenido del pie de página */}
        <p>Todos los zurdos reservados &copy; 2023</p>
      </footer>
    </div>
  );
}

export default Home;
