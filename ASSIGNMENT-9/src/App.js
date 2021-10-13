import React from "react";
import "./App.css";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="done"onClick={() => completeTodo(index)}>Done</button>
        <button className="remove" onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

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
        className="input"
        placeholder="Type here..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([ ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h1 className="heading">TODO APP</h1>
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
