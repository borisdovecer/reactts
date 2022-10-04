import _ from "lodash";
import {FC} from "react";
import { useSearchParams } from 'react-router-dom';

const PageButtons:FC = () => {
    const [searchParams] = useSearchParams();
    const page:number = searchParams.get('page') ? _.parseInt(searchParams.get('page')!) : 1;
    const totalPages:number = 20;
    const pages:JSX.Element[] = [];

    let start:number = 2;
    let end:number = 6;

    if(page > 4 && page < totalPages-3) {
        start = page - 3;
        end = page + 3;
    }
    if(page >= totalPages-3) {
        start = totalPages - 5;
        end = totalPages - 1;
    }

    for (let i:number = start; i <= end; i++) {
        pages.push(
            <button key={i}
                    className={`px-2 mx-1 border rounded-lg ${page == i ? 'border-red-600 text-red-400' : 'border-amber-600 text-amber-400'}`}
                    onClick={() => window.location.href = `?page=${i}`}
            >
                {i}
            </button>
        )
    }
    return (
        <div className="w-full mt-4 text-center">
            <button className={`px-2 mx-1 border rounded-lg ${page == 1 ? 'border-red-600 text-red-400' : 'border-amber-600 text-amber-400'}`}
                    onClick={() => window.location.href = `/`}
            >
                1
            </button>
            {page > 4 && '...'}
            {pages}
            {page < totalPages-4 && '...'}
            <button className={`px-2 mx-1 border rounded-lg ${page == totalPages ? 'border-red-600 text-red-400' : 'border-amber-600 text-amber-400'}`}
                    onClick={() => window.location.href = `/?page=${totalPages}`}
            >
                {totalPages}
            </button>
        </div>
    )
}

export default PageButtons