const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== `number` || typeof b !== `number`) {
      reject(`arguments must be of type number`);
    } else {
      resolve(a + b);
    }
  });
};

const asyncSubtract = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== `number` || typeof b !== `number`) {
      reject(`arguments must be of type number`);
    } else {
      resolve(a - b);
    }
  });
};

const sumResult = asyncSum(50, 30);
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
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
};

Promise.all(
  arr.map((num) => {
    return asyncSquare(num);
  })
).then((res) => {
  console.log(res);
});
