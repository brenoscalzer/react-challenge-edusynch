import React, { useEffect } from 'react';

import textLogo from '../../../../images/text_logo.svg';
import Button from '../../../components/button';

import { Container, Logo, ContentContainer, Text } from './styles';
import { listCoins } from '../../../../services/coins_service';

interface CoinProps {
    name: string;
    value: number;
    variation: number;
}

const Coin = ({ name, value, variation }: CoinProps) => {
    const positive = variation >= 0;
    return (
        <ContentContainer>
            <Text marginRight="8px" color="#4E4B59">{name}</Text>
            <Text marginRight="8px" color="#5D6670">R$ {value.toFixed(2).replace('.', ',')}</Text>
            <Text marginRight="24px" color={positive ? '#149E55' : '#A12226'}>{positive ? '+' : ''}{variation.toFixed(3).replace('.', ',')}</Text>
        </ContentContainer>
    );
}

const Header = () => {
    useEffect(() => {
        listCoins();
    }, [])

    return (
        <Container>
            <ContentContainer>
                <Logo src={textLogo} alt="" />
                <Text marginLeft="40px">About Us</Text>
                <Text marginLeft="24px">Top Cryptos</Text>
            </ContentContainer>
            <ContentContainer>
                <Coin name="BIT" value={23.62} variation={7.082} />
                <Coin name="DOG" value={23.62} variation={-5.23} />
                <Button text="Sign In" backgroundColor="#FFFFFF" color="#5D6670" />
                <Button text="Sign Up" backgroundColor="#FBAB34" />
            </ContentContainer>
        </Container>
    );
}

export default Header;