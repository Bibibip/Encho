const Controller = ({ handleSetCount }) => {
    return (
        <div>
        <button onClick={()=> handleSetCount(1)}>+1</button>
        <button onClick={()=> handleSetCount(5)}>-+5</button>
        <button onClick={()=> handleSetCount(-1)}>-1</button>
        <button onClick={()=> handleSetCount(-5)}>-5</button>
        <button onClick={()=> handleSetCount(4)}>+4</button>
        {/* <button onClick={()=> handleSetCount(1)}>+1</button> */}
        </div>
    );
};
export default Controller;