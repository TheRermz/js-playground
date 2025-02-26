const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error(`Age is required`));
    }
  });
};

const getAge = (birthday) => {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error(`Birthday is required`));
    }
  });
};

/**
 * Método ineficiente
 */
// getAge(`2009-09-02`)
//   .then((age) => {
//     checkAge(age)
//       .then((isOver18) => {
//         if (isOver18) {
//           console.log(`Maior de idade`);
//         } else {
//           console.log(`Menor de idade`);
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

/**
 * Outro método para fazer chamada de várias promises
 */

getAge(`01-02-2008`)
  .then((age) => {
    return checkAge(age);
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log(`Maior de idade`);
    } else {
      console.log(`Menor de Idade`);
    }
  })
  .catch((err) => console.log(err.message));
