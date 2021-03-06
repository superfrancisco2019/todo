import React, { useState } from "react";
import Todo from "./Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Laver la vaisselle",
    "Sortir les poubelles",
    "Nourrir le chat",
  ]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <p className="title">TODO</p>
      <form className="main__frame">
        <input
          className="input"
          value={input}
          placeholder="What needs to be done?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="new__todo__button"
          disabled={!input}
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <div className="list__container">
        {todos.map((todo) => (
          <Todo classname="todo" text={todo} />
        ))}
        
      </div>
    </div>
  );
}

export default App;
