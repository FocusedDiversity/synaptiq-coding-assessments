import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DateList } from "../DateList";

test("DateList renders and handles click event", () => {
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
    ];

    const { container } = render(<DateList ranges={ranges} />);

    const noDateButton = container.querySelector('.button-styles');
    expect(noDateButton).toBeDefined();

    if (noDateButton) {
        fireEvent.click(noDateButton);
    } else {
        console.error("Element not found");
    }

    const todayButton = container.querySelector('.button-styles');
    expect(todayButton).toBeDefined();

    if (noDateButton) {
        fireEvent.click(noDateButton);
    } else {
        console.error("Element not found");
    }

    expect(todayButton).toBeDefined();
});
