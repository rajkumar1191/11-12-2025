import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import Counter from "./counter";

function renderWithStore(ui) {
  const store = configureStore({
    reducer: { counter: counterReducer },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

test("increments count when button clicked", () => {
  renderWithStore(<Counter />);

  const count = screen.getByTestId("count");
  const btn = screen.getByText("+");

  expect(count.textContent).toBe("0");

  fireEvent.click(btn);
  expect(count.textContent).toBe("1");
});
