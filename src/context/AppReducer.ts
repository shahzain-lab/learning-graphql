import { Action, State } from "./AppContext"

 const AppReducer = (state: State, action: Action) => {
     switch(action.type){
         case 'SEARCH_INPUT_VALUE':
             return {...state, searchValue: action.payload}
     default:
         return state
     }
}
export default AppReducer