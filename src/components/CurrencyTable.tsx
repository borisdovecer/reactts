import {ICurrency, ITable} from "../interfaces";
import {numberFormat} from "../utils";
import _ from "lodash";
import {FC, useEffect} from "react";
import {actionCreators} from '../state';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/reducers";
import {bindActionCreators} from "redux";
import {useSearchParams} from "react-router-dom";
import {ActionType} from "../utils/ActionTypes";
import {tableHeader} from "../utils/HeaderItems";

const CurrencyTable:FC = () => {
    const [searchParams] = useSearchParams();
    const page:number = searchParams.get('page') ? _.parseInt(searchParams.get('page')!) : 1;

    const state:ICurrency[] = useSelector((state: RootState) => state.currency);
    const dispatch = useDispatch();
    const { currencies, sortCurrencies } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        currencies(page);
    },[])

    return (
        <div>
            <div className="flex border-t-2 border-b-2 border-amber-600 rounded-t-2xl p-1 ">
                <div className="w-16">#</div>
                {tableHeader.map((item: ITable, index: number) => {
                    return (
                        <div key={index} className="w-2/12 flex">
                            <p>{item.name}</p>
                            <button className="pl-2" onClick={() => sortCurrencies(item.order,ActionType.ASC)}>▲</button>
                            <button className="pl-1" onClick={() => sortCurrencies(item.order, ActionType.DESC)}>▼</button>
                        </div>
                    )
                })}
            </div>
            {_.isEmpty(state) ? 'loading...' :
                <div>
                    {_.map(state, (currency: ICurrency, index: number) => {
                        return (
                            <div key={index} className="flex border-b-2 border-amber-200 p-1">
                                <div className="w-16">{currency.market_cap_rank}</div>
                                <div className="w-2/12 flex cursor-pointer"
                                     onClick={() => window.location.href = `/currency/${currency.id}`}>
                                    <img className="h-8" src={currency.image as string} alt='image'/>
                                    <p className="pl-2 pt-1">{currency.name} {_.toUpper(currency.symbol)}</p>
                                </div>
                                <p className="w-2/12 pt-1">${numberFormat(currency.current_price)}</p>
                                <p className={`${
                                    _.inRange(currency.price_change_percentage_24h as number, 0, 100000) ?
                                        "text-green-500 w-2/12 pt-1" :
                                        'text-red-400 w-2/12 pt-1'
                                }`}>
                                    {currency.price_change_percentage_24h?.toFixed(2)} %
                                </p>
                                <p className="w-2/12 pt-1">${numberFormat(currency.market_cap)}</p>
                                <p className="w-2/12 pt-1">{numberFormat(currency.total_supply) || '--'}</p>
                            </div>
                        )
                    })}
                </div>
               }
        </div>
    )
}

export default CurrencyTable;