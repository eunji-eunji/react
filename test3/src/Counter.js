import React, { useState } from 'react'

export default function  Counter() {
    const[number, setNumber] = useState(0);
    const onIncrease = () => {
        console.log("+1");
        // setNumber(number+1);
        setNumber(prevNumber => prevNumber +1);
    }
    const onDecrease = () => {
        console.log("-1");
        // setNumber(number-1);
        setNumber(prevNumber => prevNumber -1);
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}