import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

const selectVariant = (type: string | undefined) => {
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'tertiary':
      return `background-color: var(--${type}-button-bg); color: var(--${type}-button-font);`;
    default:
      return '';
  }
};

interface VariantProps {
  variant?: string;
}

const StyledButton = styled.button<VariantProps>`
  ${({ variant }) => selectVariant(variant)};

  align-items: baseline;
  border-radius: 0.8rem;
  display: inline-flex;
  justify-content: center;
`;

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
