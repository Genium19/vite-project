import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <TaskForm />
      <TaskList />
      
    </>
  );
}

export default App;
