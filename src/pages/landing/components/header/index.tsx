import React from 'react';

import textLogo from '../../../../images/text_logo.svg';
import Button from '../../../components/button';

import { Container, Logo, ContentContainer, Text } from './styles';

const Header = () => {
    return (
        <Container>
            <ContentContainer>
                <Logo src={textLogo} alt="" />
                <Text marginLeft="40px">About Us</Text>
                <Text marginLeft="24px">Top Cryptos</Text>
            </ContentContainer>
            <ContentContainer>
                <Button text="Sign In" backgroundColor="#FFFFFF" color="#5D6670" />
                <Button text="Sign Up" backgroundColor="#FBAB34" />
            </ContentContainer>
        </Container>
    );
}

export default Header;