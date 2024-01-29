import { format } from "date-fns/format";

import Week from "./Week";
import Header from "./Header";
import { WEEKDAY_NAMES } from "../../lib/dates";

interface MonthProps {
  month: number;
  year: number;
  handleMonthDecrease: (month: number) => void;
  handleMonthIncrease: (month: number) => void;
  weeksForMonth: (Date | null)[][];
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  setInputValue: (value: string) => void;
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
  setInputValue,
  setIsDatePickerOpen,
}: MonthProps) => (
  <div className="flex justify-center items-center w-full flex-col gap-2 border border-gray-300 rounded-md shadow-sm p-2 mt-2">
    <div className="flex flex-col w-full gap-3">
      <Header
        month={month}
        year={year}
        handleMonthDecrease={handleMonthDecrease}
        handleMonthIncrease={handleMonthIncrease}
      />
      <div>
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
              setInputValue(format(date, "yyyy/MM/dd"));
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Month;
