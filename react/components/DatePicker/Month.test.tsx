import { render } from "@testing-library/react";

import Month from "./Month";
import { getWeeksForMonth } from "../../lib/dates";

describe("Month", () => {
  it("should render weeks", () => {
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
});
