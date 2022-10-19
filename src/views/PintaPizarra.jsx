import * as React from "react";
import SpeedDial from "../components/SpeedDial";
import { Box } from "@mui/system";
import Pizarra from "../components/Pizarra";
import ColorSelect from "../components/ColorSelect";

function PintaPizarra() {
  return (
    <Box>
      <Pizarra></Pizarra>
      {/* <ColorSelect></ColorSelect> */}
      <SpeedDial></SpeedDial>
      
    </Box>
  );
}

export default PintaPizarra;
