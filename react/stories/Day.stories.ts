import type { Meta, StoryObj } from "@storybook/react";

import DayComponent from "../components/DatePicker/Day";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Day",
  component: DayComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
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
    day: 5,
    isSelected: false,
    isToday: false,
  },
};
