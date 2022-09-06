import React, { useMemo } from "react";

const Child = ({ childCount, incrementChildCount }) => {
  //==================================
  //                creating delay, everytime child rerender it computes
  //====================================
//   let computing = 0;
//   for (let i = 0; i < 500000000; i++) {
//     computing++;
//   }
  //==================================
  //                using use memo
  //====================================
    const computing = useMemo(() => {
      let computing = 0;
      for (let i = 0; i < 500000000; i++) {
        computing++;
      }
      return computing;
    }, []);
  console.count("Child render");

  return (
    <>
      <div>
        <p>Child State: {childCount}</p>
        <p>Computing: {computing.toLocaleString()}</p>
        <button onClick={incrementChildCount}>Increment Child</button>
      </div>
    </>
  );
};

export default React.memo(Child);

// passing func as props breaks memo
// i-e  export default React.memo(Child);
// each time child is rendered it creates a new referance/instance of incrementChildCount func
// to avoid rerendering we must memorize incrementChildCount func
