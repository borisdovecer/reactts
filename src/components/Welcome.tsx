import {FC} from "react";
import {CurrencyTable, Search, PageButtons} from "./index";

const Welcome:FC = () => {
    return (
        <div className="w-full text-white">
            <div className="flex mb-1">
                <h1 className="font-bold text-5xl py-2">
                    Currencies:
                </h1>
                <Search />
            </div>
            <CurrencyTable />
            <PageButtons />
        </div>
    )
}

export default Welcome;