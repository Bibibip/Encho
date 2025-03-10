import { createAction } from 'redux-actions';
//import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input //전달받은 파라미터는 액션 객체 안에 추가 필드로 들어감
// });
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; //insert가 호출될 때마다 1씩 더해짐
// export const insert = text => ({
//     type: INSERT,
//     todo:{
//         id: id++,
//         text,
//         done: false
//     }
// });
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });
export const toggle = createAction(TOGGLE, id => id);

// export const remove = id => ({
//     type: REMOVE,
//     id
// });
export const remove = createAction(REMOVE, id => id);

//초기 상태 및 리듀서 함수 만들기
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

// function todos(state=initialState, action){
//     switch(action.type){
//         case CHANGE_INPUT:
//             return{
//                 ...state, //기존 상태 복사
//                 input: action.input  //input 값을 액션에서 받은 값으로 변경
//             };
//         case INSERT:
//             return{
//                 ...state,
//                 todos: state.todos.concat(action.todo)  //새로운 todo 항목을 기존 배열에 추가 
//             };
//         case TOGGLE:  //특정 todo 항목의 완료 상태(done)을 토글 
//             return{
//                 ...state,
//                 todos: state.todos.map(todo => //todos 배열을 순회하며 각 todo 확인 
//                     todo.id === action.id? {...todo, done: !todo.done} : todo
//                 ) //액션으로 전달받은 id와 일치하는 항목인지 체크 
//                 //true일 경우 done 값을 반전(!todo.done)하고 나머지 값을 그대로 유지 
//             };
//         case REMOVE:
//             return{
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };  //액션으로 전달받은 id와 일치하지 않는 항목만 유지 
//         default:
//             return state;
//     }
// }

//handleActions 사용
const todos = handleActions(
    {
      [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
      [INSERT]: (state, { payload: todo }) => ({
        ...state,
        todos: state.todos.concat(todo),
      }),
      [TOGGLE]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      }),
      [REMOVE]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id),
      }),
    },
    initialState,
  );

export default todos;
