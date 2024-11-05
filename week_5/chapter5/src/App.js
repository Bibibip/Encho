import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp(){
  return <div>child component</div>;
}
function Zero(){
  return <div>제주 청귤 아이스티 녹차</div>;
}

function App() {
  // const BodyProps = {
  //   name: "이정환",
  //   location: "부천시",
  //   favorList: ["파스타","빵","떡볶이"],
  // };
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
        <Zero />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
