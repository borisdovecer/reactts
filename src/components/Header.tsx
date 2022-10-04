import _ from 'lodash';
import {IHeader} from "../interfaces";
import {navItems} from "../utils/HeaderItems";

const Header = () => {
    return (
        <div className="w-full flex bg-blue-900 text-amber-600">
            <div className='w-1/12 ml-16'>
                <img src="/logo.png" alt='logo' className='h-20'/>
            </div>
            <div className='w-11/12'>
                <div className="flex justify-end items-center text-right text-2xl font-bold mr-16 h-20">
                    {_.map(navItems, (item:IHeader, index:number) => {
                        return (
                            <a key={index} className="p-4 ml-8 hover:underline cursor-pointer" href={item.link}>{item.name}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header;