import React from 'react';

import { Container, Title, Subtitle, Text } from './styles';

interface ProductInfoProps {
    icon: any;
    title: string;
    subtitle: string;
    text: string;
}

const ProductInfo = ({ icon, title, subtitle, text }: ProductInfoProps) => {
    return (
        <Container>
            <img src={icon} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
        </Container>
    );
}

export default ProductInfo;