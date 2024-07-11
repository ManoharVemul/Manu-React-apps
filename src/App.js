//import logo from './logo.svg';
import './App.css';
// import { UnorderList } from "./unorderlist";
// import OrderList from "./orderlist";
// import Table from "./table";
// import Card from "./card";
//import ArrMap from './arrMap';
import CardList from './fakestore';
import Header from './haeder';
import './style.css'

function App() {
  const ayyo = {
    display: "grid",
    textAlign: "center",
    gridTemplateColumns: "auto auto auto auto",
    gap: "20px",


    borderRadius: "15px"

  }
  const ayyi = {
    position: "fixed",
    display: "grid",
    width:"100%",
    gridTemplateColumns: "auto auto auto auto auto",
    backgroundColor: "#10908D"



  }
  return (
    <>
      <div style={ayyi}>
        <Header></Header>
      </div>
      <div style={ayyo}>  <CardList></CardList>  </div>


    </>
  );
}

export default App