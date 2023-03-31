import React from 'react';

import Input from '../../../../components/input';
import Button from '../../../../components/button';
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
                <div>
                    <Input label="Email" placeholder="Email" />
                    <Button text="Subscribe" backgroundColor="#FBAB34" marginTop="21px" height="48px" width="416px" />
                </div>
            </ContentContainer>
        </Container>
    );
}

export default Newsletter;