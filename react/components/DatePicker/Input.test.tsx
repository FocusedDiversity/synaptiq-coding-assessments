import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should an empty input with a placeholder", async () => {
    render(
      <Input
        selectedDate={null}
        setIsDatePickerOpen={() => null}
        setSelectedDate={() => null}
        setYear={() => null}
        setMonth={() => null}
        inputValue=""
        setInputValue={() => null}
      />
    );

    const input = await screen.getByTestId("date-input");

    expect(input).toHaveAttribute("placeholder", "YYYY/MM/DD");
  });
});
