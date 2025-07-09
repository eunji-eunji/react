import React, { useState } from 'react'
import "./TodoList.css"
import TodoItem from './TodoItem'

export default function TodoList({todo, onUpdate, onDelete}) {
  const [search, setSearch] = useState('');

const onChangeSearch=(e) => {
  setSearch(e.target.value);
}

const getSearchResult=() => {
  //빈 문자면 그대로 todo, 아니면 일치하는 아이템만 필터링해 반환
  return search === "" ? todo : todo.filter((it) => 
  it.content.toLowerCase().includes(search.toLowerCase()))
  //대소문자 구별하지 않게
}

  return (
    <div className='TodoList'>
        <h4>Todo List ✨ </h4>
        <input className='searchbar' onChange={onChangeSearch} 
        placeholder='검색어를 입력하세요.'/>
        <div className='list_wrapper'>
            {getSearchResult().map((todo)=>(
                <TodoItem {...todo} key={todo.id}
                onUpdate={onUpdate} onDelete={onDelete}/>
            ))}
        </div>
    </div>
  )
}
