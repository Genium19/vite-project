import { Button, CardHeader, Avatar, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";



function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Container>
      <CardHeader
        avatar={
          <Avatar aria-label="">
          <Avatar src={'https://robohash.org/' + task.id + 10}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="">
            
          </IconButton>
        }
        title=""
        subheader=""
        
      />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Button sx={{m: 3}}
        variant="contained"
        color="error"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </Button>
      
    </Container>
  );
}

export default TaskCard;
