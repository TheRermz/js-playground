const asyncSum = async (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return Promise.reject(`Arguments must be of type number`);
  }
  return a + b;
};

const asyncSubtract = (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return Promise.reject(`Arguments must be of type number`);
  }
  return a - b;
};

const sumResult = asyncSum(50, `d`);
const subtractResult = asyncSubtract(50, 5);

Promise.all([sumResult, subtractResult])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const arr = [4, 6, 5, 13, 77];

const asyncSquare = (x) => {
  return x * x;
};

Promise.all(
  arr.map((num) => {
    return asyncSquare(num);
  })
).then((res) => {
  console.log(res);
});
