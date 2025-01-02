const removeLeadingZeros = require(`./removeLeadingZeros`);
const padWithLeadingZeros = require(`./padWithLeadingZeros`);
const snumpat = require(`./snumpat`);

module.exports = (snum1, snum2, RmLZeros = true) => {
  const base = 10;
  if (RmLZeros) {
    snum1 = removeLeadingZeros(snum1);
    snum2 = removeLeadingZeros(snum2);
  }
  if (!snum1) {
    return `Numbers cannot be empty`;
  }
  if (!snum2) return snum1;
  if (snum1 == snum2) return "0";
  if (!snumpat.test(snum1) || !snumpat.test(snum2)) {
    return `Numbers must be numbers`;
  }
  const lensnum1 = snum1.length;
  const lensnum2 = snum2.length;
  const maxlen = Math.max(lensnum1, lensnum2);
  const zsnum1 = padWithLeadingZeros(snum1, maxlen);
  const zsnum2 = padWithLeadingZeros(snum2, maxlen);
  const a1 = zsnum1.split(``).reverse();
  const a2 = zsnum2.split(``).reverse();
  const retstrarr = [];
  for (let d = 0; d < maxlen; d++) {
    let s = parseInt(a1.at(d)) - parseInt(a2.at(d));
    if (s < 0) {
      retstrarr.push(s < 0 ? s + base : s);
      a1[d + 1] = `${parseInt(a1.at(d + 1)) - 1}`;
    } else {
      retstrarr.push(s);
    }
  }
  return RmLZeros
    ? removeLeadingZeros(retstrarr.reverse().join(""))
    : retstrarr.reverse().join("");
};
