import { FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [count, setCount] = useState(0);
  const add = (): void => {
    setCount(count + 1);
  };
  return <>{count}
  <button onClick={add}>点击</button>
  </>;
};

export default App;
