// Define the initial state for the todo list.
const initialToDoState = {
  nextId: 1, // This represents the ID that will be assigned to the next todo item.
  data: {}, // This is an object that will store todo items, with IDs as keys.
};

// Define the reducer function that will manage state changes based on actions.
const todoReducer = (state = initialToDoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // When an "ADD_TODO" action is dispatched, a new todo item is added to the state.
      return {
        ...state,
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload.content, // Content of the new todo item.
            completed: false, // Initial completion status of the todo item.
          },
        },
      };
    case "DELETE_TODO":
      // When a "DELETE_TODO" action is dispatched, a todo item is removed from the state.
      const newData = { ...state.data };
      delete newData[action.payload.id]; // Remove the todo item with the specified ID.
      return {
        ...state,
        data: newData,
      };
    case "EDIT_TODO":
      // When an "EDIT_TODO" action is dispatched, the content of a todo item is updated.
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content, // Update the content of the specified todo item.
          },
        },
      };
    case "COMPLETE_TODO":
      // When a "COMPLETE_TODO" action is dispatched, a todo item is marked as completed.
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            completed: true, // Set the completion status of the specified todo item to true.
          },
        },
      };
    default:
      // For any other action type, return the current state as is.
      return state;
  }
};

// Export the todoReducer function as the default export of this module.
export default todoReducer;
