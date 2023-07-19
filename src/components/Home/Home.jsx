import React from "react";
import "./css/Home.css";
import {
  LogoJs,
  LogoReact,
  LogoNodejs,
  IconDark,
  IconLight,
} from "../Curriculo/Curriculoicon";

function Home() {
  return (
    <div className="ml-16">
      <header className="p-0 m-0">
        <nav className="flex bg-primary justify-end py-4 sm:px-12 xs:px-6">
          {/* Contenido del menú de navegación */}
          <ul className="space-x-3 font-regular text-base xs:text-sm sm:text-sm md:text-lg lg:text-xl">
            <li>
              <a href="#" className="text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-0 m-0">
        <section className="hero text-center p-6 m-0 grid xs:grid-cols-1 sm:grid-cols-2 items-center gap-4 bg-blue-100">
          {/* Contenido del hero banner */}
          <div className="hero--izq">
            <h1 className="font-Unbounded text-primary xs:text-xl sm:text-2xl lg:text-4xl">
              Bienvenidos a Genium App{" "}
            </h1>
            <p className="mt-4 xs:text-lg lg:text-xl text-gray-600">
              En esta aplicación verás algunos proyectos que he realizado
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 rounded mx-auto block">
              Ver Curriculo
            </button>
          </div>
          <div className="hero--der flex justify-center">
            <img
              className="rounded-2xl w-4/6 h-auto m-8"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Imagen de ejemplo"
            />
          </div>
        </section>
        <div className="h-10 bg-blue-300 rounded-b-full"></div>

        <section className="products py-12">
          <h2 className="text-2xl text-center mb-6">Proyectos Realizados</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="product">
              {/* Contenido del producto */}
              <img
                src="producto1.jpg"
                alt="Pokomonos"
                className="w-full h-auto"
              />
              <h3 className="text-lg text-center font-semibold mt-2">
                Pokomonos
              </h3>
              <p className="text-center">Game Developer</p>
              <button className="bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">
                Jugar
              </button>
            </div>
            <div className="product">
              {/* Contenido del producto */}
              <img
                src="producto2.jpg"
                alt="TO DO Machine"
                className="w-full h-auto"
              />
              <h3 className="text-lg text-center font-semibold mt-2">
                TO DO Machine
              </h3>
              <p className="text-center">Organiza tus tareas</p>
              <button className="bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">
                Comenzar
              </button>
            </div>
            <div className="product">
              {/* Contenido del producto */}
              <img
                src="producto3.jpg"
                alt="Pinta Pizarra"
                className="w-full h-auto"
              />
              <h3 className="text-lg text-center font-semibold mt-2">
                Pinta Pizarra
              </h3>
              <p className="text-center">Eres una artista en potencia</p>
              <button className="bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">
                Dar pinceladas
              </button>
            </div>
          </div>
        </section>

        <section className="featured p-16">
          <h2 className="text-2xl text-center mb-6">Tecnologías Utilizadas</h2>
          <div className="p-0 m-0 grid grid-cols-3 grid-rows-1 gap-16">
            <div className="feature flex flex-col items-center justify-start ">
              <div className="flex flex-col justify-center h-52 w-32">
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
            <div className="feature flex flex-col items-center justify-start">
              <div className="flex flex-col justify-center h-52 w-32">
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
            <div className="feature flex flex-col items-center justify-start">
              <div className="flex flex-col justify-center h-52 w-32">
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

        <section className="cta text-center">
          {/* Contenido del llamado a la acción (call-to-action) */}
          <h2>
            "El conocimiento es un tesoro que seguirá a su dueño a cualquier
            parte"
          </h2>
        </section>
      </main>

      <footer className="bg-primary">
        {/* Contenido del pie de página */}
        <p>Todos los zurdos reservados &copy; 2023</p>
      </footer>
    </div>
  );
}

export default Home;
