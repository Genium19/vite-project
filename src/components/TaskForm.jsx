import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Estribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escriba la descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <Button type="submit" variant="contained" color="primary">
          Añadir Tarea
        </Button>
      </form>
    </Container>
  );
}

export default TaskForm;
