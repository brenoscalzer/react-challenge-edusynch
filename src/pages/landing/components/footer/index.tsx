import React from 'react';

import textLogo from '../../../../images/text_logo.svg';
import Button from '../../../../components/button';

import { Container, Logo, ContentContainer, Text } from './styles';

const Footer = () => {
    return (
        <Container>
            <Text>
                Copyright © 2022 - All rights reserved
            </Text>
            <Logo src={textLogo} alt="" />
        </Container>
    );
}

export default Footer;