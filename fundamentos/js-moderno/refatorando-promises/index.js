const bmi = async (weight, height) => {
  const w = Number(weight);
  const h = Number(height);

  if (!w || !h) {
    return Promise.reject(`A altura e o peso devem ser números.`);
  } else {
    const bmi = w / Math.pow(h, 2);
    return bmi;
  }
};

const showBMI = async (weight, height) => {
  try {
    console.log(`Calculando o IMC para o peso ${weight} e altura ${height}...`);

    const resp = await bmi(weight, height);
    console.log(`O resultado do IMC foi de: ${resp}.`);
    if (resp < 18.5) console.log(`Magreza`);
    else if (resp < 25) console.log(`Normal`);
    else if (resp < 30) console.log(`Sobrepeso`);
    else if (resp < 40) console.log(`Obesidade`);
    else console.log(`Obesidade grave`);
  } catch (error) {
    console.log(error);
  }
};

showBMI(110, 1.69);
showBMI(2, `asdas`);
showBMI(34, 1.57);
showBMI(64, 1.69);
showBMI(110, 2.01);
