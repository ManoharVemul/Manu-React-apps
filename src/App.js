//import logo from './logo.svg';
import './App.css';
import { UnorderList } from "./unorderlist";
import OrderList from "./orderlist";
import Table from "./table";
import Card from "./card";

function App() {

  return (
    <div>
      <UnorderList></UnorderList>
      <OrderList></OrderList>
      <Table></Table><br/>
      <Card></Card>
    </div>
  );
}

export default App