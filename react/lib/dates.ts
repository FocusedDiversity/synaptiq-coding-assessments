import { format } from "date-fns";

export const getWeeksForMonth = (
  month: number,
  year: number
): (Date | null)[][] => {
  const weeks: (Date | null)[][] = [];
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  let currentWeekStart = new Date(firstOfMonth);
  currentWeekStart.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  while (currentWeekStart <= lastOfMonth) {
    const week: (Date | null)[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);

      if (date.getMonth() === month) {
        week.push(date);
      } else {
        week.push(null);
      }
    }

    weeks.push(week);

    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return weeks;
};

export const getMonthNames = () => {
  const months = [];

  for (let i = 0; i < 12; i++) {
    // Create a date object for the first day of each month
    const date = new Date(2024, i, 1);
    // Format the date to get the month name and add it to the array
    months.push(format(date, "MMMM"));
  }

  return months;
};

export const MONTH_NAMES = getMonthNames();

export const getWeekdayNames = () => {
  const week = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(2024, 0, i); // January 1, 2024 is a Monday, so this starts on Sunday as new Date(2024, 0, 0) would be the previous Sunday
    week.push(format(date, "EEEEEE"));
  }

  return week;
};

export const WEEKDAY_NAMES = getWeekdayNames();
