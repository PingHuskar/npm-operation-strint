const removeLeadingZeros = require(`./removeLeadingZeros`);
const snumpat = require(`./snumpat`);
const sum = require(`./sum`);
const IsMoreThan = require(`./IsMoreThan`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  const base = 10;
  if (snum1 === `0` || snum2 === `0`) {
    return `0`;
  }
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
  const sumArr = [];
  const swap = IsMoreThan(snum1, snum2);
  const arrsnum1 = swap ? snum1.split("") : snum2.split("");
  const arrsnum2 = swap ? snum2.split("") : snum1.split("");
  const arrsnum1r = arrsnum1.reverse();
  const arrsnum2r = arrsnum2.reverse();
  let c = 0;
  for (const a2 of arrsnum2r) {
    let carry = 0;
    let ra2 = [];
    for (const a1 of arrsnum1r) {
      if (a2 == `0`) {
        break;
      }
      let r = parseInt(a1) * parseInt(a2) + carry;
      ra2.push(`${r % base}`);
      carry = (r - (r % base)) / base;
    }
    ra2.push(carry);
    sumArr.push(ra2.reverse().join("") + "0".repeat(c));
    c += 1;
  }
  return sumArr
    .filter((l) => !/^0+$/g.test(l))
    .reduce((a, c) => sum(a, c), `0`);
};
