import type { Meta, StoryObj } from "@storybook/react";

import DatePickerComponent from "../components/DatePicker/index";

const meta = {
  title: "Example/DatePicker/DatePicker",
  component: DatePickerComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {},
};
