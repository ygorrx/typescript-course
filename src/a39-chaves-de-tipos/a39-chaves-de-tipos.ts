type Veiculo = {
  marca: string;
  ano: number;
};

type Cor = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Cor = {
  brand: 'Ford',
  year: 2020,
  name: 'Nome'
};

console.log(carro);
