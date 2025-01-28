import React, {useCallback} from 'react';
import Counter from '../components/Counter';
//import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
//import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
// };
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

export default CounterContainer;

// const mapStateToProps = state => ({
//     number: state.counter.number,
//     });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

/* 익명함수 사용 
export default connect(
    state => ({
    number: state.counter.number,
    }),
    dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    }),
)(CounterContainer);
*/ 

//bindActionCreators 사용 
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch =>
//         bindActionCreators(
//         {
//             increase,
//             decrease,
//         },
//         dispatch,
//         ),
// )(CounterContainer);


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);


/* mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어주기 
export default connect(
    state => ({
    number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);
*/