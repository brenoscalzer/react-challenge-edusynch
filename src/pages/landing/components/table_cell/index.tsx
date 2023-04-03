import React from 'react';

import { Coin } from "../../../../utils/types/coin"
import Button from '../../../../components/button';

import { Text, Row } from  './styles';

const formatNumber = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export const renderCell = (coin: Coin, column: string) => {
    switch (column) {
        case 'crypto':
            return (
                <Row>
                    <Text color="#5D6670">{coin.name}</Text>
                    <Text color="#8C8A97" marginLeft="6px">{` `}{coin.assetId}</Text>
                </Row>
            )
        case 'price':
            return <Text color="#5D6670">{formatNumber(coin.priceUsd)}</Text>
        case 'change':
            return <Text color="#149E55">+5,65%</Text>
        case 'trade':
            return <Button text="Buy" backgroundColor="#149E55" />
        default:
            return <Text color="#5D6670">{coin[column as keyof Coin] || '-'}</Text>
    }
}