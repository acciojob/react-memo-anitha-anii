import React,{useState} from "react";

function TodoList(){
    const[text,setText]=useState('');
    const [todo, setTodo] = useState([]);

  function displaytodo() {
    if(text!==''){
     setTodo([...todo,text]);
     setText('');
  }
  }
  return(
    <div>
        <h2>React.memo</h2>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={displaytodo}>submit</button>
        <ul >
       {todo.map((item, index) => (
          <li key={index}>{item}</li>
        
      ))} 
      </ul>
    </div>
  )
}

export default TodoList;