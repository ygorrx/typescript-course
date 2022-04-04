function multiplyArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatStrings(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concat = concatStrings('Eu', 'Acho', 'Muito');

console.log(result);
console.log(concat);
