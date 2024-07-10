const calculaMedia = (primeiraProva, segundaProva) => {
  const somaProvas = primeiraProva + segundaProva;
  const mediaAluno = somaProvas / 2;
  return mediaAluno;
};

const notaAluno = calculaMedia(10, 20);
console.log(notaAluno);
