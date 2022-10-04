import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import  Home  from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     

      <BrowserRouter>
	  <Navbar></Navbar>
        <Routes>
          <Route element={<Home/>} exact path="/vite-project/"/>
		  <Route element={<TaskForm />} path="/vite-project/TaskForm"/>
		  <Route element={<TaskList />} path="/vite-project/TaskList"/>
           
     
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
