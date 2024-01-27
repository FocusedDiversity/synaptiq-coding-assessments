import { render } from "@testing-library/react";

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
});
