const ObjectA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Adeus',
  chaveB: 'Outro'
};

ObjectA.chaveB = 'Dois';
console.log(ObjectA);
