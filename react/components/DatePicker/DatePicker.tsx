import { useState, ChangeEvent } from "react";

interface DatePickerProps {}

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <input
        type="date"
        className="p-2 border rounded-md"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
