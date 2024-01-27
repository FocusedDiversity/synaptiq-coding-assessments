import { useState, ChangeEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import Week from "./Week";
import { getWeeksForMonth, monthNames } from "../../lib/dates";

interface DatePickerProps {
  month?: number;
  year?: number;
}

const DatePicker = ({
  month: monthParam,
  year: yearParam,
}: DatePickerProps) => {
  const [month, setMonth] = useState<number>(
    monthParam || new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    yearParam || new Date().getFullYear()
  );

  const weeksForMonth = getWeeksForMonth(month, year);

  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full flex-col gap-2">
      <div className="flex justify-between w-full">
        <ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
        <div>
          {monthNames[month]} {year}
        </div>
        <ChevronRightIcon className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="flex flex-col">
        <Week days={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />
        {weeksForMonth.map((week, index) => (
          <Week key={index} days={week} />
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
