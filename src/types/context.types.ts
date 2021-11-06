
export type State = {
    searchValue: string
}

export type Action = {
    type: 'SEARCH_INPUT_VALUE'
    payload: string
}

export interface AppContext {
    state: State;
    dispatch: React.Dispatch<Action>;
}