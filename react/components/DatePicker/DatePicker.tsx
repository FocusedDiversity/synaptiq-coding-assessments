import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import Week from "./Week";
import { getWeeksForMonth, MONTH_NAMES, WEEKDAY_NAMES } from "../../lib/dates";
import { format } from "date-fns";

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
      <input
        value={format(selectedDate, "yyyy-MM-dd")}
        className="rounded-md border px-2 py-1"
        onClick={() => setIsDatePickerOpen(true)}
      />
      {isDatePickerOpen && (
        <div className="flex justify-center items-center w-full flex-col gap-2 border rounded-md p-2 mt-2">
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
          <div className="flex flex-col w-full">
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
      )}
    </>
  );
};

export default DatePicker;
