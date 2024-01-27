import { useState } from "react";
import clsx from "clsx";

interface DayProps {
  day?: number;
  isSelected?: boolean;
  isToday?: boolean;
  onClick?: (day: number) => void;
}

const Day = ({ day, isSelected, isToday, onClick }: DayProps) => {
  return (
    <div
      className={clsx(
        "flex justify-center rounded-md px-3 py-1 transition-[background-color] cursor-pointer",
        isSelected
          ? "bg-neutral-600 text-white hover:bg-neutral-700"
          : "hover:bg-neutral-200",
        isToday && "font-semibold"
      )}
      onClick={() => onClick && day && onClick(day)}
    >
      {day}
    </div>
  );
};

export default Day;
