export default function getCurrentDate(date: number): string {
  const currentDate = new Date(date);
  const DateString = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월 ${currentDate.getDate()}일 ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  return DateString;
}
