import { createContext } from "react";

export const TodoItemContext = createContext({
  items: [],
  addItems: () => {},
  deleteItems: () => {},
})