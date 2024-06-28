import React from 'react';
import styled from '@emotion/styled';

export interface ContainerProps {
  maxWidth?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  max-width: ${(props) => props.maxWidth || '100%'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
`;

function Container({
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  children,
}: ContainerProps) {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  );
}

export default Container;
