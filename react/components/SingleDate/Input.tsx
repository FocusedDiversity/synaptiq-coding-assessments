import { CalendarDaysIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { toDate } from "date-fns/toDate";
import { isValid } from "date-fns/isValid";
import { add } from "date-fns/add";
import { sub } from "date-fns/sub";
import { format } from "date-fns/format";
import { useEffect, useRef } from "react";

interface InputProps {
  label?: string;
  selectedDate: Date | null;
  setIsDatePickerOpen: (isOpen: boolean) => void;
  setSelectedDate: (date: Date | null) => void;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Input = ({
  label = "Single date",
  selectedDate,
  setIsDatePickerOpen,
  setSelectedDate,
  setYear,
  setMonth,
  inputValue,
  setInputValue,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      inputValue.match(/\d{4}\/\d{2}\/\d{2}/g) &&
      isValid(toDate(inputValue))
    ) {
      const [year, month, day] = inputValue.split("/");
      setYear(Number(year));
      setMonth(Number(month) - 1);
      setSelectedDate(toDate(inputValue));
    } else {
      setSelectedDate(null);
    }
  }, [inputValue]);

  return (
    <div>
      <label
        htmlFor="date"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
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
          placeholder="YYYY/MM/DD"
          data-testid="date-input"
          ref={inputRef}
          value={inputValue}
          onClick={() => setIsDatePickerOpen(true)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            const inputDate = toDate(inputValue);
            const isValidDate =
              inputValue.match(/\d{4}\/\d{2}\/\d{2}/g) && isValid(inputDate);

            if (e.key === "Escape") {
              setIsDatePickerOpen(false);
              inputRef.current?.blur();
            }

            if (e.key === "Enter" && isValidDate) {
              setIsDatePickerOpen(false);
              setSelectedDate(inputDate);
              inputRef.current?.blur();
            }

            if (e.key === "ArrowRight") {
              const datePlusOne = add(inputDate, { days: 1 });
              setSelectedDate(datePlusOne);
              setInputValue(format(datePlusOne, "yyyy/MM/dd"));
            }

            if (e.key === "ArrowLeft") {
              const datePlusOne = sub(inputDate, { days: 1 });
              setSelectedDate(datePlusOne);
              setInputValue(format(datePlusOne, "yyyy/MM/dd"));
            }

            if (e.key === "ArrowDown") {
              const datePlusOne = add(inputDate, { days: 7 });
              setSelectedDate(datePlusOne);
              setInputValue(format(datePlusOne, "yyyy/MM/dd"));
            }

            if (e.key === "ArrowUp") {
              const dateMinusOne = sub(inputDate, { days: 7 });
              setSelectedDate(dateMinusOne);
              setInputValue(format(dateMinusOne, "yyyy/MM/dd"));
            }
          }}
        />
        {selectedDate && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <XCircleIcon
              className="h-5 w-5 text-gray-400 cursor-pointer"
              aria-hidden="true"
              data-testid="clear-date"
              onClick={() => {
                setInputValue("");
                setSelectedDate(null);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
