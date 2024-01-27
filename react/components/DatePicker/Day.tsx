import { useState } from "react";
import clsx from "clsx";

interface DayProps {
  day?: number | null;
  isSelected?: boolean;
  isToday?: boolean;
  onClick?: (day: number) => void;
}

const Day = ({ day, isSelected, isToday, onClick }: DayProps) => {
  return (
    <div
      className={clsx(
        "flex justify-center rounded-md px-3 py-1 transition-[background-color] flex-1",
        isSelected && "bg-neutral-600 text-white",
        isSelected && day && "hover:bg-neutral-700",
        day && !isSelected && "hover:bg-neutral-200",
        day && "cursor-pointer",
        isToday && "font-semibold"
      )}
      onClick={() => onClick && day && onClick(day)}
    >
      {day}
    </div>
  );
};

export default Day;
