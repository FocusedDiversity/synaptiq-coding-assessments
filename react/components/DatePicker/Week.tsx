import Day from "./Day";

interface WeekProps {
  days: (number | null)[];
}

const Week = ({ days }: WeekProps) => {
  return (
    <div className="flex justify-between w-[300px]">
      {days.map((day, index) => (
        <Day key={index} day={day} />
      ))}
    </div>
  );
};

export default Week;
