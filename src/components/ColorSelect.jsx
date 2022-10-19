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

      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Seleccione un color
          </Typography>
          <div>
            <ColorPicker value={color} onChange={handleChange} />
          </div>
        </Box>
      </Container>

  );
}

