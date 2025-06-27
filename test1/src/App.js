import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Button from "./Button";

function App() {
  const handleClick=() =>{
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
      <Button onClick={handleClick} text="눌러보세요."/>
    </Wrapper>
  );
}

export default App;
