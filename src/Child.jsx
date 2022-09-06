import React from "react";

const Child = ({ childCount }) => {
  console.count("Child render");
  return (
    <>
      <div>
        <p>Child State: {childCount}</p>
        <button>Increment Child</button>
      </div>
    </>
  );
};

export default React.memo(Child);
