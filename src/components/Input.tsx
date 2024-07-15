import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Size = 'small' | 'large' | 'responsive';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  invalid?: boolean;
  customSize?: Size;
  onClick?: () => void;
} // ? 의 경우 해당 옵션이 포함되지도 않을 수 있다.

const getResponsiveStyles = () => css`
  padding: 8px 16px;
  font-size: 14px;

  @media (max-width: 600px) {
    padding: 4px 8px;
    font-size: 12px;
  }
  @media (min-width: 601px) and (max-width: 1200px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  @media (min-width: 1201px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

const getSizeStyles = (customSize?: Size) => {
  switch (customSize) {
    case 'small':
      return css`
        padding: 4px 8px;
        font-size: 12px;
      `;
    case 'large':
      return css`
        padding: 12px 24px;
        font-size: 20px;
      `;
    case 'responsive':
      return getResponsiveStyles();
    default:
      return css`
        padding: 8px 16px;
        font-size: 16px;
      `;
  }

  return css``;
};

const StyledInput = styled.input<InputProps>`
  disabled: true;
  invalid: true;
  cursor: pointer;
  ${(props) => getSizeStyles(props.customSize)}
`;

function Input({ disabled, invalid, customSize, onClick }: InputProps) {
  return (
    <StyledInput
      disabled={disabled}
      invalid={invalid}
      customSize={customSize}
      onClick={onClick}
    />
  );
}

export default Input;
