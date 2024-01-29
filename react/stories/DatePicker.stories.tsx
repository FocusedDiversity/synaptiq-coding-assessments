import type { Meta, StoryObj } from '@storybook/react';

import DatePickerExampleForm from './DatePickerExampleForm';

const meta = {
  title: 'Date Picker',
  component: DatePickerExampleForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePickerExampleForm>;

export default meta;
type Story = StoryObj<typeof DatePickerExampleForm>;

export const Default: Story = {};