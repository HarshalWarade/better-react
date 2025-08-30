import { createContext, useContext } from "react";

const TodoContext = createContext({}) 


export const useTodo = () => {
    return useContext(TodoContext)
}