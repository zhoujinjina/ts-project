import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addCount = (a:string):never => {
    setCount(count + 1);
    throw new Error
  };
  return <></>;
}

export default App;
