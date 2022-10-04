import {ICurrency} from "./ICurrency";
import {ActionType} from "../utils/ActionTypes";

interface CurrencyAction {
    type: ActionType.CURRENCIES | ActionType.DETAILS,
    payload:  ICurrency[]
}

interface SortAction {
    type: ActionType.SORT,
    payload: {
        name: string,
        order: ActionType.ASC | ActionType.DESC
    }
}

interface SearchAction {
    type: ActionType.SEARCH,
    payload: {
        query: string,
        currencies: ICurrency[]
    }
}

export type IAction = CurrencyAction | SortAction | SearchAction;