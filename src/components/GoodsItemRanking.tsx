// GoodsItemRanking.tsx
import React from 'react';
import styled from '@emotion/styled';
import { GoodsItemProps, Image, Subtitle, Title, Amount } from './GoodsItem';

export interface RankingItemProps extends GoodsItemProps {
  rankingIndex: number;
}

const RankingBadge = styled.div<{ rankingIndex: number }>`
  background-color: ${(props) => (props.rankingIndex <= 3 ? 'pink' : 'gray')};
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: absolute;
  top: 8px;
  left: 8px;
`;

const RankingGoodsItemWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

function GoodsItemRanking({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}: RankingItemProps) {
  return (
    <RankingGoodsItemWrapper>
      <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
      <Image src={imageSrc} alt={title} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>Amount: {amount}</Amount>
    </RankingGoodsItemWrapper>
  );
}

export default GoodsItemRanking;
