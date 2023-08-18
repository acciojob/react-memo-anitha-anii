import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const MemoApp = () => {
  const [todos, setTodos] = useState([{ id: 1, content: 'New todo' }]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.title = `Memo App (${count} count)`;
  }, [count]);

  const handleAddTodo = () => {
    const newTodoId = todos.length + 1;
    const newTodo = { id: newTodoId, content: 'New todo' };
    setTodos([...todos, newTodo]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleMemoInputChange = (event) => {
    setMemoText(event.target.value);
  };

  const handleAddMemoItem = () => {
    if (memoText.length > 5) {
      const newMemoItem = { id: todos.length + 1, content: memoText };
      setTodos([...todos, newMemoItem]);
      setMemoText('');
    }
  };

  return (
    <div className="memo-app">
      <h1>Memo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <p className='count'>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <div className="memo-container">
        <h2>Memo</h2>
        <input
          type="text"
          value={memoText}
          onChange={handleMemoInputChange}
          placeholder="Enter memo text (min. 6 characters)"
        />
        <button onClick={handleAddMemoItem}>Add Memo Item</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemoApp;

