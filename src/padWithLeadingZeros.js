module.exports = (num, totalLength) => {
  return String(num).padStart(totalLength, "0");
};