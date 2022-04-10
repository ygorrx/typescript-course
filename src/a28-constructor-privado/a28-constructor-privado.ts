export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  conect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando Instância já criada');
      return Database.database;
    }
    console.log('Criando nova Instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.conect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.conect();

console.log(db1 === db2);
