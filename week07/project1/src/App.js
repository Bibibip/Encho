import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useState, useEffect, useRef} from "react";
import Even from "./component/Even";
//State 끌어올리기 - 부모 컴포넌트(APP)에서 State 설정. 이벤트 전달은 자식 -> 부모 (단방향 데이터 흐름)
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count+value);
  };
  const handleChangeText = (e) =>{
    setText(e.target.value);
  };

  useEffect(() => {
    if (!didMountRef.current){
      didMountRef.current = true;
      return;
    }
    else{
      console.log("컴포넌트 업데이트"); 
    }
  }
);
useEffect(()=>{
  console.log("캄포넌트 마운트");
}, []); //의존성 배열의 값이 변하면 콜백함수 실행. 의존성 배열이 없으면 리랜더될 때마다 콜백함수 실행
//퀴즈 2번
useEffect(()=>{
  if(!didMountRef.current){
    didMountRef.current = ture;
    return;
  }else{
    setInterval(()=>{
    console.log("5초");}, 5000);
  }});
}



// useEffect(()=>{
//   const intervalID = setInterval(()=>{
//     console.log("깜빡");
//   }, 1000);
//   return ()=>{  //useEffect의 콜백함수가 반환하는 함수: 클린업 함수
//     console.log("클린업");
//     clearInterval(intervalID);
//   };
// });

  return( <div className="App">
  {/* /* /* <h1>Simple Counter</h1>
    <section>
      <input value={text} onChange={handleChangeText}/>
      </section>
    <section>
      <Viewer count = {count}/>
      {count %2 === 0 && <Even />}  State 값이 짝수일 때 Even 컴포넌트 렌더링
      </section>
    <section>
      <Controller handleSetCount = {handleSetCount} />
      </section>
  </div>; */ }
  <header>
    <h1>카운트 컨트롤러</h1>
    </header>
  <main>
  <section>
      <Viewer count = {count}/>
      </section>
  <section>
      <Controller handleSetCount = {handleSetCount} />
      </section>
  </main>
  </div> 
  ); 
    



export default App;
