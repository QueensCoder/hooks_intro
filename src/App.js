import React, { useState } from "react";

const state = [
  { text: "learn hooks", isComp: false },
  { text: "build with K8", isComp: false },
  { text: "walk doggy", isComp: false }
];

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  // on click of completed item is crossed out in todo list

  return (
    <div style={{ textDecoration: todo.isComp ? "line-through" : "" }}>
      {todo.text}{" "}
      <div>
        <button onClick={() => completeTodo(index)}>Complete Todo</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
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
    setTodos(newTodos); //setTodo changes state to passed in arg?
  };

  const completeTodo = idx => {
    const newTodos = [...todos];
    newTodos[idx].isComp = true;
    setTodos(newTodos);
  };

  const removeTodo = idx => {
    const newTodos = [...todos]; //spread state then mutate
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            index={idx}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
