import api from "./api"

export const listCoins = () => {
    return api.get('v1/balances');
}