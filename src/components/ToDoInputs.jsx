import React, { useState } from "react";

function ToDoInput({ addToDo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addToDo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Lägg till en ToDo i listan"
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}
export default ToDoInput;
