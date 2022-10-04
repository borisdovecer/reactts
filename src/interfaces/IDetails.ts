export interface IDetails {
    id?: string,
    name: string,
    symbol?: string,
    image?: string,
    market_data?: {
        market_cap: {
            usd: string
        },
        circulating_supply: number,
        total_supply: number,
        price_change_percentage_24h: number
    },
    market_cap_rank?: number,
}
