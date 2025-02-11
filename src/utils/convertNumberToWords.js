export default function convertNumber(number) {
  if (number > 0 && number < 1000) {
    return number;
  } else if (number > 1000 && number < 1000000) {
    return Math.floor(number / 1000) + " K+";
  } else if (number > 1000000 && number < 1000000000) {
    return Math.floor(number / 1000000) + " M+";
  } else if (number > 1000000000 && number < 1000000000000) {
    return Math.floor(number / 1000000000) + " B+";
  }
}
