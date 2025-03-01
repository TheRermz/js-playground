const Log = () => {
  return (target, key, descriptor) => {
    const ogMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("-------------------------------");
      console.log(
        `Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`
      );

      const result = ogMethod.apply(this, args);

      console.log(
        `O método ${key} retornou o valor: ${JSON.stringify(result)}`
      );
      console.log("-------------------------------");

      return result;
    };
  };
};

class Planet {
  name: string;

  constructor(name) {
    this.name = name;
  }

  @Log()
  calculate(value: number) {
    //...
    console.log(`Calculando ${value} vezes 2`);

    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split(``).reverse().join(``);
  }
}

const planet = new Planet(`Terra`);

const res = planet.calculate(5);

console.log(`Resultado: ${res}`);

planet.invertName();
