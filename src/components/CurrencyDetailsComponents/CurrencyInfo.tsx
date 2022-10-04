import { Info, Prices, TokenSupply } from './';
const CurrencyInfo = () => {
    return (
        <div className="grid grid-cols-3" >
            <Info />
            <Prices />
            <TokenSupply />
        </div>
    )
};

export default CurrencyInfo;