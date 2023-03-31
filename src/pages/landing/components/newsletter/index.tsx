import React from 'react';

import backgroundSvg from '../../../../images/newsletter_background.svg';

import { Container, ContentContainer, Title, Subtitle, Text } from './styles';

const Newsletter = () => {
    return (
        <Container>
            <img src={backgroundSvg} />
            <ContentContainer>
                <div>
                    <Title>
                        Lorem ipsum
                    </Title>
                    <Subtitle>
                        Lorem ipsum
                    </Subtitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                    </Text>
                </div>
            </ContentContainer>
        </Container>
    );
}

export default Newsletter;