import type { Meta, StoryObj } from "@storybook/react";

import SingleDateComponent from "../components/SingleDate/index";

const meta = {
  title: "Example/SingleDate",
  component: SingleDateComponent,
} satisfies Meta<typeof SingleDateComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {},
};
