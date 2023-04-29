/**
 * @description - returns the time difference between two dates
 * @param {String} start - start date
 * @param {String} end - end date
 * @returns
 */
export const timeDifference = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  // console.log(`start: ${startDate.getTime()}, end: ${endDate.getTime()}`);
  const difference = endDate.getTime() - startDate.getTime();
  // console.log(`difference: ${difference}`);
  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  // console.log(`daysDifference: ${daysDifference}`);
  const hoursDifference = Math.floor((difference / 1000 / 60 / 60) % 24);
  // console.log(`hoursDifference: ${hoursDifference}`);
  const minutesDifference = Math.floor((difference / 1000 / 60) % 60);
  // console.log(`minutesDifference: ${minutesDifference}`);
  const secondsDifference = Math.floor((difference / 1000) % 60);
  // console.log(`secondsDifference: ${secondsDifference}`);
  return `${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds`;
};
