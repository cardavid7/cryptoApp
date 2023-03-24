export class CryptoCurrency {

    id: string = '';
    symbol: string = '';
    name: string = '';
    image: string = '';
    current_price: number = 0;
    market_cap: number = 0;
    market_cap_rank: number = 0;
    fully_diluted_valuation: number = 0;
    total_volume: number = 0;
    high_24h: number = 0;
    low_24h: number = 0;
    price_change_24h: number = 0;
    price_change_percentage_24h: number = 0;
    market_cap_change_24h: number = 0;
    market_cap_change_percentage_24h: number = 0;
    circulating_supply: number = 0;
    total_supply: number = 0;
    max_supply: number = 0;
    ath: number = 0;
    ath_change_percentage: number = 0;
    ath_date: string = '';
    atl: number = 0;
    atl_change_percentage: number = 0;
    atl_date: string = '';
    last_updated: string = '';
    price_change_percentage_1h_in_currency: number = 0;
    price_change_percentage_24h_in_currency: number = 0;
    price_change_percentage_7d_in_currency: number = 0;

    constructor() { }
    /*
    id: string;
    symbol: string;
    name: number;


    constructor(json: any) {
        this.id = json.id;
        this.symbol = json.symbol;
        this.name = json.name;
    }

    doToString(): string {
        return "CryptoCurrency [id: " + this.id +
            ", symbol: " + this.symbol +
            ", name: " + this.name + "]";
    }
    */

}
