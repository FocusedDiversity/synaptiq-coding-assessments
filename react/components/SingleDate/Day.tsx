import clsx from "clsx";

interface DayProps {
  day: Date | null;
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const Day = ({ day, selectedDate, setSelectedDate }: DayProps) => {
  const isSelected =
    day &&
    selectedDate &&
    day.getDate() === selectedDate.getDate() &&
    day.getMonth() === selectedDate.getMonth() &&
    day.getFullYear() === selectedDate.getFullYear();

  const isToday =
    day &&
    new Date().getDate() === day.getDate() &&
    new Date().getMonth() === day.getMonth() &&
    new Date().getFullYear() === day.getFullYear();

  return (
    <div
      className={clsx(
        "flex justify-center rounded-md px-1 py-1 transition-[background-color,color] select-none flex-1",
        isSelected && "bg-neutral-600 text-white",
        day && isSelected && "hover:bg-neutral-700",
        day && !isSelected && "hover:bg-neutral-300",
        day && "cursor-pointer",
        isToday && "font-bold"
      )}
      onClick={() => day && setSelectedDate(day)}
      data-testid={`day-${day?.getDate()}`}
    >
      {day && day.getDate()}
    </div>
  );
};

export default Day;
