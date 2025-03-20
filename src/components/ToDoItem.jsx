import React from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span>{todo.text}</span>
      <div>
        <button className="done" onClick={() => toggleComplete(todo.id)}>
          Klar!
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
      </div>
    </div>
  );
}
export default ToDoItem;
