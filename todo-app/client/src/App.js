import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  //전체 가져오기
  const fetchTodos=async()=>{
    const res=await axios.get('http://localhost:5000/todos');
    setTodos(res.data);
  }

  //처음 랜더링 될 때 한 번만 fetchTodos();->전체 리스트를 서버에서 호출
  useEffect(()=> {
    fetchTodos();
  }, []);

  //완료 토글 - 업데이트
  const toggleTodo = async(id, completed) => {
    await axios.put(`http://localhost:5000/todos/${id}`, {completed:!completed});
    fetchTodos();
  }

  //삭제
  const deleteTodo=async(id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  }

  //공백이 아니면, 새로운 할 일을 서버에 post 요청으로 추가
  const addTodo = async () => {
    if(!text.trim()) return;
    await axios.post('http://localhost:5000/todos', {text});
    setText(''); //성공적으로 추가되면, 입력란을 비움
    fetchTodos();
  }
  return (
    <div style={{padding: '2rem'}}>
      <h1>🎫 Todo List</h1>
      <input
      type="text"
      placeholder='할 일을 입력하세요.'
      value={text}
      onChange={(e)=> setText(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            <span style={{
              textDecoration:todo.completed ? 'line-through' : 'none',
              marginRight: '1rem', 
              cursor: 'pointer'
            }} onClick={()=>toggleTodo(todo.id, todo.completed)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
