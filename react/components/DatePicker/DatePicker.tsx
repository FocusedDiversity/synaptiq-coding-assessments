"use client";

import { useEffect, useState, useRef } from "react";
import { Transition } from "@headlessui/react";

import { getWeeksForMonth } from "../../lib/dates";
import Month from "./Month";
import Input from "./Input";

interface DatePickerProps {
  month?: number;
  year?: number;
  selectedDate?: Date;
}

const DatePicker = ({
  month: monthParam,
  year: yearParam,
  selectedDate: selectedDateParam,
}: DatePickerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [month, setMonth] = useState<number>(
    monthParam || new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    yearParam || new Date().getFullYear()
  );
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const weeksForMonth = getWeeksForMonth(month, year);

  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    selectedDateParam || null
  );

  const handleMonthIncrease = (month: number) => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month);
    }
  };

  const handleMonthDecrease = (month: number) => {
    if (month === -1) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDatePickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <Input
        selectedDate={selectedDate}
        setIsDatePickerOpen={setIsDatePickerOpen}
        setSelectedDate={setSelectedDate}
        setYear={setYear}
        setMonth={setMonth}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Transition
        show={isDatePickerOpen}
        enter="transition-[opacity,transform] duration-150"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition-[opacity,transform] duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <Month
          month={month}
          year={year}
          handleMonthDecrease={handleMonthDecrease}
          handleMonthIncrease={handleMonthIncrease}
          weeksForMonth={weeksForMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setInputValue={setInputValue}
          setIsDatePickerOpen={setIsDatePickerOpen}
        />
      </Transition>
    </div>
  );
};

export default DatePicker;
