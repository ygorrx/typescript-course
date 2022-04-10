interface TipoNome {
  nome: string;
}

interface TipoSobreNome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobreNome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobreNome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Luiz',
  sobrenome: 'Agora ta ok'
};

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
