import clsx from "clsx";

interface DayProps {
  day?: number | string | null;
  isSelected?: boolean;
  isToday?: boolean;
  onClick?: (day: number) => void;
}

const Day = ({ day, isSelected, isToday, onClick }: DayProps) => {
  return (
    <div
      className={clsx(
        "flex justify-center rounded-md px-3 py-1 transition-[background-color] select-none flex-1",
        isSelected && "bg-neutral-600 text-white",
        typeof day === "number" && isSelected && "hover:bg-neutral-700",
        typeof day === "number" && !isSelected && "hover:bg-neutral-200",
        typeof day === "number" && "cursor-pointer",
        isToday && "font-semibold"
      )}
      onClick={() => onClick && typeof day === "number" && onClick(day)}
    >
      {day}
    </div>
  );
};

export default Day;
