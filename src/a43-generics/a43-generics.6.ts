export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave: 'valor1' };
const obj2 = { chave2: 'valor2' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
