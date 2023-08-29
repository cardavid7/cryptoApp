export class Image {
    thumb: string = '';
    small: string = '';
    large: string = '';
}

export class Links {
    homepage: string[] = [];
    blockchain_site: string[] = [];
    official_forum_url: string[] = [];
    chat_url: string[] = [];
    announcement_url: string[] = [];
    twitter_screen_name: string = '';
    facebook_username: string = '';
    telegram_channel_identifier: string = '';
    subreddit_url: string = '';

}

export class CoinInfo {

    id: string = '';
    symbol: string = '';
    name: string = '';
    block_time_in_minutes: number = 0;
    hashing_algorithm: string = '';
    categories: string[] = [];
    links?: Links;
    image?: Image;
    country_origin: string = '';
    genesis_date: string = '';
    market_cap_rank: number = 0;
    coingecko_rank: number = 0;
    last_updated: string = '';

    constructor() { }

}