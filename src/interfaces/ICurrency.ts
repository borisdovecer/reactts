export interface ICurrency {
    id?: string,
    name?: string,
    symbol?: string,
    image?: string | {small?: string},
    current_price?: number,
    market_cap?: number,
    total_supply?: number,
    price_change_percentage_24h?: number,
    market_cap_rank?: number,
    description?:{
        en?: string
    }
    links?: {
        homepage?: string[]
    }
    market_data?: {
        market_cap?: {
            usd?: number
        },
        circulating_supply?: number,
        price_change_percentage_24h?: number,
        current_price?: {
            usd?: number
        },
        total_supply?: number,
        low_24h?: {
            usd?: number
        },
        high_24h?: {
            usd?: number
        }
    },
}
