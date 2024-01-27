import { render, screen, fireEvent } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render the month and year", () => {
    const { getByText } = render(
      <Header
        month={0}
        year={2024}
        handleMonthDecrease={() => null}
        handleMonthIncrease={() => null}
      />
    );

    expect(getByText("January 2024")).toBeInTheDocument();
  });

  it("should descrease the month", async () => {
    const handleMonthDecrease = jest.fn();
    render(
      <Header
        month={2}
        year={2024}
        handleMonthDecrease={handleMonthDecrease}
        handleMonthIncrease={() => null}
      />
    );

    const decreaseMonthButton = await screen.getByTestId("decrease-month");

    fireEvent.click(decreaseMonthButton);

    expect(handleMonthDecrease).toHaveBeenCalledWith(1);
  });

  it("should increase the month", async () => {
    const handleMonthIncrease = jest.fn();
    render(
      <Header
        month={2}
        year={2024}
        handleMonthDecrease={() => null}
        handleMonthIncrease={handleMonthIncrease}
      />
    );

    const increaseMonthButton = await screen.getByTestId("increase-month");

    fireEvent.click(increaseMonthButton);

    expect(handleMonthIncrease).toHaveBeenCalledWith(3);
  });
});
