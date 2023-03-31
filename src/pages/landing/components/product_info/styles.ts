import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    background: #FFFFFF;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-right: 32px;

    img {
        width: 64px;
        height: 64px;
    }
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FBAB34;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
    margin-top: 22px;
`;

export const Subtitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #5D6670;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0;
    margin-top: 4px;
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #5D6670;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 232px;
    margin: 0;
    margin-top: 8px;
`;