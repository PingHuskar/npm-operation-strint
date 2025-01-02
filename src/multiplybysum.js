const removeLeadingZeros = require(`./removeLeadingZeros`);
const snumpat = require(`./snumpat`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  if (!snum1 || !snum2) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum1) || !snumpat.test(snum2)) {
    return `Numbers must be numbers`;
  }
  if (RmLZeros) {
    snum1 = removeLeadingZeros(snum1);
    snum2 = removeLeadingZeros(snum2);
  }
  let retValue = `0`;
  while (snum2 != `` && snum1 != ``) {
    retValue = sum(retValue, snum1);
    snum2 = minus(snum2, `1`);
  }
  return retValue;
};
