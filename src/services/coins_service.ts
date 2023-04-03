import { parseCoins, UnparsedCoin } from "../utils/types/coin";
import api from "./api"

export const listCoins = () => {
    return api.get('v1/assets').then((res) => parseCoins(res.data.filter((i: UnparsedCoin) => i.type_is_crypto).sort((a: UnparsedCoin, b: UnparsedCoin) => b.price_usd - a.price_usd)));
}