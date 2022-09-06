import React, { useState } from "react";

const Child = () => {
  const [childCounter, setChildCounter] = useState(0);
  console.count("child render");
  const incrementChild = () => {
    setChildCounter(childCounter + 1);
  };
  return (
    <>
      <div className="child App">
        <p>Child {childCounter}</p>
        <button onClick={incrementChild}>increment {childCounter}</button>
      </div>
    </>
  );
};

export default React.memo(Child);

// a child will rerender if
// 1- It's state changes
// 2- its props changes
// 3- Parent rerender
