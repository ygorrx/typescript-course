export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa('Instagram', '0001.000.000/000-11');
const colaborador1 = new Colaborador('Ygor', 'Oliveira');
const colaborador2 = new Colaborador('Maria', 'Aluns');
const colaborador3 = new Colaborador('Eveline', 'Holanda');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaborador();
