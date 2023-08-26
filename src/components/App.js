import React, { useState, useEffect, useMemo } from 'react';

const Todo = ({ text }) => {
  return <p>{text}</p>;
};

const MemoSkill = React.memo(({ skill }) => {
  console.log(`Rendering MemoSkill for ${skill}`);
  return <li>{skill}</li>;
});

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState('');
  const [inputSkill, setInputSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleMemoChange = (event) => {
    setMemoText(event.target.value);
  };

  const handleMemoSubmit = () => {
    if (memoText.length > 5) {
      setTodos([...todos, memoText]);
      setMemoText('');
    }
  };

  const handleSkillChange = (event) => {
    setInputSkill(event.target.value);
  };

  const handleSkillSubmit = () => {
    if (inputSkill.length > 0) {
      setSkills([...skills, inputSkill]);
      setInputSkill('');
    }
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="App" id="main">
      <h2>React.useMemo</h2>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} id={`todo-${index}`}/>
      ))}
      <p>
        <button onClick={handleAddTodo} id="add-todo-btn">Add Todo</button>
      </p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} id="incr-cnt">0</button>
      <h2>Expensive Calculation</h2>
      <p id='calc'>{1_000_000_000}</p>
      <h2>React.memo</h2>
      <div>
        <input type="text" value={inputSkill} onChange={handleSkillChange} id="skill-input" />
        <button onClick={handleSkillSubmit} id="skill-btn">Add Skill</button>
      </div>
      <ul>
        {skills.map((skill, index) => (
          <MemoSkill key={index} skill={skill} id={`todo-${index}`}/>
        ))}
      </ul>
      <div id="item-jumbotron">
       
      </div>
    </div>
  );
}

export default App;

