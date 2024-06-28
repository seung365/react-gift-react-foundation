import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from '@/components/Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    ratio: { control: { type: 'text' } },
    radius: { control: { type: 'text' } },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  ratio: 'square',
  radius: 'circle',
};
