import React from 'react';

import Button from '../../../../components/button';

import { Container, Title, Subtitle, Text } from './styles';

const SignUpNowSmall = () => {
    return (
        <Container>
            <Title>Lorem ipsum</Title>
            <Subtitle>Lorem ipsum</Subtitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Text>
            <Button text="Sign up now" backgroundColor="#FBAB34" marginTop="40px" />
        </Container>
    );
}

export default SignUpNowSmall;