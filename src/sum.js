const removeLeadingZeros = require(`./removeLeadingZeros`);
const padWithLeadingZeros = require(`./padWithLeadingZeros`);
const snumpat = require(`./snumpat`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  const base = 10;
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
  const lensnum1 = snum1.length;
  const lensnum2 = snum2.length;
  const maxlen = Math.max(lensnum1, lensnum2);
  const zsnum1 = padWithLeadingZeros(snum1, maxlen);
  const zsnum2 = padWithLeadingZeros(snum2, maxlen);
  const a1 = zsnum1.split(``).reverse();
  const a2 = zsnum2.split(``).reverse();
  const retstrarr = [];
  let carry = 0;
  for (let d = 0; d < maxlen; d++) {
    let s = parseInt(a1.at(d)) + parseInt(a2.at(d)) + carry;
    retstrarr.push(s % base);
    carry = s >= base ? 1 : 0;
  }
  retstrarr.push(`${carry}`);
  return RmLZeros
    ? removeLeadingZeros(retstrarr.reverse().join(""))
    : carry
    ? retstrarr.reverse().join("")
    : retstrarr.reverse().join("").slice(-maxlen);
};
