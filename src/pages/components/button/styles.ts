import styled from "styled-components";

interface ButtonProps {
    backgroundColor?: string;
    color?: string;
    marginTop?: string;
}
  
export const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props) => props.backgroundColor || "#FBAB34"};
    color: ${(props) => props.color || "#FFFFFF"};
    border: none;
    border-radius: 32px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    height: 32px;
    margin-top: 3px;
    display: flex;
    align-items: center;
    
    ${({ marginTop }) => marginTop ? `margin-top: ${marginTop};` : ''}

    img {
        margin-left: 10px;
        margin-top: -1px;
    }
`;