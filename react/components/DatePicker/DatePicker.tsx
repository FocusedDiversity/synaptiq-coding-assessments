import { useState, ChangeEvent } from "react";

import Week from "./Week";

interface DatePickerProps {
  weeks: (number | null)[][];
}

const DatePicker = ({ weeks }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col">
        <Week days={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />
        {weeks.map((week, index) => (
          <Week key={index} days={week} />
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
