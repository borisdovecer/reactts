import _ from 'lodash';
import axios, {AxiosResponse} from 'axios';
import {ICurrency} from "../interfaces";

export const getCurrencies = async (page:number): Promise<ICurrency[]> => {
    try{
        const response:AxiosResponse<ICurrency[], any> = await axios.get<ICurrency[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}`);
        return response.data;
    }catch(err){
        console.log(err);
        return [];
    }
};

export const getCurrencyDetails = async (id:string): Promise<ICurrency[]> => {
    try{
        const response = await axios.get<ICurrency>(`https://api.coingecko.com/api/v3/coins/${id}`);
        return [response.data];
    }catch(err){
        console.log(err);
        return [];
    }
};



export const getAllCurrencies = async (): Promise<ICurrency[]> => {
    try{
        const pages = [];
        for (let i=1; i<5; i++) {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=${i}`);
            pages.push(response.data);
        }
        return _.flatten(pages)
    }catch(err){
        console.log(err);
        return [];
    }
};