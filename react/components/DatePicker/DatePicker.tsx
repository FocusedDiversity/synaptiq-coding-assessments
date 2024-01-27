import { useState } from "react";

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
  const [month, setMonth] = useState<number>(
    monthParam || new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    yearParam || new Date().getFullYear()
  );
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const weeksForMonth = getWeeksForMonth(month, year);

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

  return (
    <>
      <Input
        selectedDate={selectedDate}
        setIsDatePickerOpen={setIsDatePickerOpen}
        setSelectedDate={setSelectedDate}
      />
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
