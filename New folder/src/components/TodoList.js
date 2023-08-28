import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.data);

  return (
    <div className="todo-list">
      {Object.keys(todos).map((id) => (
        <TodoItem
          key={id}
          id={id}
          content={todos[id].content}
          completed={todos[id].completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
