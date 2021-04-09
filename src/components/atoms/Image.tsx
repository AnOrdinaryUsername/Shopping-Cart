import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

const Image = ({ alt, src }: ImageProps) => {
  return <ResponsiveImage alt={alt || ''} src={src} />;
};

export default Image;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: inherit;
`;
