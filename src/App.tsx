import { FC, useState } from "react";
import "./App.css";
interface my{
  name:String;
  age:number;
}
const App: FC = () => {
  const [count, setCount] = useState(0);
  const add = (name:my): void => {
    setCount(count + 1);
  };
  return <>{count}
  <button onClick={()=>add({name:"slice",age:1})}>点击</button>
  </>;
};

export default App;
