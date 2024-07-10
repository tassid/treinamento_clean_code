class CalculadoraDeEventos {
    calcularTotalDeParticipantes(participantes: number[]): number {
        let totalDeParticipantes = 0;
        for (const quantidadeDeParticipantes of participantes) {
            totalDeParticipantes += quantidadeDeParticipantes;
        }
        return totalDeParticipantes;
    }
}

const calculadoraDeEventos = new CalculadoraDeEventos();
const totalDeParticipantes = calculadoraDeEventos.calcularTotalDeParticipantes([151, 829, 317, 147, 56]);
console.log(totalDeParticipantes);
