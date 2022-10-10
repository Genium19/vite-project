import { Box } from "@mui/system";
import FormDialog from "../components/FormDialog";
import MiniDrawer from "../components/MiniDrawer";
import HeroVeterinaria from "./HeroVeterinaria";



function Home() {
    return (
      <Box>
      <HeroVeterinaria></HeroVeterinaria>
      <MiniDrawer></MiniDrawer>  
      </Box>
  
    );
  }
  
  export default Home;