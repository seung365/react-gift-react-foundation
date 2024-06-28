import React from 'react';
import styled from '@emotion/styled';

export interface ImageProps {
  src: string;
  radius?: 'circle' | number;
  ratio?: 'square' | 'auto' | '16/9';
}

const ratioStyles = (ratio?: string) => {
  switch (ratio) {
    case 'square':
      return `
        width: 100px; height: 100px
      `;
    case '16/9':
      return `
        width: 160px; height: 90px
      `;
    case 'auto':
      return `
        width: auto;
        height: auto;
      `;
    default:
      return `
        width: 100%;
        height: auto;
      `;
  }
};

const StyledImage = styled.img<ImageProps>`
  ${({ radius }) => {
    if (radius === 'circle') {
      return `border-radius: 50%;`;
    }
    if (typeof radius === 'number') {
      return `border-radius: ${radius}px;`;
    }
    return '';
  }}

  ${({ ratio }) => ratioStyles(ratio)};
  object-fit: cover;
`;

function Image({ src, radius, ratio }: ImageProps) {
  return <StyledImage src={src} alt="" radius={radius} ratio={ratio} />;
}

export default Image;
