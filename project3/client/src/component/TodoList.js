import React, { useState } from 'react'
import "./TodoList.css"
import TodoItem from './TodoItem'

export default function TodoList({todos, onToggle, onDelete}) {
  const [search, setSearch] = useState('');

  const filteredTodos = search === '' ? todos 
  : todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='TodoList'>
        <h4>To do List ✨ </h4>
        <input className='searchbar' onChange={(e) => setSearch(e.target.value)} 
        placeholder='검색어를 입력하세요.' value={search}/>
        <div className='list_wrapper'>
            {filteredTodos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}
                onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </div>
    </div>
  )
}
