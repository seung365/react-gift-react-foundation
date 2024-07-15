import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface Theme {
  backgroundColor: string;
  color: string;
  border?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme: Theme;
  size?: 'small' | 'large' | 'responsive';
  onClick?: () => void;
}

// Theme-based styles
const themeStyles = (theme: Theme) => css`
  background-color: ${theme.backgroundColor};
  color: ${theme.color};
  ${theme.border ? `border: ${theme.border};` : 'border: none;'}
`;

// Size-based styles
const sizeStyles = (size: string) => {
  switch (size) {
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
      return css`
        padding: 8px 16px;
        font-size: 14px;
        @media (min-width: 600px) {
          padding: 10px 20px;
          font-size: 16px;
        }
        @media (min-width: 900px) {
          padding: 12px 24px;
          font-size: 18px;
        }
      `;
    default:
      return css`
        padding: 8px 16px;
        font-size: 16px;
      `;
  }
};

// Styled Button component
const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  cursor: pointer;
  ${(props) => themeStyles(props.theme)}
  ${(props) => sizeStyles(props.size || 'small')}
`;

function Button({ children, theme, size = 'small', onClick }: ButtonProps) {
  return (
    <StyledButton theme={theme} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
