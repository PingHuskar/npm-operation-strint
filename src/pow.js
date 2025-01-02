const removeLeadingZeros = require(`./removeLeadingZeros`);
const snumpat = require(`./snumpat`);
const multiply = require(`./multiply`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  if (!snum1 || !snum2) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum1) || !snumpat.test(snum2)) {
    return `Numbers must be numbers`;
  }
  if (snum2 === "0") return "1";
  if (RmLZeros) {
    snum1 = removeLeadingZeros(snum1);
    snum2 = removeLeadingZeros(snum2);
  }
  const arr = [...Array(parseInt(snum2)).keys()].map((i) => snum1);
  return arr.reduce((a, c) => multiply(a, c), "1");
};
