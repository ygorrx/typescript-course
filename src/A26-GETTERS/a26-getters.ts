export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  //método antigo//

  /*  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
} */

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}
const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-00');
pessoa.cpf = '123.456.789-90';
console.log(pessoa.cpf);
