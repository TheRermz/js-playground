console.log(`Programa Iniciado`);

// const timeoutID = setTimeout(() => {
//   console.log(`3 segundos se passaram`);
// }, 3000);

// clearTimeout(timeoutID);

let seconds = 0;

const intervalID = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos`);
  if (seconds > 10) {
    clearInterval(intervalID);
    console.log(`Tempo esgotado! Encerrando...`);
  }
}, 3000);
