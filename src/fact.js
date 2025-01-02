const snumpat = require(`./snumpat`);

module.exports = (snum) => {
  if (!snum) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum)) {
    return `Numbers must be numbers`;
  }
  let i = `1`;
  while (snum) {
    i = multiply(snum, i);
    snum = minus(snum, `1`);
  }
  return i;
};