import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ImageProps {
  src: string;
  radius?: 'circle' | number;
  ratio?: 'square' | 'auto' | string;
}

const getPaddingTop = (ratio: 'square' | string) => {
  if (ratio === 'square') {
    return '100%';
  }
  const numericRatio = ratio.split('/').map(Number);
  return `calc(${numericRatio[1]} / ${numericRatio[0]} * 100%)`;
};

const Wrapper = styled.div<{ ratio: 'square' | 'auto' | string }>`
  position: relative;
  width: 100%;
  ${(props) =>
    props.ratio !== 'auto'
      ? css`
          padding-top: ${getPaddingTop(props.ratio)};
        `
      : css`
          height: auto;
        `}
`;

const ImageElement = styled.img<{ radius?: 'circle' | number }>`
  ${(props) => {
    if (props.radius === 'circle') {
      return css`
        border-radius: 50%;
      `;
    }
    if (typeof props.radius === 'number') {
      return css`
        border-radius: ${props.radius}px;
      `;
    }
    return '';
  }}
  width: 100%;
  height: auto;
`;

function Image({ src, radius, ratio = 'auto' }: ImageProps) {
  return (
    <Wrapper ratio={ratio}>
      <ImageElement src={src} radius={radius} />
    </Wrapper>
  );
}

export default Image;
