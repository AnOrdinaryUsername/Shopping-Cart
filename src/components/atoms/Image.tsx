import React, { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

const Image = ({ alt, src }: ImageProps) => {
  return <img alt={alt || ''} src={src}></img>;
};

export default Image;
