import React, { useRef, useState } from 'react'
import "./TodoEditor.css"
export default function TodoEditor({onCreate}) {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
        //키보드로 입력하는 내용을 content에 반영
    } ;
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return ;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if(e.keyCode ===13){
            onSubmit();
        }
    };
  return (
    <div className='TodoEditor'>
        <h4>새로운 Todo 작성하기 🖋</h4>
        <div className='editor_wrapper'>
            <input onKeyDown={onKeyDown} ref={inputRef} value={content} 
            onChange={onChangeContent} placeholder='새로운 Todo...'/>
            <button onClick={onSubmit}>추가</button>
        </div>
    </div>
  )
}
