type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'o texto',
  data: new Date()
};

console.log(documento.data?.toDateString());
