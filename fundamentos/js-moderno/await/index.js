const asyncSum = async (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return Promise.reject(`Arguments must be of type number`);
  }
  return a + b;
};

// const execute = async () =>{
//     asyncSum(50,33).then(resp => {
//         console.log(resp)
//     })
// }

const execute = async () => {
  try {
    const result = await asyncSum(50, 30);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
execute();
