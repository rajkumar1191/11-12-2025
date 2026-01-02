/* eslint-disable no-undef */
import reducer, { increament, decreament, increamentByAmount } from "./counterSlice";

describe("counter slice", () => {
  test("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({ value: 0 });
  });

  test("increment should increase value", () => {
    const state = reducer({ value: 0 }, increament());
    expect(state.value).toBe(1);
  });

  test("decrement should decrease value", () => {
    const state = reducer({ value: 3 }, decreament());
    expect(state.value).toBe(2);
  });

  test("incrementByAmount should add payload", () => {
    const state = reducer({ value: 5 }, increamentByAmount(10));
    expect(state.value).toBe(15);
  });
});
