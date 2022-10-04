import {FC, ChangeEvent} from "react";
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state';

const Search:FC = () => {
    const dispatch = useDispatch();
    const { search } = bindActionCreators(actionCreators, dispatch)

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        search(e.target.value);
    }

    return (
        <div className=" flex justify-end w-full py-2 mr-6">
            <div className="bg-blue-900 p-3 ml-2 mt-2 rounded-l-2xl">
                <FaSearch />
            </div>
            <input className="bg-blue-900 pl-2 mt-2 rounded-r-2xl" type="text" placeholder="search..." name="search" onChange={handleChange}/>
        </div>
    )
}

export default Search;