function odd_num(count, callback){
    for (let i=1;i<=count;i++){
        callback(i*2-1);
    }
}
function print_num(count){
    console.log(count);
}
odd_num(5, print_num);