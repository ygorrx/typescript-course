function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

semRetorno('Luiz', 'Otavio', 'Aug');
person.exibirNome();
