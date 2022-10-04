import _ from 'lodash';
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {ICurrency} from "../../interfaces";

const Info = () => {
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0];

    return (
        <div className="w-2/3 p-1 mt-4">
            {_.isEmpty(state) ? 'loading...' :
                <div dangerouslySetInnerHTML={{ __html: state?.description?.en!}} />
            }
        </div>
    )
};

export default Info;