const analyzeTodo=useMemo(()=>{
    const totalCount = TodoEditor.length;
    const doneCount = TodoEditor.filter((it)=>it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
        totalCount,
        doneCount,
        notDoneCount,
    };
},[todo]);
const{totalCount, doneCount, notDoneCount} = analyze;