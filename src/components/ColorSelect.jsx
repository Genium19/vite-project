import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ColorPicker, createColor } from "material-ui-color";



export default function ColorSelect() {
  const [color, setColor] = useState(createColor("#000"));
  const handleChange = (value) => {
    console.log("onChange=", value);
    setColor(value);
  };

  return (

    <div className= "container bg-gray-300 mx-auto p-10 max-w-sm">
        <div>
          <h1>
            Seleccione un color
          </h1>
          <div>
            <ColorPicker value={color} onChange={handleChange} />
          </div>
        </div>
      </div>

  );
}

