const DEBUG = false;
const snumpat = /^\d+$/;
const isdivisiblebyx = require("isdivisiblebyx")

const numinbase10 = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]

const removeLeadingZeros = (string) => string.replace(/^0+/g, "");

const padWithLeadingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, "0");
};

const sum = (snum1, snum2, RmLZeros = true) => {
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
  if (DEBUG) console.log(zsnum1);
  if (DEBUG) console.log(zsnum2);
  const a1 = zsnum1.split(``).reverse();
  const a2 = zsnum2.split(``).reverse();
  if (DEBUG) console.log(a1);
  if (DEBUG) console.log(a2);
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
    : (carry ? retstrarr.reverse().join("") : retstrarr.reverse().join("").slice(-maxlen));
};

const minus = (snum1, snum2, RmLZeros = true) => {
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
  if (DEBUG) console.log(zsnum1);
  if (DEBUG) console.log(zsnum2);
  const a1 = zsnum1.split(``).reverse();
  const a2 = zsnum2.split(``).reverse();
  if (DEBUG) console.log(a1);
  if (DEBUG) console.log(a2);
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

const multiplybysum = (snum1, snum2, RmLZeros = true) => {
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
  if (DEBUG) console.log(zsnum1);
  if (DEBUG) console.log(zsnum2);
  let retValue = `0`;
  while (snum2 != `` && snum1 != ``) {
    retValue = sum(retValue, snum1);
    snum2 = minus(snum2, `1`);
  }
  return retValue;
};

const fact = (snum) => {
  if (!snum) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum)) {
    return `Numbers must be numbers`;
  }
  let i = `1`
  while (snum) {
    i = multiply(snum, i)
    snum = minus(snum, `1`)
  }
  return i;
}

const CSRange = {
  sbyte: `127`,
  byte: `255`,
  short: `32767`,
  ushort: `65535`,
  int: `2147483647`,
  uint: `4294967295`,
  long: `9223372036854775807`,
  ulong: `18446744073709551615`,
};

const IsMoreThan = (snum1, snum2, RmLZeros = true) => {
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
  if (lensnum2 > lensnum1) return false
  if (lensnum1 > lensnum2) return true
  const a1 = snum1.split(``);
  const a2 = snum2.split(``);
  for (const p in a1) {
    if (a1.at(p) != a2.at(p)) {
      return parseInt(a1.at(p)) > parseInt(a2.at(p))
    }
  }
  return false
}

const divby2 = (snum, RmLZeros = true) => {
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
    if (DEBUG) console.log(`s`, s);
    if (DEBUG)
      console.log(`parseInt(s)+carry*base`, parseInt(s) + carry * base);
    temp1 = parseInt(s) + carry * base;
    if (DEBUG) console.log(`temp`, temp1);
    d = Math.floor(temp1 / 2);
    temp2 = 2 * d;
    retstrarray.push(d);
    carry = temp1 - temp2;
    if (DEBUG) console.log(`carry`, carry);
    if (DEBUG) console.log(retstrarray);
  }
  return RmLZeros
    ? removeLeadingZeros(retstrarray.join("")) +
        (isdivisiblebyx.IsDivisibleBy2(snum) ? `` : `.5`)
    : retstrarray.join("") + (isdivisiblebyx.IsDivisibleBy2(snum) ? `` : `.5`);
};

const multiply = (snum1, snum2, RmLZeros = true) => {
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
  const sumArr = []
  const swap = IsMoreThan(snum1, snum2);
  const arrsnum1 = swap ? snum1.split("") : snum2.split("");
  const arrsnum2 = swap ? snum2.split("") : snum1.split("");
  const arrsnum1r = arrsnum1.reverse();
  const arrsnum2r = arrsnum2.reverse();
  if (DEBUG) console.log(arrsnum1r);
  if (DEBUG) console.log(arrsnum2r);
  let c = 0
  for (const a2 of arrsnum2r) {
    let carry = 0;
    let ra2 = [];
    for (const a1 of arrsnum1r) {
      if (DEBUG) console.log(`a1`, a1, `a2`, a2, `carry`, carry, `c`, c, `ra2`, ra2);
      if (a2 == `0`) {
        if (DEBUG) console.log(`break`);
        break;
      } else { 
        if (DEBUG) console.log(sumArr); 
      }
      if (DEBUG) console.log(`${parseInt(a1)} * ${parseInt(a2)} + ${carry}`);
      let r = parseInt(a1) * parseInt(a2) + carry;
      if (DEBUG) console.log(`r = ${r}`);
      if (DEBUG) console.log(`r % base = ${r % base}`);
      ra2.push(`${r % base}`);
      carry = (r - (r % base)) / base;
      if (DEBUG) console.log(`carry = ${carry}`);
    }
    if (DEBUG) console.log(219, ra2);
    ra2.push(carry);
    if (DEBUG) console.log(`carry = ${carry}`);

    sumArr.push(ra2.reverse().join("") + "0".repeat(c));
    c += 1;
    if (DEBUG) console.log(226, sumArr);
  }
  return sumArr
    .filter((l) => !/^0+$/g.test(l))
    .reduce(
      (a, c) => sum(a,c),
      `0`
    );;
};

const pow = (snum1, snum2, RmLZeros = true) => {
  if (!snum1 || !snum2) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum1) || !snumpat.test(snum2)) {
    return `Numbers must be numbers`;
  }
  if (snum2 === '0') return '1'
  if (RmLZeros) {
    snum1 = removeLeadingZeros(snum1);
    snum2 = removeLeadingZeros(snum2);
  }
  const arr = [...Array(parseInt(snum2)).keys()].map((i) => snum1);
  return arr.reduce((a,c) => multiply(a,c), '1');
}

module.exports = {
  numinbase10,
  snumpat,
  sum,
  minus,
  multiplybysum,
  multiply,
  fact,
  CSRange,
  IsMoreThan,
  divby2,
  pow,
};
