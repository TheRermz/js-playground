const bmi = (weight, height) => {
  const w = Number(weight);
  const h = Number(height);
  return new Promise((resolve, reject) => {
    if (!w || !h) {
      reject(`A altura e o peso devem ser números.`);
    } else {
      const bmi = w / Math.pow(h, 2);
      resolve(bmi);
    }
  });
};

const showBMI = (weight, height) => {
  bmi(weight, height)
    .then((r) => {
      console.log(`O resultado do IMC foi de: ${r}.`);
      if (r < 18.5) console.log(`Magreza`);
      else if (r < 25) console.log(`Normal`);
      else if (r < 30) console.log(`Sobrepeso`);
      else if (r < 40) console.log(`Obesidade`);
      else console.log(`Obesidade grave`);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Calculando o IMC para o peso ${weight} e altura ${height}...`);
};

showBMI(110, 1.69);
showBMI(2, `asdas`);
showBMI(34, 1.57);
showBMI(64, 1.69);
showBMI(110, 2.01);
