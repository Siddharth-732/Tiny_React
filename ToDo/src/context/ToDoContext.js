import { createContext } from "react";
import { useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    }
  ],
  addTodo:(todo)=>{},
  deleteTodo:(id,todo)=>{},
  updateTodo:(id)=>{},
  toggleComplete:(id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
