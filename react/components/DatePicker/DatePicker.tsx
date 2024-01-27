import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";

import { getWeeksForMonth } from "../../lib/dates";
import { format } from "date-fns";
import Month from "./Month";

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
