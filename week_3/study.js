let food = ["짜장면", "피자", "치킨"];
const newLength = food.push("탕수육"); 

console.log(food); // ["짜장면", "피자", "치킨", "탕수육"]
console.log(`새로운 배열의 길이: ${newLength}`); // 새로운 배열의 길이: 4
console.log(newLength);

//순회 메서드 - forEach
//탐색 메서드 - indexOf : 배열에서 특정 값의 첫 번째 인덱스 반환
//findIndex : 배열에서 조건을 만족하는 첫 번째 인덱스 반환
//find : 배열에서 조건을 만족하는 첫 번째 '요소' 반환
//filter : 베열에서 조건을 만족하는 요소를 모아 새로운 배열로 반환

//변형 메서드 - map : 배열의 각 요소에 전달받은 콜백함수를 적용해 새로운 배열 반환
//sort : 배열 정렬. 배열 자체 수정 일어남
//join : 구분자를 인수로 전달하여 배열 요소들을 하나의 문자열로 반환
//reduce : 배열의 각 요소를 누적처리하여 하나의 값으로 반환

//Date 객체
//월 단위는 0부터 시작
//날짜 요소 수정 - setFullYear(), setMonth()...

//비동기 처리
//비동기 퍼리는 작업을 실행하는 동안 다른 작업을 동시에 병렬적으로 처리
//setTimeout 함수. 
//프로미스 - 대기(pending), 성공(fulfilled), 실패(rejected)
//