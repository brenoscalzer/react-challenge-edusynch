import styled from 'styled-components';

import backgroundSvg from '../../../../images/newsletter_background.svg';

export const Container = styled.div`
    position: realtive;
    width: calc(100vw);
    height: 412px;
    background: linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%);
    margin-top: 120px;
    img {
        display: block;
        width: 100vw;
        height: auto;
        margin: 0 auto;
        position: absolute;
    }

    overflow: hidden;
`;


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 120px 216px;
`;

export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #FFE1B5;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0;
    margin-top: 4px;
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0;
    margin-top: 8px;
    max-width: 385px;
`;