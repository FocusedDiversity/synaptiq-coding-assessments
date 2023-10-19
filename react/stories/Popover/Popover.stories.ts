import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta = {
    title: 'Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: { args: { onToggle: () => void; active: boolean; activator: string; content: string } } = {
    args: {
        activator: 'Click Me',
        content: 'Popover Data',
        active: false,
        onToggle: () => {
            // Add your toggle logic here
        },
    },
};

export const ActivePopover: { args: { onToggle: () => void; active: boolean; activator: string; content: string } } = {
    args: {
        activator: 'Click Me',
        content: 'Popover Data',
        active: true,
        onToggle: () => {
            // Add your toggle logic here
        },
    },
};
