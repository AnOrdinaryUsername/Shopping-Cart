import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components/macro';

export const primaryButton = css`
  background-color: var(--button-bg-color);
  color: var(--button-font-color);
`;

export const secondaryButton = css`
  border: 0.3rem solid var(--button-bg-color);
  background-color: inherit;
  color: var(--button-bg-color);
`;

export const tertiaryButton = css`
  background-color: inherit;
  color: inherit;
  height: min-content;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
`;

const selectVariant = (variant?: string) => {
  switch (variant) {
    case 'primary':
      return primaryButton;
    case 'secondary':
      return secondaryButton;
    case 'tertiary':
      return tertiaryButton;
    default:
      return tertiaryButton;
  }
};

export const smallButton = css`
  padding: 0.8rem 1.4rem;
`;

export const mediumButton = css`
  padding: 1.2rem 2.2rem;
`;

export const largeButton = css`
  padding: 1.8rem 3.2rem;
`;

const selectSize = (size?: string) => {
  switch (size) {
    case 'small':
      return smallButton;
    case 'medium':
      return mediumButton;
    case 'large':
      return largeButton;
    default:
      return 'padding: 0;';
  }
};

export const defaultButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  font-weight: 700;
`;

interface DefaultButtonProps {
  variant?: string;
  size?: string;
}

const StyledButton = styled.button<DefaultButtonProps>`
  ${({ variant }) => selectVariant(variant)}
  ${({ size }) => selectSize(size)}
  ${defaultButtonStyles}
`;

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & DefaultButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
