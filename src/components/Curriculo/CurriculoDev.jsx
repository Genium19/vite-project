import React, { useState } from "react";
import "./css/main.css";
import Curriculotabs from "./Curriculotabs";
import {
  LogoCss,
  LogoHtml,
  LogoJs,
  LogoMario,
  LogoReact,
  LogoSass,
  LogoNodejs,
  IconDark,
  IconLight,
} from "./Curriculoicon";
import Mario from "./Mariofunction";

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
            {modoOscuro ? <IconDark /> : <IconLight />}
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
          <Mario />
          <LogoCss />
          <LogoHtml />
          <LogoJs />
          <LogoReact />
          <LogoSass />
          <LogoNodejs />
        </div>
      </header>
      <Curriculotabs></Curriculotabs>
      <script src="script.js" defer></script>
    </main>
  );
};

export default CurriculoDev;
