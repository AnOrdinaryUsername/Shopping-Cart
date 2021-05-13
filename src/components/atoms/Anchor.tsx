import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

interface LinkProps {
  hasUnderline?: boolean;
  hasHover?: boolean;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps {
  link: string;
}

const Anchor = ({ children, hasHover, hasUnderline, link, ...props }: AnchorProps) => {
  return (
    <Link
      hasHover={hasHover}
      hasUnderline={hasUnderline}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      {...props}
    >
      {children}
    </Link>
  );
};

const Link = styled.a<LinkProps>`
  ${({ hasUnderline }) =>
    hasUnderline &&
    `
    text-decoration: underline solid black 0.2rem;
    text-underline-offset: 0.2rem;
  `}

  ${({ hasHover }) =>
    hasHover &&
    `
    &:hover {
      background-color: var(--invert-bg);
      color: var(--invert-font);
      text-decoration: none;
    }
  `}
`;

export default Anchor;
