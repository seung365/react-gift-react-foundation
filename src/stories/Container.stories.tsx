import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from '@/components/Container';

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'text' },
    children: { control: 'text' },
    flexDirection: { control: 'radio', options: ['row', 'column'] },
    justifyContent: {
      control: 'radio',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    alignItems: {
      control: 'radio',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
  },
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const DefaultContainer = Template.bind({});
DefaultContainer.args = {
  children: <div>hello world</div>,
  maxWidth: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};
