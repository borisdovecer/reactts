import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer"

const reducers = combineReducers({
    currency: currencyReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>