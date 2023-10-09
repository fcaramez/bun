import React from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <h1>Count is @ {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

root.render(App);
