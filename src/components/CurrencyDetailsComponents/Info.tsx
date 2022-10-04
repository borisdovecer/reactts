import _ from 'lodash';
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers";
import {ICurrency} from "../../interfaces";

const Info = () => {
    const state:ICurrency = useSelector((state: RootState) => state.currency)[0];
    
    return (
        <div className="bg-gray-900 rounded-3xl mx-1 px-4 p-2">
            {_.isEmpty(state) ? 'loading...' :
                <div>
                    <div className="flex space-x-2">
                        <img src={state.image?.small as string} alt="image"/>
                        <h1 className="text-5xl">{state.name}</h1>
                        <p className="bg-gray-600 py-1.5 px-2 rounded-2xl text-3xl">{_.toUpper(state.symbol)}</p>
                    </div>
                    <div className="flex">
                        <p className="bg-gray-600 my-1 p-2 rounded-2xl">Rank: {state.market_cap_rank}</p>
                    </div>
                    <div>
                        {_.map((state.links?.homepage as string[]), (link:string, index:number) => {
                            return <a key={index} href={link} target="_blank">{link}</a>
                        })}
                    </div>
                </div>
            }
        </div>
    )
};

export default Info;