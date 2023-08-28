// Import necessary React modules and action creators.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Import the addTodo action creator.
import { addTodo } from "../actions";

// Define the AddTodoForm component.
const AddTodoForm = () => {
  // Local state for the input field content.
  const [content, setContent] = useState("");
  // Get the Redux dispatch function.
  const dispatch = useDispatch();

  // Handler for form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    if (content.trim() !== "") {
      // Check if the content is not blank.
      dispatch(addTodo(content)); // Dispatch the addTodo action with the content.
      setContent(""); // Clear the input field after adding the todo.
    }
  };

  // Render the form for adding a new todo.
  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)} // Update the local state with input changes.
        placeholder="Enter your task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

// Export the AddTodoForm component as the default export of this module.
export default AddTodoForm;
