import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { useIsMobileOrTablet } from "./util/isMobileOrTablet";
import "./styles.css";

function Pizarra() {
  const isMobOrTab = useIsMobileOrTablet();

  return (
    <div className="App">
      <h1>Pinta Pizarra</h1>
      <h3>Es tu momento de ser artista, a ver que tan bueno eres dibujando.</h3>
      {/*       <iframe
        title="GitHub link"
        src="https://ghbtns.com/github-btn.html?user=embiem&repo=react-canvas-draw&type=star&count=true"
        frameBorder="100"
        scrolling="0"
        width="160px"
        height="30px"
      />
      <p>
        <span role="img" aria-label="fingers pointing down">
          👇👇👇👇
        </span>{" "}
        Use your {isMobOrTab ? "finger" : "mouse"} to draw{" "}
        <span role="img" aria-label="fingers pointing down">
          👇👇👇👇
        </span>
      </p> */}
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
          canvasWidth={800}
          canvasHeight={400}
          lazyRadius={0}
          brushRadius={5}
          brushColor="#151"
          style={{
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
        />
        {/*       <p>
        Like what you see? Play around in{" "}
        <a href="https://codesandbox.io/s/6lv410914w">this CodeSandbox</a> & see
        some more{" "}
        <a href="https://embiem.github.io/react-canvas-draw/">Advanced Demos</a>
        !
      </p> */}
      </div>
    </div>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Pizarra />, rootElement); */

export default Pizarra;
