import "./styles/costum.css";
import { MyContext } from "./context/MyContext";
import { useState } from "react";
import Content from "./Components/Content";


function App() {

  // States for manage project data

   const [todos , setTodos] = useState([]);


  // todo item structure
  const todoItem = {
    id: null,
    title: null,
    explane: null,
    importance: null,
    reminder: null,
    time: null,
    date: null,
    reminderType: null,
    color: null,
    deleteStatus : null
  }



  return (
    <MyContext.Provider value={{todos , setTodos , todoItem}}>
    <Content/>
    </MyContext.Provider>
  )
}

export default App
