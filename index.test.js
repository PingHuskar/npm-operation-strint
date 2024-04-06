const op = require('./index');
test(`sum`, () => {
    expect(op.sum(`37`, `d`)).toBe("Numbers must be numbers");
    expect(op.sum(`37`, ``)).toBe("Numbers cannot be empty");
    expect(op.sum(`9`, `3`)).toBe("12");
    expect(op.sum(`12`, `3`)).toBe("15");
    expect(op.sum(`0012`, `3`)).toBe("15");
    expect(op.sum(`12983479272`, `323984729837`)).toBe("336968209109");
    expect(op.sum(`323928374982384729837`, `323928374982384729837`)).toBe(
      "647856749964769459674"
    );
})

test(`minus`,() => {
    expect(op.minus(`14`,`4`)).toBe(`10`);
    expect(op.minus(`14`,`5`)).toBe(`9`);
    expect(op.minus(`10`,`1`)).toBe(`9`);
    expect(op.minus(`100`,`1`)).toBe(`99`);
    expect(op.minus(`1000`,`1`)).toBe(`999`);
    expect(op.minus(`10000`,`1`)).toBe(`9999`);
    expect(op.minus(`10001`, `2`)).toBe(`9999`);
    expect(op.minus(`100000`,`1`)).toBe(`99999`);
    expect(op.minus(`1000000`,`1`)).toBe(`999999`);
    expect(op.minus(`10000000`,`1`)).toBe(`9999999`);
})

test(`multiply`,() => {
  expect(op.multiply(`3`, `4`)).toBe(`12`);
  expect(op.multiply(`30`, `4`)).toBe(`120`);
  expect(op.multiply(`30`, `1023`)).toBe(`30690`);
  expect(op.multiply(`123`, `4`)).toBe(`492`);
  expect(op.multiply(`1`, `1`)).toBe(`1`);
  expect(op.multiply(`1`, `0`)).toBe(`0`);
  expect(op.multiply(`0`, `0`)).toBe(`0`);
})

test(`divby2`, () => {
  expect(op.divby2(`36`)).toBe(`18`);
  expect(op.divby2(`35`)).toBe(`17.5`);
  expect(op.divby2(`120`)).toBe(`60`);
  expect(op.divby2(`12000000`)).toBe(`6000000`);
  expect(op.divby2(`12000001`)).toBe(`6000000.5`);
  expect(op.divby2(`121`)).toBe(`60.5`);
});

test(`pow`, () => {
  expect(op.pow(`36`, `1`)).toBe(`36`);
  expect(op.pow(`2`, `5`)).toBe(`32`);
  expect(op.pow(`2`, `2`)).toBe(`4`);
  expect(op.pow(`2`, `4`)).toBe(`16`);
  expect(op.pow(`5`, `2`)).toBe(`25`);
  expect(op.pow(`4`, `2`)).toBe(`16`);
  expect(op.pow(`4`, `0`)).toBe(`1`);
  expect(op.pow(`0`, `0`)).toBe(`1`);
});