import Day from "./Day";

interface WeekProps {
  days: (number | string | null)[];
}

const Week = ({ days }: WeekProps) => (
  <div className="flex justify-between w-full">
    {days.map((day, index) => (
      <Day key={index} day={day} />
    ))}
  </div>
);

export default Week;
