import {ITable, IHeader} from "../interfaces";

export const navItems:IHeader[] = [
    { name: 'Pocetna', link: '/'},
    { name: 'Druga', link: '/druga'},
    { name: 'Treca', link: '/treca'}
];

export const tableHeader:ITable[] = [
    {name: 'Name', order: 'name'},
    {name: 'Price', order: 'current_price'},
    {name: '24h Change', order: 'price_change_percentage_24h'},
    {name: 'Market Cap', order: 'market_cap'},
    {name: 'Total supply', order: 'total_supply'}
]