import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '@/components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    customSize: {
      control: 'select',
      options: ['small', 'large', 'responsive'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  value: 'Default Input',
  disabled: false,
  invalid: false,
  customSize: 'small',
};
