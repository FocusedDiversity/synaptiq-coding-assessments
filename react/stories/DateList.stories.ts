import type { Meta, StoryObj } from "@storybook/react";

import DateListComponent from "../components/DateList/index";

const meta = {
  title: "Example/SingleDate",
  component: DateListComponent,
} satisfies Meta<typeof DateListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {},
};
