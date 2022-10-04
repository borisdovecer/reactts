import {FC, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators } from '../state';
import { CurrencyInfo, ChartDetails, CurrencyDescription } from './CurrencyDetailsComponents';

const CurrencyDetails:FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currencyDetails } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        currencyDetails(id!);
    },[])

    return (
        <div className="w-full text-white">
            <CurrencyInfo />
            <ChartDetails />
            <CurrencyDescription />
        </div>
    )
}

export default CurrencyDetails;