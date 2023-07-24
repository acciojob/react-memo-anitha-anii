import React, { useState } from "react";

function Addtodo() {
  const [todo, setTodo] = useState([]);

  function displaytodo() {
    setTodo([...todo, "New todo"]);
  }

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      {todo.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
      <button onClick={displaytodo}>add todo</button>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default Addtodo;
