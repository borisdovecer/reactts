import _ from "lodash";
import {IAction, ICurrency} from "../../interfaces";
import {ActionType} from "../../utils/ActionTypes";

const initialState:ICurrency[] = [];

const getCurrencies = (state: ICurrency[], action:{payload:ICurrency[]}): ICurrency[] => {
    state = [];
    _.map(action.payload, (currency:ICurrency) => {
        state.push(currency);
    })
    return state;
}

const getCurrencyDetails = (state: ICurrency[], action:{payload:ICurrency[]}): ICurrency[] => {
    state = action.payload;
    return state;
}

const sort = (state: ICurrency[], action:{payload:{name:string, order: ActionType.ASC | ActionType.DESC}}): ICurrency[] => {
    return _.orderBy(state, action.payload.name, action.payload.order)
}

const search = (state:ICurrency[], action:{payload:{currencies: ICurrency[], query: string}}): ICurrency[] => {
    const {currencies, query} = action.payload;
    state = [];
    _.map(currencies, (currency:ICurrency) => {
        if (_.includes(_.toLower(currency.name), _.toLower(query)) || _.includes(_.toLower(currency.symbol), _.toLower(query))) {
            state.push(currency);
        }
    })
    return _.slice(state,0,20)
}

const reducer = (state: ICurrency[] = initialState, action:IAction):ICurrency[] => {
    switch (action.type) {
        case ActionType.CURRENCIES: return getCurrencies(state, action);
        case ActionType.DETAILS: return getCurrencyDetails(state, action);
        case ActionType.SORT: return sort(state, action);
        case ActionType.SEARCH: return search(state, action);
        default: return state;
    }
}

export default reducer;