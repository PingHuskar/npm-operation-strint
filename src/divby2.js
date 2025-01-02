const removeLeadingZeros = require(`./removeLeadingZeros`);
const isdivisiblebyx = require(`isdivisiblebyx`);

module.exports = (snum, RmLZeros = true) => {
  if (RmLZeros) {
    snum = removeLeadingZeros(snum);
  }
  const base = 10;
  const retstrarray = [];
  let carry = 0;
  let temp1;
  let temp2 = 0;
  let d = 0;
  for (const s of snum.split("")) {
    temp1 = parseInt(s) + carry * base;
    d = Math.floor(temp1 / 2);
    temp2 = 2 * d;
    retstrarray.push(d);
    carry = temp1 - temp2;
  }
  return RmLZeros
    ? removeLeadingZeros(retstrarray.join("")) +
        (isdivisiblebyx.IsDivisibleBy2(snum) ? `` : `.5`)
    : retstrarray.join("") + (isdivisiblebyx.IsDivisibleBy2(snum) ? `` : `.5`);
};
