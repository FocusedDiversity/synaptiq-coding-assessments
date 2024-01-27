export const getWeeksForMonth = (
  month: number,
  year: number
): (Date | null)[][] => {
  const weeks: (Date | null)[][] = [];
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  // Find the previous Sunday to start the first week
  let currentWeekStart = new Date(firstOfMonth);
  currentWeekStart.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  // Iterate over the weeks
  while (currentWeekStart <= lastOfMonth) {
    const week: (Date | null)[] = [];

    for (let i = 0; i < 7; i++) {
      // If the date is within the current month, push the date, else push null
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);

      if (date.getMonth() === month) {
        week.push(date);
      } else {
        week.push(null);
      }
    }

    weeks.push(week);

    // Move to the next week
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return weeks;
};

export const monthNames = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
