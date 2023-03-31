import { Coin } from "../../../../utils/types/coin"

export const renderCell = (coin: Coin, column: string) => {
    switch (column) {
        default:
            <>{coin[column as keyof Coin] || '-'}</>
    }
}