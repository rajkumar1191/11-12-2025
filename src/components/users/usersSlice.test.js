import reducer, { fetchUsers } from "./usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { vi } from "vitest";

global.fetch = vi.fn(); // mock global fetch for Vitest

describe("users async thunk", () => {
  test("fetchUsers fulfilled updates state", async () => {
    // mock API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 1, name: "Raj" }]
    });

    const store = configureStore({
      reducer: { users: reducer },
    });

    await store.dispatch(fetchUsers());

    const state = store.getState().users;

    expect(state.list.length).toBe(1);
    expect(state.list[0].name).toBe("Raj");
    expect(state.status).toBe("succeeded");
  });
});
