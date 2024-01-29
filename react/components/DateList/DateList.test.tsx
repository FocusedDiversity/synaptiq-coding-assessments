import { render, screen, fireEvent, act } from "@testing-library/react";

import DateList from "@/components/DateList";

describe("DateList", () => {
  it("should render the date list", async () => {
    const { getByText } = render(<DateList />);

    expect(getByText("No Date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-button");

    await act(async () => {
      fireEvent.click(input);
    });

    expect(getByText("Today")).toBeInTheDocument();
  });

  it("should render allow the user to select a date from the list", async () => {
    const { getByText } = render(<DateList />);

    expect(getByText("No Date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-button");

    await act(async () => {
      fireEvent.click(input);
    });

    const today = await screen.getByTestId("date-item-today");

    await act(async () => {
      fireEvent.click(today);
    });

    expect(getByText("Today")).toBeInTheDocument();

    expect(screen.queryByText("No Date")).toBeNull();
  });
});
