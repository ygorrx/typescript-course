type ObjetoChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObjetoChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina1', 'Vacina 2']
};

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);
