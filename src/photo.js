module.exports = (snum1) => {
  const retstrarr = [];
  const base = 10;
  try {
    const a1 = snum1.split(``).reverse();
    let carry = 0;
    for (let d = 0; d < a1.length; d++) {
      try {
        let s = parseInt(a1.at(d)) + carry + (d == 0 ? 1 : 0);
        retstrarr.push(`${s % base}`.replace(`NaN`, a1.at(d)));
        carry = s >= base ? 1 : 0;
      } catch (e) {
        carry = 0;
        retstrarr.push(a1.at(d));
      }
    }
  } catch (e) {
    return retstrarr.join("");
  }
  return retstrarr.reverse().join("");
};