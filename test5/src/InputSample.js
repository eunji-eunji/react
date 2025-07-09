import React, { useState } from 'react'

export default function InputSample() {
    const[inputs, setInput] = useState({
        name:'',
        nickname:''
    });
    //useRef 특정 Dom 선택
    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

    const onChange=(e)=>{
        const {value, name} = e.target; //우선 e.target에서 name과 value를 추출
        setInput({
            ...inputs,  //기존 input값 객체 복사
            [name] : value//name 키를 가진 값을 value로 설정
        });
    }

    const onReset=()=>{
        setInput({
            name:'',
            nickname:''
        });
        // nameInput.current.focus();
    }
  return (
    <div>
        <input name='name' placeholder='이름' onChange={onChange} value={name}></input>
        <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}></input>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name}({nickname})
        </div>
    </div>
  )
}
