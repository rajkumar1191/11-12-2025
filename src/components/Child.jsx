import React from "react";
import useFetch from "../hooks/useFetch";

function Child({ onClick }) {
  const { data, loading, error } = useFetch("/posts");

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  console.log("Child component rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Child Component</h3>
      <button onClick={onClick}>Child Button</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Child);
