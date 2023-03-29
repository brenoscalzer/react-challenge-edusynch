import React from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  color,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;