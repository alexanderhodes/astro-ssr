import { useStore } from "@nanostores/react";
//import React from "react";
import { $count, decreaseCount, increaseCount } from "../../store/demo.store";

export const Counter = () => {
  // const [count, setCount] = React.useState(0);
  const open = useStore($count);

  const increment = () => {
    increaseCount();
  };
  const decrement = () => {
    decreaseCount();
  };

  return (
    <div className="flex space-x-2">
      <p>Count: {open}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
