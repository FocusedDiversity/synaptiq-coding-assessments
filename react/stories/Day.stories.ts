import type { Meta, StoryObj } from "@storybook/react";

import DayComponent from "../components/DatePicker/Day";

const meta = {
  title: "Example/DatePicker/Day",
  component: DayComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isSelected: { control: "boolean" },
    isToday: { control: "boolean" },
  },
} satisfies Meta<typeof DayComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Day: Story = {
  args: {
    day: new Date(),
    isSelected: false,
    isToday: false,
  },
};
