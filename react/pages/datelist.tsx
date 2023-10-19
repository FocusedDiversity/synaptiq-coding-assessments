import React from "react";
import SharedLayout from '../app/SharedLayout';
import { DateList } from '../stories/DateList';

export default function DateListPage() {
    const ranges = [
        {
            title: "No Date",
            alias: "no-date",
            period: null,
        },
        {
            title: "Today",
            alias: "today",
            period: {
                since: "today",
                until: "today",
            },
        },
        {
            title: "Yesterday",
            alias: "yesterday",
            period: {
                since: "yesterday",
                until: "yesterday",
            },
        },
        {
            title: "Last 7 days",
            alias: "last7days",
            period: {
                since: "-7d",
                until: "-1d",
            },
        },
    ];

    return (
        <SharedLayout>
            <DateList ranges={ranges} />
        </SharedLayout>
    );
}
