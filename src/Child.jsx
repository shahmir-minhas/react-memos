import React from "react";

const Child = ({ childCount, incrementChildCount }) => {
  console.count("Child render");
  return (
    <>
      <div>
        <p>Child State: {childCount}</p>
        <button onClick={() => incrementChildCount(childCount + 1)}>
          Increment Child
        </button>
      </div>
    </>
  );
};

export default React.memo(Child);

// passing func as props breaks memo
// i-e  export default React.memo(Child);
// each time child is rendered it creates a new referance/instance of incrementChildCount func
// to avoid rerendering we must memorize incrementChildCount func
