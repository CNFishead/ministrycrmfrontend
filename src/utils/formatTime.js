/**
 * Format time to a human readable format, e.g. 01:14:00
 */
export default (num) => {
  const hours = Math.floor(num / 3600);
  const minutes = Math.floor((num - hours * 3600) / 60);
  const seconds = (num - hours * 3600 - minutes * 60).toFixed(0);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;  
};
