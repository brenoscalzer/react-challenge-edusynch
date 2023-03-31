import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const InputLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 8px;
`;

export const InputElement = styled.input`
    background: #FFFFFF;
    mix-blend-mode: normal;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: 384px;
    height: 48px;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #ACABB7;
    padding: 0 16px;
    z-index: 99999;
`;