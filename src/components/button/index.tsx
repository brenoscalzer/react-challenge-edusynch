import React from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
    marginTop?: string;
    icon?: React.ReactElement;
}

const Button = ({
    text,
    onClick,
    backgroundColor,
    color,
    marginTop,
    icon
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
            marginTop={marginTop}
        >
            {text}
            {Boolean(icon) && icon}
        </StyledButton>
    );
};

export default Button;