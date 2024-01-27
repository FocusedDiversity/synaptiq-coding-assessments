import Day from "./Day";

interface WeekProps {
  days: (Date | null)[];
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

const Week = ({ days, selectedDate, setSelectedDate }: WeekProps) => (
  <div className="flex justify-between w-full">
    {days.map((day, index) => (
      <Day
        key={index}
        day={day}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    ))}
  </div>
);

export default Week;
