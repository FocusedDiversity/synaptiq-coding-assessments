import type { Meta, StoryObj } from '@storybook/react';
import { OptionList } from './OptionList';

const meta = {
    title: 'OptionList',
    component: OptionList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof OptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: { args: { onChange: (value: string) => void; options: ({ label: string; value: string })[]; selected: string } } = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        selected: 'option1',
        onChange: (value: string) => {
            console.log(value);
        }
    },
};