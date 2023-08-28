// Import the createStore function from the Redux library.
import { createStore } from "redux";

// Import the todoReducer that you've defined in another file.
import todoReducer from "./todoReducer";

// Create a Redux store by passing in the todoReducer to createStore.
const store = createStore(todoReducer);

// Export the created store as the default export of this module.
export default store;
