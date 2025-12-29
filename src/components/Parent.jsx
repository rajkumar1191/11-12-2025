import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button inside child clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parent Component</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
