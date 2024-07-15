import React from 'react';
import styled from '@emotion/styled';

export interface GridProps {
  columns: number;
  gap?: string;
  children: React.ReactNode;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap || '16px'};
`;

function GridNumber({ columns, gap, children }: GridProps) {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
}

export default GridNumber;
