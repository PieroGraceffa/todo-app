// Import necessary React modules and hooks.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Import action creators for Redux actions.
import { deleteTodo, editTodo, completeTodo } from "../actions";

// Define the TodoItem component.
const TodoItem = ({ id, content, completed }) => {
  const dispatch = useDispatch(); // Get the Redux dispatch function.
  // State to track editing mode.
  const [isEditing, setIsEditing] = useState(false);
  // State to track edited content.
  const [newContent, setNewContent] = useState(content);

  // Handler to initiate the editing mode.
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handler to save the edited content and exit editing mode.
  const handleSave = () => {
    dispatch(editTodo(id, newContent)); // Dispatch an editTodo action.
    setIsEditing(false);
  };

  // Handler to delete the todo item.
  const handleDelete = () => {
    dispatch(deleteTodo(id)); // Dispatch a deleteTodo action.
  };

  // Handler to mark the todo item as completed.
  const handleComplete = () => {
    dispatch(completeTodo(id)); // Dispatch a completeTodo action.
  };

  // Render the TodoItem component.
  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{content}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {!completed && <button onClick={handleComplete}>Completed</button>}
        </div>
      )}
    </div>
  );
};

// Export the TodoItem component as the default export of this module.
export default TodoItem;
