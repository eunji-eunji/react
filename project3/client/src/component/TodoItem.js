import React from 'react'
import "./TodoItem.css"
export default function TodoItem({todo, onDelete, onToggle}) {
  const handleToggle=()=>{
    onToggle(todo.id, todo.completed);
  }

  const handleDelete = () => {
    onDelete(todo.id);
  }
  
  return (
    <div className='TodoItem'>
        <div className='checkbox_col'>
            <input type="checkbox"
             checked={todo.completed}
             onChange={handleToggle}/>
        </div>
        <div className='title_col'>{todo.text}</div>
        <div className='btn_col'>
            <button onClick={handleDelete}>삭제</button>
        </div>
    </div>
  )
}
