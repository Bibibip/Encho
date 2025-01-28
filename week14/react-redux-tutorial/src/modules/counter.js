import {createAction, handleActions} from 'redux-actions';

//액션 타입은 대문자로!! (모듈 이름 / 액션 이름)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
//액션 생성 함수 내보내기기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.numer -1}),
    },
    initialState,
);

// function counter(state = initialState, action){
//     switch (action.type){
//         case INCREASE:
//             return {
//                 number: state.number +1
//             };
//         case DECREASE:
//             return {
//                 number: state.number -1
//             };
//         default:
//             return state;
//     }
// }
//리듀서 내보내기 (export default는 단 한 개만 내보낼 수 있음)
export default counter;