import React, { useReducer } from "react";

// action is like an action in redux
// action is recived by dispatching when using userReducer
const reducer = (state, { type }) => {
  switch (type) {
    case "INCREMENT":
      console.log("got to increment");
      return state + 1;
    case "DECREMENT":
      console.log("got here decremnt");
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};

export default Counter;
