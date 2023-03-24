export class Exchange {

    id: string = '';
    name: string = '';
    year_established: number = 0;
    country: string = '';
    description: string = '';
    url: string = '';
    image: string = '';
    has_trading_incentive: boolean = false;
    trust_score: number = 0;
    trust_score_rank: number = 0;
    trade_volume_24h_btc: number = 0;
    trade_volume_24h_btc_normalized: number = 0;

    constructor() { }
}