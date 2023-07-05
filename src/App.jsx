import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskApp from "./views/TaskApp";
import Veterinaria from "./views/Veterinaria";
import Navbar from "./components/Navbar";
import MiniDrawerHome from './components/MiniDrawerHome'
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PintaPizarra from "./views/PintaPizarra";
import Todoindex from "./views/Todoindex"
import VinoncePage from "./views/VinoncePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <MiniDrawerHome></MiniDrawerHome>
        <Routes>
          <Route element={<Home />} exact path="/vite-project/" />
          <Route element={<TaskForm />} path="/vite-project/TaskForm" />
          <Route element={<TaskList />} path="/vite-project/TaskList" />
          <Route element={<TaskApp />} path="/vite-project/views/TaskApp" />
          <Route element={<Veterinaria />} path="/vite-project/views/Veterinaria" /> 
          <Route element={<PintaPizarra />} path="/vite-project/views/PintaPizarra" />
          <Route element={<VinoncePage/>} path="/vite-project/views/VinoncePage" /> 
          <Route element={<Todoindex />} path="/vite-project/views/Todoindex" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
