const alunos = [
    {
        nome: "David",
        nota: 9
    },
    {
        nome: "Sam",
        nota: 2
    },
    {
        nome: "Erik",
        nota: 10
    },
    {
        nome: "João",
        nota: 6
    },
    {
        nome: "Gian",
        nota: 5
    }
]

function alunosAcimaDaMedia(){
    const filtraAlunosAcimaDaMedia = (aluno => {
        if(aluno.nota >= 6){
            console.log(aluno.nome)
        }
    })

    alunos.filter(filtraAlunosAcimaDaMedia)
}

alunosAcimaDaMedia()




