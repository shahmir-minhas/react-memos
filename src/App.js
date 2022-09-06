import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { useState } from "react";

function App() {
  console.count("Parent");
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Parent</p>
        <button onClick={increment}>increment {counter}</button>
        <Child />
      </header>
    </div>
  );
}

export default App;
