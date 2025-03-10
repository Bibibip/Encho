//1번
//store.subscribe(listener)

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.number - 1}),
    },
    initialState,
);

export default counter;