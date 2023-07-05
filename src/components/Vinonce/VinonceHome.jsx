import React from "react";
import "./styles.css";
import "./script";

const VinonceHome = () => {
  return (
    <div>
      <header>
        <h1>Encabezado</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Contenido principal</h2>
        <p>Este es un párrafo de ejemplo.</p>
      </main>

      <footer>
        <p>Pie de página</p>
      </footer>

      <script src="/script.js"></script>
    </div>
  );
};

export default VinonceHome;
