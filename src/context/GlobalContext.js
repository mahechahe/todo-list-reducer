import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";


const initialState = {
    tasks: [
        {
            id: 1,
            title: 'title one',
            description: 'some description',
            done: false
        },
        {
            id: 2,
            title: 'title two',
            description: 'some description two',
            done: false
        },
    ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => {
        const ids = state.tasks.map(task => task.id)
        const maxId = Math.max(...ids)

        dispatch({type: 'ADD_TASK', payload: {
            id: maxId + 1,
            title: task.title,
            description: task.description,
            done: false
        }})
    }

    const deleteTask = (id) => {
        dispatch({type: 'DELETE_TASK', payload: id})
    }

    const updateTask = (task) => {
        dispatch({type: 'UPDATE_TASK', payload: task})
    }

    const toggleTaskDone = (id) => {
        dispatch({type: 'TOGGLE_TASK', payload: id})
    }

    return (
        <GlobalContext.Provider value={{state, addTask, deleteTask, updateTask, toggleTaskDone}}>
            {children}
        </GlobalContext.Provider>
    )
}

