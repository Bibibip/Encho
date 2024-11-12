import { useRef, useState } from "react";

function Body() {
  const [num, setNum] = useState("");
  const numRef = useRef();
  
  const handleOnChange = (e) => {
    setNum(e.target.value);
  };
  const handleOnClick = () => {
  	if (num.parseInt % 2 === 0){
    	alert(num + "은(는) 짝수입니다!");
    }
    else{
      alert(num + "은(는) 홀수입니다!");
    }
  };
  return (
    <div> 
      <input ref={numRef} value={num} onChange={handleOnChange} />
      <button onClick={handleOnClick}>짝수/홀수 확인</button>
    </div>
  );
}
export default Body;