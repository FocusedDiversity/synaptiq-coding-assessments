import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import Week from "./Week";
import { getWeeksForMonth, monthNames } from "../../lib/dates";

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

  const weeksForMonth = getWeeksForMonth(month, year);

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    selectedDateParam || null
  );

  const handleMonthIncrease = (month: number) => {
    setMonth(month + 1);
    if (month + 1 === 11) {
      setYear(year + 1);
    }
  };

  const handleMonthDecrease = (month: number) => {
    setMonth(month - 1);
    if (month - 1 === 0) {
      setYear(year - 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-full flex-col gap-2">
      <div className="flex justify-between w-full">
        <ChevronLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleMonthDecrease(month)}
        />
        <div className="select-none">
          {monthNames[month]} {year}
        </div>
        <ChevronRightIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleMonthIncrease(month)}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
            <div key={index} className="flex justify-center flex-1">
              {day}
            </div>
          ))}
        </div>
        {weeksForMonth.map((week, index) => (
          <Week
            key={index}
            days={week}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
