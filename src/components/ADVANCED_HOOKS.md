# Advanced Hooks Demo

## Overview
The demo covers these hooks:
- `useLayoutEffect` — measure layout synchronously before paint (see `LayoutMeasure` component).
- `useImperativeHandle` — expose imperative child methods to parent (see `ImperativeInput`).
- `useDebugValue` — surface hook state labels in React DevTools (see `useOnlineStatus`).
- `useId` — generate stable unique IDs for accessibility (two inputs demo).
- `useTransition` / `useDeferredValue` — mark low-priority updates and defer expensive computations (see `TransitionSearch`).
- `useSyncExternalStore` — subscribe to an external store with consistent updates (see `useExternalCounter`).

---

## Quick explanations

- **useLayoutEffect**
  - Runs after DOM mutations but before the browser paints. Useful for reading layout (e.g., element sizes) and synchronously updating state to avoid visual flicker.
  - Example: measuring a box width and setting state so the initial paint doesn't show an incorrect size.

- **useImperativeHandle**
  - Use with `forwardRef` to expose a safe, constrained imperative API from a child component to a parent. Avoids directly manipulating a child's internals.
  - Example methods: `focus()` and `clear()` on an input.

- **useDebugValue**
  - Lets custom hooks provide debug labels visible in React DevTools. It does not change runtime behavior but improves developer experience.
  - Example: showing `"online"` / `"offline"` for a `useOnlineStatus` hook.

- **useId**
  - Generates stable unique IDs for accessibility (e.g., `htmlFor` + `id` pairing) that avoid collisions when server-side rendering or multiple instances exist.

- **useTransition / useDeferredValue**
  - `useTransition` lets you mark state updates as low-priority to keep UI responsive (returns `isPending` and `startTransition`).
  - `useDeferredValue` returns a deferred version of a value which lags behind the source when React is busy. Useful for expensive filtering of large lists while keeping input snappy.

- **useSyncExternalStore**
  - The recommended way to subscribe to external stores (e.g., custom pub/sub or state outside React) and keep updates consistent with concurrent rendering.
  - Example: a tiny external counter with `getSnapshot`, `subscribe`, and `set`/`increment` methods.
---