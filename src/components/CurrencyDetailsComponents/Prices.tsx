import _ from 'lodash';
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {numberFormat} from "../../utils";
import {ICurrency} from "../../interfaces";

const Prices = () => {
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0]!;

    return (
        <div className="bg-gray-900 rounded-3xl p-2 px-4 mx-1">
            {_.isEmpty(state) ? 'loading...' :
                <div>
                    <p>{state.name} price ({_.toUpper(state.symbol)})</p>
                    <div className="flex">
                        <h1 className="text-5xl">${numberFormat(state.market_data?.current_price?.usd)}</h1>
                        <p className={`bg-gray-600 py-1.5 px-2 rounded-2xl ml-2 text-3xl 
                        ${ _.inRange(state.market_data?.price_change_percentage_24h! , 0, 10000) ? 'text-green-500' : 'text-red-500' }`}>
                            {(state.market_data?.price_change_percentage_24h as number).toFixed(2)}%
                        </p>
                    </div>

                    <p>low: ${numberFormat(state.market_data?.low_24h?.usd) || ' --'}</p>
                    <p>high: ${numberFormat(state.market_data?.high_24h?.usd) || ' --'}</p>
                </div>
            }
        </div>
    )
};

export default Prices;