import React from 'react';
import styled from '@emotion/styled';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #888;
  margin: 2px;
`;

const Title = styled.p`
  width: 100px;
  font-size: 16px;
  color: #333;
  margin: 2px;
`;

const Amount = styled.h2`
  font-size: 14px;
  color: #000;
  margin: 2px;
`;

function GoodsItem({ imageSrc, subtitle, title, amount }: GoodsItemProps) {
  return (
    <GoodsItemWrapper>
      <Image src={imageSrc} alt={title} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>Amount: {amount}</Amount>
    </GoodsItemWrapper>
  );
}

export default GoodsItem;
export { GoodsItemWrapper, Image, Subtitle, Title, Amount };
