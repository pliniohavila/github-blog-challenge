export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export function daysBetweenDates(date1: string) {
  // Convert both dates to milliseconds
  var date1_ms = new Date(date1).getTime();
  var date2_ms = new Date().getTime();

  // Calculate the difference in milliseconds
  var difference_ms = Math.abs(date1_ms - date2_ms);

  // Convert the difference to days
  var days = Math.ceil(difference_ms / (1000 * 3600 * 24));

  return days;
}
