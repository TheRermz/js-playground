const execute = () => {
  return new Promise((resolve, reject) => {
    console.log(`A promise está sendo executada`);
    setTimeout(() => {
      //   if (true) {
      //     reject(false);
      //   }
      console.log(`Resolvendo a promise`);
      resolve(true);
    }, 1000 * 2);
  });
};

const p = execute();

p.then((result) => {
  console.log(`A promise foi resolvida, resultado: ${result}`);
})
  .catch((err) => {
    console.log(`A promise foi rejeitada, o motivo: ${err}`);
  })
  .finally(() => {
    console.log(`A promise foi finalizada`);
  });
