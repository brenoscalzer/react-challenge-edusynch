import styled from 'styled-components';

interface TextProps {
    color?: string;
    marginLeft?: string;
}

export const Container = styled.div`
    position: absolute;
    width: calc(100vw - 224px);
    padding: 12px 112px;
    height: 38px;
    left: 0px;
    top: 0px;
    border: solid 1px red;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    margin-top: 8px;
    height: 21px
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Text = styled.p<TextProps>`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 38px;
    color: #5D6670;
    margin: 0;

    ${({ color }) => color ? `color: ${color};` : ''}
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft};` : ''}
`;