import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/16/solid";

import Week from "./Week";
import { getWeeksForMonth, MONTH_NAMES, WEEKDAY_NAMES } from "../../lib/dates";
import { format } from "date-fns";

interface HeaderProps {
  month: number;
  year: number;
  handleMonthDecrease: (month: number) => void;
  handleMonthIncrease: (month: number) => void;
}

const Header = ({
  month,
  year,
  handleMonthDecrease,
  handleMonthIncrease,
}: HeaderProps) => (
  <div className="flex justify-between w-full">
    <ChevronLeftIcon
      className="w-6 h-6 cursor-pointer hover:bg-neutral-300 rounded-md transition-[background-color]"
      onClick={() => handleMonthDecrease(month - 1)}
    />
    <div className="select-none">
      {MONTH_NAMES[month]} {year}
    </div>
    <ChevronRightIcon
      className="w-6 h-6 cursor-pointer hover:bg-neutral-300 rounded-md transition-[background-color]"
      onClick={() => handleMonthIncrease(month + 1)}
    />
  </div>
);

interface MonthProps {
  month: number;
  year: number;
  handleMonthDecrease: (month: number) => void;
  handleMonthIncrease: (month: number) => void;
  weeksForMonth: (Date | null)[][];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setIsDatePickerOpen: (isOpen: boolean) => void;
}

const Month = ({
  month,
  year,
  handleMonthDecrease,
  handleMonthIncrease,
  weeksForMonth,
  selectedDate,
  setSelectedDate,
  setIsDatePickerOpen,
}: MonthProps) => {
  return (
    <div className="flex justify-center items-center w-full flex-col gap-2 border border-gray-300 rounded-md shadow-sm p-2 mt-2">
      <div className="flex flex-col w-full">
        <Header
          month={month}
          year={year}
          handleMonthDecrease={handleMonthDecrease}
          handleMonthIncrease={handleMonthIncrease}
        />
        <div className="flex select-none">
          {WEEKDAY_NAMES.map((day, index) => (
            <div
              key={index}
              className="flex justify-center flex-1 text-neutral-500"
            >
              {day}
            </div>
          ))}
        </div>
        {weeksForMonth.map((week, index) => (
          <Week
            key={index}
            days={week}
            selectedDate={selectedDate}
            setSelectedDate={(date) => {
              setSelectedDate(date);
              setIsDatePickerOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

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
  const [month, setMonth] = useState<number>(
    monthParam || new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    yearParam || new Date().getFullYear()
  );
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const weeksForMonth = getWeeksForMonth(month, year);

  const [selectedDate, setSelectedDate] = useState<Date>(
    selectedDateParam || new Date()
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

  return (
    <>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <CalendarDaysIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          name="date"
          id="date"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          value={format(selectedDate, "yyyy-MM-dd")}
          onClick={() => setIsDatePickerOpen(true)}
        />
      </div>
      {isDatePickerOpen && (
        <Month
          month={month}
          year={year}
          handleMonthDecrease={handleMonthDecrease}
          handleMonthIncrease={handleMonthIncrease}
          weeksForMonth={weeksForMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setIsDatePickerOpen={setIsDatePickerOpen}
        />
      )}
    </>
  );
};

export default DatePicker;
