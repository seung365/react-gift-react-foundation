import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    theme: {
      control: 'select',
      options: ['kakao', 'black', 'outline', 'lightGray', 'darkGary'],
      mapping: {
        kakao: { backgroundColor: 'yellow', color: 'black' },
        black: { backgroundColor: 'black', color: 'white' },
        outline: {
          backgroundColor: 'white',
          color: 'black',
          border: '2px solid black',
        },
        lightGray: { backgroundColor: 'lightgray', color: 'black' },
        darkGary: { backgroundColor: 'darkgray', color: 'black' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'responsive'],
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: '버튼',
  theme: { backgroundColor: 'black', color: 'white' },
  size: 'large',
  onClick: () => alert('클릭했습니다'),
};
