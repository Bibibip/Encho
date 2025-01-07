const onCreacte = (content)=>{
    dispatchEvent({
        type: "CREATE",
        newItem: {
            id: idRef.current,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        },
    });
    idRef.current += 2;
};