import React, { useReducer, useState } from "react";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const reducer = (state, { type, text, idx }) => {
  switch (type) {
    case ADD_TODO:
      return { todos: [...state.todos, { text, isComp: false }] };
    case TOGGLE_TODO:
      const todos = [...state.todos];
      todos[idx].isComp = true;
      return { todos };
    default:
      return state;
  }
};

const TodoHooks = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: ADD_TODO, text });
          setText("");
        }}
      >
        <input
          value={text}
          type="text"
          onChange={e => setText(e.target.value)}
        />
        {todos.map(({ text, isComp }, idx) => (
          <div
            style={{ textDecoration: isComp ? "line-through" : "" }}
            key={text}
            onClick={() => dispatch({ type: TOGGLE_TODO, idx })}
          >
            {text}
          </div>
        ))}
      </form>
    </div>
  );
};

export default TodoHooks;
