import React, { useRef, useState } from 'react'
import UserList from './UserList';
import CreateUser from './CreateUser';

export default function App() {
  const[inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;

  const onChange=e=>{
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const [users, setUsers] = useState ([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user={
      id:nextId.current,
      username,
      email
    }; //username과 email로 새로운 객체를 만든 후

    setUsers([...users, user]);
    //...users 기존의 사용자에 user가 추가(배열 추가)
    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1;
  }
  
  const onRemove = id => {
    //user.id가 파라미터로 일치하지 않은 원소만 추출해서 새로운 배열을 만듦
    //user.id가 id인 것을 제거
    setUsers(users.filter(user=> user.id !== id));
  }

  const onToggle=id=>{
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active : !user.active} : user
      )
    );
  }

  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  )
}
