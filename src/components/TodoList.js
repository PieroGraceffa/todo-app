// Import necessary React modules and components.
import React from "react";
import { useSelector } from "react-redux";
// Import the TodoItem component.
import TodoItem from "./TodoItem";

// Define the TodoList component.
const TodoList = () => {
  const todos = useSelector((state) => state.data); // Access todo data from the Redux store.

  return (
    <div className="todo-list">
      {/* Map through the todo items and render a TodoItem component for each one. */}
      {Object.keys(todos).map((id) => (
        <TodoItem
          key={id} // Unique key for React to efficiently update the list.
          id={id} // Pass the todo item's ID to the TodoItem component.
          content={todos[id].content} // Pass the content of the todo item.
          completed={todos[id].completed} // Pass the completion status of the todo item.
        />
      ))}
    </div>
  );
};

// Export the TodoList component as the default export of this module.
export default TodoList;
