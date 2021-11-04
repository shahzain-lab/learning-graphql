import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export type State = {
    searchValue: string
}

export type Action = {
    type: 'SEARCH_INPUT_VALUE'
    payload: string
}

interface AppContext {
    state: State;
    dispatch: React.Dispatch<Action>;
}

const initialState: State = {
    searchValue: '',
}

export const GlobalContext = createContext<AppContext>({
    state: initialState,
    dispatch: () => { }
});

interface Props {
    children: React.ReactNode
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}