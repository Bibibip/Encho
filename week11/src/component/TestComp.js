import {useReducer} from "react";
function reducer(state, action){ //새로운 함수 reducer를 컴포넌트 밖에 만들기
    switch (action.type){
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
} 
function TestComp(){
    const [count, dispatch] = useReducer(reducer, 0); //첫 번째 인수: 함수 reducer, 두 번째 인수: State의 초깃값
    //배열의 첫번째 요소: State 변수, 두 번째 요소: 상태 변화를 촉발하는 dispatch 함수
    return( //함수 dispatch에는 인수로 객체(State의 변경 정보, 'action 객체') 전달
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={()=>dispatch({type:"INCREASE", data:1})}> 
                    +</button> 
                <button onClick={()=>dispatch({type:"DECREASE", data:1})}>
                    -</button>
                <button onClick={()=>dispatch({type:"INIT"})}>
                    0으로 초기화</button>
            </div>
        </div>
    );
}
export default TestComp;
