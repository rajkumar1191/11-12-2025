import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, increamentByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: "1rem" }}>
      <h4>Counter</h4>
      <h3>Value: {count}</h3>
      <div>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>
      </div>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(increamentByAmount(Number(amount) || 0))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
