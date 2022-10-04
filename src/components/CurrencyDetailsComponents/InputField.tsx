import _ from "lodash";
import {IInput} from "../../interfaces";

const InputField = ({symbol, value, handleChange}:IInput) => {
    return (
        <div className="w-9/12 h-12 flex">
            <div className="w-8 p-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 rounded-l-full"></div>
            <p className="w-24 p-2 text-xl bg-gray-600 text-white border-r-2">{_.toUpper(symbol)}</p>
            <input className="w-full text-right text-xl bg-gray-600 text-white outline-none "
                   type="number" value={value}
                   onChange={handleChange}
                   placeholder="0"
                   name={symbol}
            />
            <div className="w-8 p-2 bg-gradient-to-l from-gray-300 via-gray-500 to-gray-600 rounded-r-full"></div>
        </div>
    )
}

export default InputField;