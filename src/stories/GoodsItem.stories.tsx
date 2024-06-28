import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from '@/components/GoodsItem';

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
  argTypes: {
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'number' },
  },
} as Meta;

const Template: StoryFn<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const DefaultGoodsItem = Template.bind({});
DefaultGoodsItem.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 100000,
};
