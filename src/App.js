import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // using useCallback
  const memoIncChild = useCallback(() => {
    incrementChildCount(childCount + 1);
  }, [childCount]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementChildCount = (inc) => {
    setChildCount(childCount + 1);
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
        <button onClick={incrementChildCount}>Child Inc Parent</button>
      </header>
    </div>
  );
}

export default App;

// useCallback is used to memorize the fun and to satisfy React.memo() condition for prop changing
// now when parent inc the fun and childCount doesnot change hence child will not rerender
// but when child is inc it will rerender child and parent
