import React, {
  useState,
  useRef,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useDebugValue,
  useId,
  useTransition,
  useDeferredValue,
  useSyncExternalStore,
} from "react";

// --- Simple external store for useSyncExternalStore demo ---
const createExternalStore = () => {
  let value = 0;
  const listeners = new Set();
  return {
    getSnapshot: () => value,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    increment: () => {
      value += 1;
      listeners.forEach((l) => l());
    },
    set: (v) => {
      value = v;
      listeners.forEach((l) => l());
    },
  };
};

const externalCounter = createExternalStore();

function useExternalCounter() {
  // useSyncExternalStore takes (subscribe, getSnapshot, getServerSnapshot)
  return useSyncExternalStore(
    externalCounter.subscribe,
    externalCounter.getSnapshot,
    externalCounter.getServerSnapshot || (() => 0)
  );
}

// --- useDebugValue example: custom hook that exposes online status ---
function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  React.useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);
  useDebugValue(online ? "online" : "offline"); // visible in React DevTools
  return online;
}

// --- useImperativeHandle example: child exposing imperative methods ---
const ImperativeInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current && inputRef.current.focus(),
    clear: () => inputRef.current && (inputRef.current.value = ""),
  }));
  return <input ref={inputRef} placeholder="Focus via parent (imperative)" />;
});

// --- useLayoutEffect example (measure before paint) ---
function LayoutMeasure() {
  const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      // Runs synchronously after DOM mutations but before paint,
      // so setting state here avoids a visible layout flicker.
      setBoxWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        ref={boxRef}
        style={{ width: "50%", background: "#eef", padding: "0.5rem" }}
      >
        This box is 50% width of its container.
      </div>
      <small>Measured width (useLayoutEffect): {Math.round(boxWidth)}px</small>
    </div>
  );
}

// --- useTransition / useDeferredValue example ---
function TransitionSearch() {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredSearch = useDeferredValue(search);

  // Create a large list to make filtering expensive
  const items = React.useMemo(() => {
    return Array.from({ length: 6000 }, (_, i) => `Item ${i + 1}`);
  }, []);

  // Use the deferred value to avoid blocking the input while filtering
  const filtered = React.useMemo(() => {
    if (!deferredSearch) return items.slice(0, 100);
    return items.filter((it) =>
      it.toLowerCase().includes(deferredSearch.toLowerCase())
    );
  }, [items, deferredSearch]);

  const onChange = (e) => {
    const v = e.target.value;
    // mark update as low priority to keep UI responsive
    startTransition(() => {
      setSearch(v);
    });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4>useTransition / useDeferredValue</h4>
      <input
        placeholder="Type to search (transitioned)"
        value={search}
        onChange={onChange}
      />
      <div>
        {isPending ? (
          <em>Updating results...</em>
        ) : (
          <small>Results ready</small>
        )}
      </div>
      <div
        style={{
          maxHeight: 150,
          overflow: "auto",
          border: "1px solid #ddd",
          marginTop: 8,
        }}
      >
        {filtered.slice(0, 200).map((it) => (
          <div key={it}>{it}</div>
        ))}
      </div>
      <small>
        Showing {filtered.length} matches (slice used for performance)
      </small>
    </div>
  );
}

export default function AdvancedHooks() {
  const imperativeRef = useRef();
  const online = useOnlineStatus();
  const id1 = useId();
  const id2 = useId();

  const externalValue = useExternalCounter();

  return (
    <div style={{ padding: 20 }}>
      <h2>Advanced Hooks Demo</h2>

      {/* useId example */}
      <section style={{ marginBottom: "1rem" }}>
        <h4>useId</h4>
        <label htmlFor={id1}>First name:</label>
        <input id={id1} placeholder="First name" style={{ marginLeft: 8 }} />
        <br />
        <label htmlFor={id2}>Last name:</label>
        <input id={id2} placeholder="Last name" style={{ marginLeft: 8 }} />
        <p style={{ marginTop: 6 }}>
          <small>
            useId helps generate stable, unique ids for accessibility.
          </small>
        </p>
      </section>

      {/* useImperativeHandle example */}
      <section style={{ marginBottom: "1rem" }}>
        <h4>useImperativeHandle</h4>
        <ImperativeInput ref={imperativeRef} />
        <div style={{ marginTop: 8 }}>
          <button onClick={() => imperativeRef.current?.focus()}>
            Focus child
          </button>
          <button
            onClick={() => imperativeRef.current?.clear()}
            style={{ marginLeft: 8 }}
          >
            Clear child
          </button>
        </div>
        <p style={{ marginTop: 6 }}>
          <small>
            Imperative handles let parent call imperative methods on child
            components safely.
          </small>
        </p>
      </section>

      {/* useLayoutEffect example */}
      <section>
        <h4>useLayoutEffect</h4>
        <LayoutMeasure />
        <p>
          <small>
            useLayoutEffect runs before the browser paints — useful for reading
            layout & synchronously updating the DOM to avoid flicker.
          </small>
        </p>
      </section>

      {/* useTransition / useDeferredValue example */}
      <section>
        <TransitionSearch />
      </section>

      {/* useDebugValue example */}
      <section style={{ marginTop: 12 }}>
        <h4>useDebugValue</h4>
        <div>
          Online status:{" "}
          <strong style={{ color: online ? "green" : "red" }}>
            {online ? "Online" : "Offline"}
          </strong>
        </div>
        <p>
          <small>
            useDebugValue lets custom hooks provide helpful labels in React
            DevTools (not visible in normal UI).
          </small>
        </p>
      </section>

      {/* useSyncExternalStore example */}
      <section style={{ marginTop: 12 }}>
        <h4>useSyncExternalStore</h4>
        <div>
          External counter: <strong>{externalValue}</strong>
        </div>
        <div style={{ marginTop: 6 }}>
          <button onClick={() => externalCounter.increment()}>
            Increment external store
          </button>
          <button
            onClick={() => externalCounter.set(0)}
            style={{ marginLeft: 8 }}
          >
            Reset external store
          </button>
        </div>
        <p style={{ marginTop: 6 }}>
          <small>
            useSyncExternalStore safely subscribes to external stores with
            consistent updates.
          </small>
        </p>
      </section>
    </div>
  );
}
