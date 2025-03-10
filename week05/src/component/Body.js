import React from "react";
import "./Body.css";
    function Body({name, location, favorList}){
        console.log(name, location, favorList);
        return(
            <div className = "body">
                {name}은 {location}에 거주합니다.
                <br />
                {favorList.length}개의 음식을 좋아합니다.
            </div>
        );

    }
    function Body({zero}){
        console.log(zero);
        return (
            <div className = "body">
                {zero};   
            </div>
        );
    }
    
    Body.defaultProps = {
        favorList:[],
    };
// function Body({children}){
//     //const {name, location, favorList} = props;
//     //console.log(name, location, favorList);
//     console.log(children);
//     return <div className="body">{children}</div>;
    // return (
    //     <div className = "body">
    //         {name}은 {location}에 거주합니다.
    //         <br />
    //         {favorList.length}개의 음식을 좋아합니다.
    //     </div>
    //     );
//}
// Body.defaultProps = {
//     favorList: [],
// };
    // const num = 200;
    // if (num % 2 === 0){
    //     return <div>{num}은 짝수입니다.</div>;
    // }
    // else{
    //     return <div>{num}은 홀수입니다.</div>;
    // }

    // return(
    //     <>
    //         <h2>
    //             {num}은 {num%2===0 ? "짝수" : "홀수"}입니다.
    //         </h2>
    //     </>
    // );


export default Body;

//객체 자료형(함수, 배열)은 렌더링할 수 없음... -> 프로퍼티 접근 표기법 이용
//<img />, <input /> 으로 닫힘 규칙 지키기
//반환하는 모든 태그는 반드시 최상위 태그로 감싸기
//HTML 태그를 최상위 태그로 사용하지 않으려면, <React.Fragment> </React.Fragment>또는 빈 태그<></> 태그 사용
//if 문은 표현식에 해당하지 않으므로 JSX와 함께 사용할 수 없지만, 삼항 연산자를 사용하면 가능
