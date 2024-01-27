import type { Meta, StoryObj } from "@storybook/react";

import WeekComponent from "../components/DatePicker/Week";

const meta = {
  title: "Example/DatePicker/Week",
  component: WeekComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WeekComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Week: Story = {
  args: {
    days: [null, null, null, 1, 2, 3, 4],
  },
};
