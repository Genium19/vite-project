import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas por ahora</h1>;
  }

  return (
    <Container>
      <Grid container spacing={4} columns={12}>
        {tasks.map((task) => (
          <Grid key={task.id} xs={12} md={6} lg={4}>
            <Paper> <TaskCard key={task.id} task={task} /> </Paper> 
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TaskList;
