import React, { AnchorHTMLAttributes } from 'react';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
}

const Anchor = ({ children, link, ...props }: AnchorProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link} {...props}>
      {children}
    </a>
  );
};

export default Anchor;
