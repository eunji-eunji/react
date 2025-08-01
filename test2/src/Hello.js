import React from 'react';

// 구조분해할당 - 직접 전달
function Hello({color, name="이름없음", isSpecial}) {
  return <div style={{color}}>
    {isSpecial ? <b>*</b> : null}
    안녕하세요 {name}</div>
}

export default Hello;