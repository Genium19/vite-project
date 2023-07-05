import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import ReactDOM from "react-dom";
import { useIsMobileOrTablet } from "./util/isMobileOrTablet";
import "./styles.css";
import Button from "@mui/material/Button";
import ColorSelect from "../components/ColorSelect";
import SpeedDial from "../components/SpeedDial";

function Pizarra() {
  const isMobOrTab = useIsMobileOrTablet();

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const handleClick = () => {
    const data = firstCanvas.current.getSaveData();
    secondCanvas.current.loadSaveData(data);
  };

  const clear = () => {
    firstCanvas.current.clear();
  };

  const undo = () => {
    firstCanvas.current.undo();
  };

  return (
    <div className="container bg-yellow-300 mx-auto p-10">
      <div className="container bg-red-300 mx-auto p-10 max-w-5xl">
        <div className="bg-black grid grid-cols-6 gap-5 max-w-4xl mx-auto">
          <div className="col-span-5 mx-auto">
            <ColorSelect></ColorSelect>
            <h1 className="text-center">Pinta Pizarra</h1>
            <h3 className="text-center">
              Es tu momento de ser artista, a ver que tan bueno eres dibujando.
            </h3>
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
                  maxWidth: "80%",
                  maxHeight: "80%",
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
                  border: "10px solid blue",
                  boxShadow:
                    "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          </div>
          <div className="col-span-1">
            <SpeedDial></SpeedDial>
          </div>
        </div>
        <div className="grid grid-cols-4 bg-blue-300 gap-5 p-5 max-w-3xl mx-auto">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Guardar
          </Button>
          <Button variant="contained" color="error" onClick={clear}>
            Borrar
          </Button>
          <Button variant="contained" color="warning" onClick={undo}>
            Deshacer
          </Button>
        </div>
        <h3 className="text-center">Eres en gran artista, guarda tu dibujo aqui</h3>
        <div className="bg-black grid grid-cols-6 max-w-4xl mx-auto">
          <div className="col-span-6 mx-auto">
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
      </div>
    </div>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Pizarra />, rootElement); */

export default Pizarra;
