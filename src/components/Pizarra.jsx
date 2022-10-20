import React from "react";
import CanvasDraw from "react-canvas-draw";
import { useIsMobileOrTablet } from "./util/isMobileOrTablet";
import "./styles.css";

function Pizarra() {
  const isMobOrTab = useIsMobileOrTablet();
  
  return (
    <div className="App">
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
          canvasWidth={780}
          canvasHeight={380}
          lazyRadius={0}
          brushRadius={5}
          brushColor={"#ddd"}
          style={{
            border: "10px solid #000",
            boxShadow: "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
    </div>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Pizarra />, rootElement); */

export default Pizarra;
