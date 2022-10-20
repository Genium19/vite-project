import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import ReactDOM from "react-dom";
import { useIsMobileOrTablet } from "./util/isMobileOrTablet";
import "./styles.css";

function Pizarra() {
  const isMobOrTab = useIsMobileOrTablet();

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const handleClick = () => {
    const data = firstCanvas.current.getSaveData();
    secondCanvas.current.loadSaveData(data);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Guardar</button>
      <h1>Pinta Pizarra</h1>
      <h3>Es tu momento de ser artista, a ver que tan bueno eres dibujando.</h3>
      <div className="canvass-container2">
        <img
          src={
            "https://razukraski.com/assets/cache_image/images/yoda/baby-yoda-coloring-page(20)_470x0_5b8.jpg"
          }
          alt="hey"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "100%",
            //zIndex: 9999,
          }}
        />

        <CanvasDraw
          ref={firstCanvas}
          canvasWidth={780}
          canvasHeight={380}
          lazyRadius={10}
          brushRadius={10}
          brushColor={"#358"}
          style={{
            border: "10px solid #000",
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
      <hr></hr>
      <h3>Eres en gran artista, guarda tu dibujo aqui</h3>
      <div className="canvass-container2">
        <CanvasDraw
          ref={secondCanvas}
          canvasWidth={780}
          canvasHeight={380}
          hideGrid={true}
          disabled={true}
          style={{
            border: "10px solid gray",
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
    </div>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Pizarra />, rootElement); */

export default Pizarra;
