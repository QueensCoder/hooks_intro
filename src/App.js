import React, { useState } from "react";

const state = [
  { text: "learn hooks", isComp: false },
  { text: "build with K8", isComp: false },
  { text: "walk doggy", isComp: false }
];

const Todo = ({ todo, index }) => {
  return <div>{todo.text}</div>;
};

const TodoForm = ({ addTodo }) => {
  // value starts at empty string
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState(state);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    console.log(setTodos);
    setTodos(newTodos); //setTodo changes state to passed in arg?
  };
  return (
    <div className="App">
      <ul>
        {todos.map((todo, idx) => (
          <Todo key={idx} index={idx} todo={todo} />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
