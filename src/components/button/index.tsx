import React from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
    marginTop?: string;
    width?: string;
    height?: string;
    icon?: React.ReactElement;
}

const Button = ({
    text,
    onClick,
    backgroundColor,
    color,
    marginTop,
    icon,
    width,
    height
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
            marginTop={marginTop}
            width={width}
            height={height}
        >
            {text}
            {Boolean(icon) && icon}
        </StyledButton>
    );
};

export default Button;