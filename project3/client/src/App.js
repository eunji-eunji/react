import { useEffect, useState } from "react";

import "./App.css"
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
import axios from 'axios';

// 상태 변화 로직
//state - 현재 할 일 리스트. action:dispatch - 전달된 액션 객체

function App() {
  const [todos, setTodos] = useState([]);

  //전체 가져오기
  const fetchTodos=async()=>{
    const res=await axios.get('http://localhost:5000/todos');
    setTodos(res.data);
  }

    useEffect(()=> {
      fetchTodos();
    }, []);

  const toggleTodo = async (id, completed) => {
    await axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>🎫 Todo List</h1>
      <Header />
      <TodoEditor fetchTodos={fetchTodos} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;