//퀴즈 1
let arr = ['apple', 'banana', 'coconut'];
let new_arr = [];
arr.forEach((item)=>{
    new_arr.push(item.toUpperCase());
});
console.log(new_arr);

//퀴즈 2
function plus(num1, num2, cb){
    setTimeout(()=>{
        const plus_num = num1 + num2;
        cb(plus_num);
    }, 3000);
}
plus(1, 1, (res)=>{console.log(res)});
console.log("계산하는 중");
