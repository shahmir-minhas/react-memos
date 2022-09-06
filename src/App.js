import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // using useCallback
  const memoIncChild = useCallback((inc) => {
    incrementChildCount(inc);
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementChildCount = (inc) => {
    setChildCount(inc);
  };

  console.count("Parent render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Parent: {count}</p>
        <button onClick={incrementCount}>increntment</button>

        <Child childCount={childCount} incrementChildCount={memoIncChild} />
        <br />
        <button onClick={() => incrementChildCount(childCount + 1)}>
          Child Inc Parent
        </button>
      </header>
    </div>
  );
}

export default App;
