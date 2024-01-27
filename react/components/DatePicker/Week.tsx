import Day from "./Day";

interface WeekProps {
  days: (Date | string | null)[];
  selectedDate?: Date;
}

const Week = ({ days, selectedDate }: WeekProps) => (
  <div className="flex justify-between w-full">
    {days.map((day, index) => (
      <Day key={index} day={day} selectedDate={selectedDate} />
    ))}
  </div>
);

export default Week;
