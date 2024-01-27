import { render, screen, fireEvent } from "@testing-library/react";
import { toDate } from "date-fns/toDate";

import Input from "@/components/DatePicker/Input";

describe("Input", () => {
  it("should render an empty input with a placeholder", async () => {
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

  it("should set the input value if the input value changes", async () => {
    const date = new Date();
    const setInputValue = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={() => null}
        setYear={() => null}
        setMonth={() => null}
        inputValue=""
        setInputValue={setInputValue}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.change(input, { target: { value: "2021/01/01" } });

    expect(setInputValue).toHaveBeenCalledWith("2021/01/01");
  });

  it("should update the selected date if the date is a valid date string and the user hits the 'Enter' key", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    const setIsDatePickerOpen = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={setIsDatePickerOpen}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={() => null}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "Enter" });

    expect(setIsDatePickerOpen).toHaveBeenCalledWith(false);
    expect(setSelectedDate).toHaveBeenCalledWith(toDate("2021/01/01"));
  });

  it("should add one day to the selected date if the date is a valid date string and the user hits the 'ArrowRight' key", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    const setInputValue = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={setInputValue}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "ArrowRight" });

    expect(setSelectedDate).toHaveBeenCalledWith(toDate("2021/01/02"));
    expect(setInputValue).toHaveBeenCalledWith("2021/01/02");
  });

  it("should subtract one day to the selected date if the date is a valid date string and the user hits the 'ArrowLeft' key", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    const setInputValue = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={setInputValue}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "ArrowLeft" });

    expect(setSelectedDate).toHaveBeenCalledWith(toDate("2020/12/31"));
    expect(setInputValue).toHaveBeenCalledWith("2020/12/31");
  });

  it("should add seven days to the selected date if the date is a valid date string and the user hits the 'ArrowDown' key", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    const setInputValue = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={setInputValue}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "ArrowDown" });

    expect(setSelectedDate).toHaveBeenCalledWith(toDate("2021/01/08"));
    expect(setInputValue).toHaveBeenCalledWith("2021/01/08");
  });

  it("should subtract seven days to the selected date if the date is a valid date string and the user hits the 'ArrowUp' key", async () => {
    const date = new Date();
    const setSelectedDate = jest.fn();
    const setInputValue = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={setInputValue}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "ArrowUp" });

    expect(setSelectedDate).toHaveBeenCalledWith(toDate("2020/12/25"));
    expect(setInputValue).toHaveBeenCalledWith("2020/12/25");
  });

  it("should close the date picker if the user hits the 'Escape' key", async () => {
    const date = new Date();
    const setIsDatePickerOpen = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={setIsDatePickerOpen}
        setSelectedDate={() => null}
        setYear={() => null}
        setMonth={() => null}
        inputValue="2021/01/01"
        setInputValue={() => null}
      />
    );

    const input = await screen.getByTestId("date-input");

    input.focus();

    fireEvent.keyDown(input, { key: "Escape" });

    expect(setIsDatePickerOpen).toHaveBeenCalledWith(false);
  });

  it("should clear the selected date if the clear icon is clicked", async () => {
    const date = new Date();
    const setInputValue = jest.fn();
    const setSelectedDate = jest.fn();

    render(
      <Input
        selectedDate={date}
        setIsDatePickerOpen={() => null}
        setSelectedDate={setSelectedDate}
        setYear={() => null}
        setMonth={() => null}
        inputValue=""
        setInputValue={setInputValue}
      />
    );

    const clearDate = await screen.getByTestId("clear-date");

    fireEvent.click(clearDate);

    expect(setInputValue).toHaveBeenCalledWith("");
    expect(setSelectedDate).toHaveBeenCalledWith(null);
  });
});
