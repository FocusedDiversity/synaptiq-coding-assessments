import { render, screen, fireEvent } from "@testing-library/react";

import Month from "@/components/DatePicker/Month";
import { getWeeksForMonth } from "@/lib/dates";

describe("Month", () => {
  it("should render the names of the weekdays", () => {
    const weeksForMonth = getWeeksForMonth(1, 2024);

    const { getByText } = render(
      <Month
        month={1}
        year={2024}
        weeksForMonth={weeksForMonth}
        handleMonthDecrease={() => null}
        handleMonthIncrease={() => null}
        selectedDate={null}
        setSelectedDate={() => null}
        setInputValue={() => null}
        setIsDatePickerOpen={() => null}
      />
    );

    expect(getByText("Su")).toBeInTheDocument();
    expect(getByText("Mo")).toBeInTheDocument();
    expect(getByText("Tu")).toBeInTheDocument();
    expect(getByText("We")).toBeInTheDocument();
    expect(getByText("Th")).toBeInTheDocument();
    expect(getByText("Fr")).toBeInTheDocument();
    expect(getByText("Sa")).toBeInTheDocument();
  });

  it("should set the selected date", async () => {
    const month = 0;
    const year = 2024;
    const weeksForMonth = getWeeksForMonth(month, year);
    const setSelectedDate = jest.fn();
    const setIsDatePickerOpen = jest.fn();
    const setInputValue = jest.fn();

    const date = new Date(year, month, 1);

    render(
      <Month
        month={month}
        year={year}
        weeksForMonth={weeksForMonth}
        handleMonthDecrease={() => null}
        handleMonthIncrease={() => null}
        selectedDate={null}
        setSelectedDate={setSelectedDate}
        setInputValue={setInputValue}
        setIsDatePickerOpen={setIsDatePickerOpen}
      />
    );

    const day1 = await screen.getByTestId("day-1");

    fireEvent.click(day1);

    expect(setSelectedDate).toHaveBeenCalledWith(date);
    expect(setIsDatePickerOpen).toHaveBeenCalledWith(false);
    expect(setInputValue).toHaveBeenCalledWith("2024/01/01");
  });
});
