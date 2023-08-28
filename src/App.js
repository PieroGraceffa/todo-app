// Import the necessary modules and components from React and local files.
import React from "react";
// Import the CSS styles for the app.
import "./App.css";
// Import the TodoList component.
import TodoList from "./components/TodoList";
// Import the AddTodoForm component.
import AddTodoForm from "./components/AddTodoForm";

// Define the main functional component named App.
function App() {
  // The component's return statement, rendering the JSX elements.
  return (
    <div className="App">
      {" "}
      {/* The main container with a CSS class "App". */}
      <h1>Piero's To-do App</h1> {/* Heading displaying the app's title. */}
      <AddTodoForm /> {/* Render the AddTodoForm component for adding todos. */}
      <TodoList /> {/* Render the TodoList component for displaying todos. */}
    </div>
  );
}

// Export the App component as the default export of this module.
export default App;
