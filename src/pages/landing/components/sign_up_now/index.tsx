import React, { useEffect } from 'react';

import rightArrow from '../../../../images/right_arrow.svg';
import carouselImage from '../../../../images/carousel_1.svg';

import Button from '../../../../components/button';
import Carousel from '../../../../components/carousel';

import { Container, Title, ContentContainer, Subtitle, Option } from './styles';

const SingUpNow = () => {

    return (
        <Container>
            <ContentContainer>
                <div>
                    <Title>
                        Lorem ipsum dolor sit amet, consectetur
                    </Title>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                    </Subtitle>
                    <Button text="SIGN UP NOW" backgroundColor="#FBAB34" marginTop="32px" icon={<img src={rightArrow} />} />
                    <ContentContainer justifyContent="space-around" marginTop="84px">
                        <Option>
                            Cryptos
                        </Option>
                        <Option>
                            NFTs
                        </Option>
                        <Option>
                            Games
                        </Option>
                    </ContentContainer>
                </div>
                <ContentContainer>
                    <Carousel images={[carouselImage, carouselImage]} height={499} width={384} />
                </ContentContainer>
            </ContentContainer>
        </Container>
    );
}

export default SingUpNow;