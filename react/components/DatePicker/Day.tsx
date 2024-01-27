import clsx from "clsx";

interface DayProps {
  day?: Date | string | null;
  selectedDate?: Date;
  onClick?: (day: Date) => void;
}

const Day = ({ day, selectedDate, onClick }: DayProps) => {
  const isSelected =
    day instanceof Date &&
    selectedDate instanceof Date &&
    day.getDate() === selectedDate.getDate() &&
    day.getMonth() === selectedDate.getMonth() &&
    day.getFullYear() === selectedDate.getFullYear();

  const isToday =
    day instanceof Date &&
    new Date().getDate() === day.getDate() &&
    new Date().getMonth() === day.getMonth() &&
    new Date().getFullYear() === day.getFullYear();

  return (
    <div
      className={clsx(
        "flex justify-center rounded-md px-3 py-1 transition-[background-color] select-none flex-1",
        isSelected && "bg-neutral-600 text-white",
        day instanceof Date && isSelected && "hover:bg-neutral-700",
        day instanceof Date && !isSelected && "hover:bg-neutral-300",
        day instanceof Date && "cursor-pointer",
        isToday && "font-semibold"
      )}
      onClick={() => onClick && day instanceof Date && onClick(day)}
    >
      {day && day instanceof Date && day.getDate()}
      {day && typeof day === "string" && day}
    </div>
  );
};

export default Day;
