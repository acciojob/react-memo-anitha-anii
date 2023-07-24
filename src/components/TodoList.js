import React, { useState } from "react";

function MemoApp() {
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState("");
  const [memoItems, setMemoItems] = useState([]);
  const [memoItems2, setMemoItems2] = useState([]);
  function handleAddTodo() {
    setMemoItems([...memoItems, "New todo"]);
  }

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleInputChange(event) {
    setMemoText(event.target.value);
  }

  function handleSubmit() {
    if (memoText!=='') {
      setMemoItems2([...memoItems2, memoText]);
      setMemoText("");
    }
  }

  return (
    <div id="main">
      <h2>Memo</h2>
      <button id="add-todo-btn" onClick={handleAddTodo}>Add todo</button>
      {memoItems.map((todo, index) => (
         <p key={index}>{todo}</p>
      ))}
      <p>Count: {count}</p>
      <button id="calc" onClick={handleIncrement}>0</button>
      <br />
      <br />
      <input
        type="text"
        value={memoText}
        onChange={handleInputChange}
       
        id="skill-input" 
      />
      <button id="skill-btn" onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      
      <ul>
        {memoItems2.map((item, index) => (
          <li key={index} id={`todo-${index}`} >{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MemoApp;
