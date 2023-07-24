import React, { useState } from "react";

function MemoApp() {
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState("");
  const [memoItems, setMemoItems] = useState([]);

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
      setMemoItems([...memoItems, memoText]);
      setMemoText("");
    }
  }

  return (
    <div>
      <h2>Memo</h2>
      <p>Count: {count}</p>
      <button id="incr-cnt" onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <input
        type="text"
        value={memoText}
        onChange={handleInputChange}
       
        id="memo-input" 
      />
      <button id="memo-submit" onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      <button id="add-todo-btn" onClick={handleAddTodo}>Add todo</button>
      <ul>
        {memoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MemoApp;
