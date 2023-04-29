import appendLeadingZeroes from './appendLeadingZeroes';

export default (dateToFormat) => {
  let date = new Date(dateToFormat);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  let formatted_date = `${date.getFullYear()}-${appendLeadingZeroes(
    date.getMonth() + 1
  )}-${appendLeadingZeroes(date.getDate())}`;
  return formatted_date;
};
