import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementChildCount = () => {
    setChildCount(childCount + 1);
  };
  console.count("Parent render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Parent: {count}</p>
        <button onClick={incrementCount}>increntment {count}</button>
        <Child childCount={childCount} />
        <br />
        <button onClick={incrementChildCount}>Child Inc Parent</button>
      </header>
    </div>
  );
}

export default App;
