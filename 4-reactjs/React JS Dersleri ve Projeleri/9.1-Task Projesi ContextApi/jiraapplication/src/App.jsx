import { useEffect, useState,useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";
import TasksContext from "./context/task";


function App() {
  const{fetchTasks}=useContext(TasksContext);
 
  useEffect(() => {
    fetchTasks();
  }, []);



  return (
    <div className="App">
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList
       
      />
    </div>
  );
}

export default App;
