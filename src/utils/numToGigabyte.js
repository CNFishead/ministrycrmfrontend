/**
 * Convert bytes to gigabytes with 2 decimal places and return as string or mb if less than 1gb
 * 
 */
export default (num) => {
  return num >= 1073741824 ? (num / 1073741824).toFixed(2) + ' GB' : (num / 1048576).toFixed(2) + ' MB';
};
