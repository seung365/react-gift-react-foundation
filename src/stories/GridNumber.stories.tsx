import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GridNumber, { GridProps } from '@/components/GridNumber';

export default {
  title: 'Components/GridNumber',
  component: GridNumber,
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<GridProps> = (args) => <GridNumber {...args} />;

export const DefaultGridNumber = Template.bind({});

DefaultGridNumber.args = {
  columns: 4,
  gap: '16px',
  children: ' 1\n 2\n 3\n4\n 5\n 6\n7\n 8\n 9\n 10',
};
