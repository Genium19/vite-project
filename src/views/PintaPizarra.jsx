import * as React from "react";
import SpeedDial from "../components/SpeedDial";
import { Box } from "@mui/system";
import Pizarra from "../components/Pizarra";

function PintaPizarra() {
  return (
    <Box>
      <Pizarra></Pizarra>
      <SpeedDial></SpeedDial>
    </Box>
  );
}

export default PintaPizarra;
