import { createContext } from "react";

const initialState = {
    tasks: [
        {
            id:"1",
            title: 'title one',
            description: "some description",
            done: false,
        },
        {
            id:"2",
            title: 'title two',
            description: "some description two",
            done: false,
        },
    ]
}

export const globalContext = createContext(initialState);

export const contextProvider = ({children}) => {
    return <globalContext.Provider value={initialState}>
        {children}
    </globalContext.Provider>
}