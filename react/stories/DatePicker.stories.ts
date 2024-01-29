import type { Meta, StoryObj } from "@storybook/react";

import DatePickerComponent from "../components/SingleDate/index";

const meta = {
  title: "Example/DatePicker",
  component: DatePickerComponent,
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {},
};
