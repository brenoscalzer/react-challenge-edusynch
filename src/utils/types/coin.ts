export interface Coin {
    position: number;
    assetId: string;
    dataEnd: string;
    dataOrderbookEnd: string;
    dataOrderbookStart: string;
    dataQuoteEnd: string;
    dataQuoteStart: string;
    dataStart: string;
    dataSymbolsCount: number;
    dataTradeEnd: string;
    dataTradeStart: string;
    idIcon: string;
    name: string;
    priceUsd: number;
    typeIsCrypto: number;
    volume1dayUsd: number;
    volume1hrsUsd: number;
    volume1mthUsd: number;
}

export interface UnparsedCoin {
    asset_id: string;
    data_end: string;
    data_orderbook_end: string;
    data_orderbook_start: string;
    data_quote_end: string;
    data_quote_start: string;
    data_start: string;
    data_symbols_count: number;
    data_trade_end: string;
    data_trade_start: string;
    id_icon: string;
    name: string;
    price_usd: number;
    type_is_crypto: number;
    volume_1day_usd: number;
    volume_1hrs_usd: number;
    volume_1mth_usd: number;
}

export const parseCoins = (unparsedCoins: UnparsedCoin[]): Coin[] => unparsedCoins.map((unparsedCoin, index) => ({
    position: index + 1,
    assetId: unparsedCoin.asset_id,
    dataEnd: unparsedCoin.data_end,
    dataOrderbookEnd: unparsedCoin.data_orderbook_end,
    dataOrderbookStart: unparsedCoin.data_orderbook_start,
    dataQuoteEnd: unparsedCoin.data_quote_end,
    dataQuoteStart: unparsedCoin.data_quote_start,
    dataStart: unparsedCoin.data_start,
    dataSymbolsCount: unparsedCoin.data_symbols_count,
    dataTradeEnd: unparsedCoin.data_trade_end,
    dataTradeStart: unparsedCoin.data_trade_start,
    idIcon: unparsedCoin.id_icon,
    name: unparsedCoin.name,
    priceUsd: unparsedCoin.price_usd,
    typeIsCrypto: unparsedCoin.type_is_crypto,
    volume1dayUsd: unparsedCoin.volume_1day_usd,
    volume1hrsUsd: unparsedCoin.volume_1hrs_usd,
    volume1mthUsd: unparsedCoin.volume_1mth_usd,
}))