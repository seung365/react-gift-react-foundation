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
        outline: { backgroundColor: 'black', color: 'white' },
        lightGray: { backgroundColor: 'black', color: 'white' },
        darkGary: { backgroundColor: 'black', color: 'white' },
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
  children: 'Dark Theme Large',
  theme: { backgroundColor: 'black', color: 'white' },
  size: 'large',
};
