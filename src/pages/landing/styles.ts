import styled from 'styled-components'

interface ContentContainerProps {
    marginLeft?: string;
    marginTop?: string;
}

export const SeparatorContainer = styled.div`
    margin-top: 42px;
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

export const ContentContainer = styled.div<ContentContainerProps>`
    display: flex;
    flex-direction: row;

    
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft};` : ''}
    ${({ marginTop }) => marginTop ? `margin-top: ${marginTop};` : ''}
`;


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100vw - 224px);
    padding: 120px 112px;
`;

export const TableTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #5D6670;
`;

export const TableSizeText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FBAB34;
    flex: none;
    order: 0;
    flex-grow: 0;
`

