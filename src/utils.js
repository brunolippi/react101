export const getFormattedNumber = (number) => {
  if (number < 10) {
    return `#00${number}`;
  } else if (number < 100) {
    return `#0${number}`;
  }
  return `#${number}`;
};
