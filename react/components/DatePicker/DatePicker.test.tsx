import { render, screen, fireEvent } from "@testing-library/react";

import DatePicker from "@/components/DatePicker";

describe("DatePicker", () => {
  it("should render the date picker", async () => {
    const { getByText } = render(<DatePicker month={0} year={2024} />);

    expect(getByText("Start date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-input");

    fireEvent.click(input);

    expect(getByText("January 2024")).toBeInTheDocument();
  });

  it("should increase the month", async () => {
    const { getByText } = render(<DatePicker month={0} year={2024} />);

    expect(getByText("Start date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-input");

    fireEvent.click(input);

    const increaseMonthButton = await screen.getByTestId("increase-month");

    fireEvent.click(increaseMonthButton);

    expect(getByText("February 2024")).toBeInTheDocument();
  });

  it("should increase the month correctly if we are in december", async () => {
    const { getByText } = render(<DatePicker month={11} year={2024} />);

    expect(getByText("Start date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-input");

    fireEvent.click(input);

    const increaseMonthButton = await screen.getByTestId("increase-month");

    fireEvent.click(increaseMonthButton);

    expect(getByText("January 2025")).toBeInTheDocument();
  });

  it("should decrease the month", async () => {
    const { getByText } = render(<DatePicker month={1} year={2024} />);

    expect(getByText("Start date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-input");

    fireEvent.click(input);

    const decreaseMonthButton = await screen.getByTestId("decrease-month");

    fireEvent.click(decreaseMonthButton);

    expect(getByText("January 2024")).toBeInTheDocument();
  });

  it("should decrease the month correctly if we are in January", async () => {
    const { getByText } = render(<DatePicker month={0} year={2024} />);

    expect(getByText("Start date")).toBeInTheDocument();

    const input = await screen.getByTestId("date-input");

    fireEvent.click(input);

    const decreaseMonthButton = await screen.getByTestId("decrease-month");

    fireEvent.click(decreaseMonthButton);

    expect(getByText("December 2023")).toBeInTheDocument();
  });
});
