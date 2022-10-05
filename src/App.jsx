import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskApp from "./views/TaskApp";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route element={<Home />} exact path="/vite-project/" />
          <Route element={<TaskForm />} path="/vite-project/TaskForm" />
          <Route element={<TaskList />} path="/vite-project/TaskList" />
          <Route element={<TaskApp />} path="/vite-project/views/TaskApp" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
