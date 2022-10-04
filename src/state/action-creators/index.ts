import { Dispatch } from "redux"
import { IAction } from "../../interfaces";
import { ActionType } from "../../utils/ActionTypes";
import {getCurrencies, getAllCurrencies, getCurrencyDetails} from "../../api/api";

export const currencies = (page:number):(dispatch: Dispatch<IAction>) => Promise<void> => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.CURRENCIES,
            payload: await getCurrencies(page)
        })
    }
};

export const currencyDetails = (id:string):(dispatch: Dispatch<IAction>) => Promise<void> => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.DETAILS,
            payload: await getCurrencyDetails(id)
        })
    }
};

export const sortCurrencies = (name:string, order: ActionType.ASC | ActionType.DESC):(dispatch: Dispatch<IAction>) => Promise<void> => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.SORT,
            payload: {
                name,
                order
            }
        })
    }
};

export const search = (query:string):(dispatch: Dispatch<IAction>) => Promise<void> => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.SEARCH,
            payload: {
                query,
                currencies: await getAllCurrencies()
            }
        })
    }
};