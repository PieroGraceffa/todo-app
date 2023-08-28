import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "../actions";

const TodoItem = ({ id, content, completed }) => {
  const dispatch = useDispatch();

  const handleEdit = (newContent) => {
    dispatch(editTodo(id, newContent));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = () => {
    dispatch(completeTodo(id));
  };

  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <span>{content}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {!completed && <button onClick={handleComplete}>Completed</button>}
    </div>
  );
};

export default TodoItem;
