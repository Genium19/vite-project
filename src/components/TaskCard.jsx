import { Button, CardHeader, Avatar, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { todospersonajes } from "../funciones/api";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todospersonajes(setPersonajes);
  }, []);

  return (
    <Container>
      <CardHeader
        avatar={
          <Avatar aria-label="">
            <Avatar src={"https://robohash.org/" + task.id + 10} />
          </Avatar>
        }
        action={<IconButton aria-label=""></IconButton>}
        title=""
        subheader=""
      />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Button
        sx={{ m: 3 }}
        variant="contained"
        color="error"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </Button>
      {personajes !== null
        ? personajes
            .filter((p) => p.id == task.id)
            .map((personajes) => (
              <div key={personajes.id}>
                <img src={personajes.image} alt="" />
              </div>
            ))
        : "no hay personajes"}
    </Container>
  );
}

export default TaskCard;
