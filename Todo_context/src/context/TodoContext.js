import { createContext, useContext } from 'react';

// Create context with default values
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook for using the Todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider component for Todo context
export const TodoProvider = TodoContext.Provider;
