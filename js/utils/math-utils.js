function add(x, y) {
  if (typeof x !== 'number') {
    throw new Error(`${x} is not a number`);
  }

  if (typeof y !== 'number') {
    throw new Error(`${y} is not a number`);
  }

  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  if (y === 0) {
    throw new Error('Divide by zero');
  }

  return x / y;
}

module.exports = {
  add,
  sub,
  mul,
  div,
};
