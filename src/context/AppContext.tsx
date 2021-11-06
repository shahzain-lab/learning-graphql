import { createContext, useReducer } from "react";
import { ContextProps } from "../types/appProps.types";
import { AppContext, State } from "../types/context.types";
import AppReducer from "./AppReducer";

const initialState: State = {
    searchValue: '',
}

export const GlobalContext = createContext<AppContext>({
    state: initialState,
    dispatch: () => { }
});



export const GlobalProvider: React.FC<ContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}