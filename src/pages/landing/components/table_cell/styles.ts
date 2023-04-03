import styled from 'styled-components';

interface TextProps {
    color?: string;
    marginLeft?: string;
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Text = styled.p<TextProps>`
    ${({ color }) => color ? `color: ${color};` : ''}
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft};` : ''}
`;