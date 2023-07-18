import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskApp from "./views/TaskApp";
import Veterinaria from "./views/Veterinaria";
import Navbar from "./components/Navbar";
import MiniDrawerHome from './components/MiniDrawerHome'
import HomePage from "./views/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PintaPizarra from "./views/PintaPizarra";
import Todoindex from "./views/Todoindex"
import VinoncePage from "./views/VinoncePage";
import CurriculoPage from './views/CurriculoPage'
import LandingPage from "./views/LandingPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <MiniDrawerHome></MiniDrawerHome>
        <Routes>
          <Route element={<HomePage />} exact path="/vite-project/" />
          <Route element={<TaskForm />} path="/vite-project/TaskForm" />
          <Route element={<CurriculoPage/>} path="/vite-project/views/CurriculoPage" /> 
          <Route element={<TaskList />} path="/vite-project/TaskList" />
          <Route element={<TaskApp />} path="/vite-project/views/TaskApp" />
          <Route element={<Veterinaria />} path="/vite-project/views/Veterinaria" /> 
          <Route element={<PintaPizarra />} path="/vite-project/views/PintaPizarra" />
          <Route element={<VinoncePage/>} path="/vite-project/views/VinoncePage" /> 
          <Route element={<LandingPage/>} path="/vite-project/views/LandingPage" /> 
          <Route element={<Todoindex />} path="/vite-project/views/Todoindex" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
