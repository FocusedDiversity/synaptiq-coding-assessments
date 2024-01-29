import { render } from "@testing-library/react";

import Week from "@/components/SingleDate/Week";

describe("Week", () => {
  it("should render days", () => {
    const days = [
      new Date(2024, 1, 1),
      new Date(2024, 1, 2),
      new Date(2024, 1, 3),
      new Date(2024, 1, 4),
      new Date(2024, 1, 5),
      new Date(2024, 1, 6),
      new Date(2024, 1, 7),
    ];

    const { getByText } = render(
      <Week days={days} selectedDate={null} setSelectedDate={() => null} />
    );

    expect(getByText(1)).toBeInTheDocument();
    expect(getByText(2)).toBeInTheDocument();
    expect(getByText(3)).toBeInTheDocument();
    expect(getByText(4)).toBeInTheDocument();
    expect(getByText(5)).toBeInTheDocument();
    expect(getByText(6)).toBeInTheDocument();
    expect(getByText(7)).toBeInTheDocument();
  });
});
