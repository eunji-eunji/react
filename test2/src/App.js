import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    // <> 태그가 두 개 이상일 경우 감싸줘야 함. div 또는 빈 <> 태그로.
    <Wrapper> 
    <Hello name="react" color="red" isSpecial={true}/>
    {/* true 없으면 참. isSpecial = isSpecial={true} */}
    <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;