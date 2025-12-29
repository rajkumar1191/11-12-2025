import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  for (let i = 0; i < 1000000000; i++) {
    // Simulating heavy computation
  } 
  return num * 2;
};

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Memoized value
  const doubledValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <h3>Heavy Calculation Result: {doubledValue}</h3>
    </div>
  );
}

export default UseMemoExample;
