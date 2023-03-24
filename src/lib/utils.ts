import moment from 'jalali-moment';

export function calculateMonthStart(year: number, month: number): number {
  const firstDay = moment(`${year}/${month}/${1}`, 'jYYYY/jMM/jDD');
  let weekDayOfFirstDay = firstDay.day() + 2;
  if (weekDayOfFirstDay > 7) {
    weekDayOfFirstDay = weekDayOfFirstDay % 7;
  }
  return weekDayOfFirstDay;
}

export function parseDate(date: string): {
  year: number;
  month: number;
  day: number;
} {
  let splittedDate = date.split('/');
  return {
    year: parseInt(splittedDate[0]),
    month: parseInt(splittedDate[1]),
    day: parseInt(splittedDate[2])
  };
}
