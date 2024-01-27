import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import { MONTH_NAMES } from "../../lib/dates";

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
      data-testid="decrease-month"
    />
    <div className="select-none">
      {MONTH_NAMES[month]} {year}
    </div>
    <ChevronRightIcon
      className="w-6 h-6 cursor-pointer hover:bg-neutral-300 rounded-md transition-[background-color]"
      onClick={() => handleMonthIncrease(month + 1)}
      data-testid="increase-month"
    />
  </div>
);

export default Header;
