import React, { useState } from 'react'
import axios from 'axios';
import "./TodoEditor.css"

export default function TodoEditor({fetchTodos}) {
    const [text, setText] = useState("");

    const onSubmit = async () => {
    if(!text.trim()) return;
    await axios.post('http://localhost:5000/todos', {text});
    setText(''); //성공적으로 추가되면, 입력란을 비움
    fetchTodos();
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    };

  return (
    <div className='TodoEditor'>
        <h4>새로운 To do List 작성하기 🖋</h4>
        <div className='editor_wrapper'>
            <input onKeyDown={onKeyDown} type="text" value={text} 
            onChange={(e)=>setText(e.target.value)} placeholder='새로운 To do List를 작성하세요.'/>
            <button onClick={onSubmit}>추가</button>
        </div>
    </div>
  );
}
