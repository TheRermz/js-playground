const step02 = () => {
  console.log(`Passo 2`);
};

console.log(`Passo 1`);
step02();
console.log(`Passo 3`);
console.log(`Passo 4`);
setTimeout(() => {
  console.log(`Passo 5`);
}, 2000);
console.log(`Passo 6`);
