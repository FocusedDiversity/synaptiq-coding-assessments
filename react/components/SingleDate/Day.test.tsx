import { render, screen, fireEvent } from "@testing-library/react";

import Day from "@/components/SingleDate/Day";

describe("Day", () => {
  it("should render the number of the day", () => {
    const date = new Date();
    const { getByText } = render(
      <Day day={date} selectedDate={null} setSelectedDate={() => null} />
    );

    expect(getByText(date.getDate())).toBeInTheDocument();
  });

  it("should render today's date as bold", () => {
    const date = new Date();
    const { container } = render(
      <Day day={date} selectedDate={null} setSelectedDate={() => null} />
    );

    expect(container.firstChild).toHaveClass("font-bold");
  });

  it("should render a bold number of the day if the day is the selected day", () => {
    const date = new Date();
    const { container } = render(
      <Day day={date} selectedDate={date} setSelectedDate={() => null} />
    );

    expect(container.firstChild).toHaveClass("bg-neutral-600 text-white");
  });

  it("should set the selected date", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    render(
      <Day day={date} selectedDate={date} setSelectedDate={setSelectedDate} />
    );

    const dayDiv = await screen.getByTestId(`day-${date.getDate()}`);

    fireEvent.click(dayDiv);

    expect(setSelectedDate).toHaveBeenCalledWith(date);
  });
});
