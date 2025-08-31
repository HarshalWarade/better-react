import { createContext, useContext } from "react";
import {nanoid} from 'nanoid'

const TodoContext = createContext({
    todos: [
        {
            id: nanoid(),
            todo: 'some message',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
}) 


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider