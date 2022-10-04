import _ from "lodash";
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {numberFormat} from "../../utils";
import {ICurrency} from "../../interfaces";

const TokenSupply = () => {
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0];

    return (
        <div className="bg-gray-900 rounded-3xl p-2 px-4 mx-1">
            {_.isEmpty(state) ? 'loading...' :
                <div>
                    <p className="text-3xl">Market Cap: ${numberFormat(state.market_data?.market_cap?.usd)} </p>
                    <p>circulating supply: {numberFormat(state.market_data?.circulating_supply)} {_.toUpper(state.symbol)}</p>
                    <p>total supply: {numberFormat(state.market_data?.total_supply)} {_.toUpper(state.symbol)}</p>
                </div>
            }
        </div>
    )
};

export default TokenSupply;