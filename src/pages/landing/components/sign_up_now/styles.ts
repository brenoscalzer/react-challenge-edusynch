import styled from 'styled-components';

interface ContentContainerProps {
    marginTop?: string;
    justifyContent?: string;
}

export const Container = styled.div`
    width: calc(100vw - 224px);
    padding: 0px 112px;
    left: 0px;
    margin-top: 162px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #FBAB34;
    width: calc(50vw - 112px);
    margin: 0;
    margin-top: 60px;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
    display: flex;
    flex-direction: row;
    
    ${({ marginTop }) => marginTop ? `margin-top: ${marginTop};` : ''}
    ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : ''}
`;

export const Subtitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #5D6670;
    width: calc(50vw - 112px);
    margin: 0;
    margin-top: 24px;
`;

export const Option = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #FBAB34;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
`;
 