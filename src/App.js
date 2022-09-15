import React from "react";
import TodoList from "./Components/TodoList";
import "./Css/Style.css";
import { CgMonday } from "react-icons/cg";

function App() {
  return (
    <div>
      <div className="header">
        TODO LIST APP <CgMonday className="icon-up" />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
