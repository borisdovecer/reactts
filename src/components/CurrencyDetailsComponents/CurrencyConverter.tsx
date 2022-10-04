import _ from 'lodash';
import {FC, useState, ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {InputField} from './'
import {ICurrency} from "../../interfaces";

const CurrencyConverter:FC = () => {
    const [currencyAmount, setCurrencyAmount] = useState<number>();
    const [usdAmount, setUsdAmount] = useState<number>();
    const [change, setChange] = useState<boolean>(true);
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0];

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = e.target
        if (name !== 'USD') {
            setCurrencyAmount(_.toNumber(value));
            setUsdAmount((state?.market_data?.current_price?.usd as number) * _.toNumber(value));
        } else {
            setUsdAmount(_.toNumber(value))
            setCurrencyAmount(_.toNumber(value) / (state?.market_data?.current_price?.usd as number));
        }
    };

    return (
        <div className="w-1/3 p-2 px-">
            {_.isEmpty(state) ? 'loading...' :
                <div className="bg-gray-900 rounded-3xl w-full p-4">
                    <p className="text-xl mb-4">Convert {_.toUpper(state.symbol)} to USD</p>
                    <InputField symbol={change ? state.symbol! : 'USD'} value={change ? currencyAmount : usdAmount} handleChange={handleChange} />
                    <div className="w-9/12 py-0.5 flex justify-center align-middle text-center">
                        <button onClick={() => setChange(!change)} className="bg-gray-600 w-7 h-7 rounded-full">↑↓</button>
                    </div>
                    <InputField symbol={change ? 'USD' : state.symbol!} value={change ? usdAmount : currencyAmount} handleChange={handleChange} />
                </div>
            }
        </div>
    )
};

export default CurrencyConverter;