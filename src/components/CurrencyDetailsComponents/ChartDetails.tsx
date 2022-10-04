import {Chart, CurrencyConverter} from './'

const ChartDetails = () => {
    return (
        <div className="flex w-full mt-4">
            <Chart />
            <CurrencyConverter />
        </div>
    )
};

export default ChartDetails;