type tipoNome = {
  nome: string;
};

type tipoSobreNome = {
  sobrenome: string;
};

type tipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements tipoNome, tipoSobreNome, tipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
