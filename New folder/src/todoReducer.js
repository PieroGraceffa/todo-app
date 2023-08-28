const intialToDoState = {
  nextId: 1,
  data: {},
};

const todoReducer = (state = intialToDoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload.content,
            completed: false,
          },
        },
      };
    case "DELETE_TODO":
      const newData = { ...state.data };
      delete newData[action.payload.id];
      return {
        ...state,
        data: newData,
      };
    case "EDIT_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content,
          },
        },
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            completed: true,
          },
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
