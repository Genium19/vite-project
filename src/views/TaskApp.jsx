import { Box } from "@mui/system";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";



function TaskApp() {
    return (
      <Box>
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </Box>
  
    );
  }
  
  export default TaskApp;