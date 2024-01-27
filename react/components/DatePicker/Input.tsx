import { CalendarDaysIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { format } from "date-fns";

interface InputProps {
  selectedDate: Date | null;
  setIsDatePickerOpen: (isOpen: boolean) => void;
  setSelectedDate: (date: Date | null) => void;
}

const Input = ({
  selectedDate,
  setIsDatePickerOpen,
  setSelectedDate,
}: InputProps) => (
  <div>
    <label
      htmlFor="date"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      Start date
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
        value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
        onClick={() => setIsDatePickerOpen(true)}
      />
      {selectedDate && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <XCircleIcon
            className="h-5 w-5 text-gray-400 cursor-pointer"
            aria-hidden="true"
            onClick={() => setSelectedDate(null)}
          />
        </div>
      )}
    </div>
  </div>
);

export default Input;
