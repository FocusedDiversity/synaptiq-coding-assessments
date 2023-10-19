import type { Meta, StoryObj } from '@storybook/react';
import { DateList } from './DateList';

const meta = {
    title: 'DateList',
    component: DateList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DateList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: { args: { ranges: ({ period: null; alias: string; title: string } | { period: { until: string; since: string }; alias: string; title: string })[] } } = {
    args: {
        ranges: [
            {
                title: 'No Date',
                alias: 'no-date',
                period: null,
            },
            {
                title: 'Today',
                alias: 'today',
                period: {
                    since: 'today',
                    until: 'today',
                },
            },
            {
                title: 'Yesterday',
                alias: 'yesterday',
                period: {
                    since: 'yesterday',
                    until: 'yesterday',
                },
            },
            {
                title: 'Last 7 days',
                alias: 'last7days',
                period: {
                    since: '-7d',
                    until: '-1d',
                },
            },
        ],
    },
};
