import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMEMT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = ()=> {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
        <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>
        <button onClick={()=>dispatch({type: 'INCREMEMT'})}>+1</button>
        <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};
export default Counter;
