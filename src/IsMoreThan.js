const removeLeadingZeros = require(`./removeLeadingZeros`);
const snumpat = require(`./snumpat`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  if (RmLZeros) {
    snum1 = removeLeadingZeros(snum1);
    snum2 = removeLeadingZeros(snum2);
  }
  if (!snum1 || !snum2) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum1) || !snumpat.test(snum2)) {
    return `Numbers must be numbers`;
  }
  const lensnum1 = snum1.length;
  const lensnum2 = snum2.length;
  if (lensnum2 > lensnum1) return false;
  if (lensnum1 > lensnum2) return true;
  const a1 = snum1.split(``);
  const a2 = snum2.split(``);
  for (const p in a1) {
    if (a1.at(p) != a2.at(p)) {
      return parseInt(a1.at(p)) > parseInt(a2.at(p));
    }
  }
  return false;
};
