import _ from "lodash";
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {ICurrency} from "../../interfaces";

const Chart = () => {
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0];

    return (
        <div className="w-2/3 p-1">
            {_.isEmpty(state) ? 'loading...' :
                <iframe src={`https://s.tradingview.com/widgetembed/?&symbol=${_.toUpper(state.symbol)}USD&style=3&theme=dark`}
                        className="w-full h-96"
                />
            }
        </div>
    )
};

export default Chart;