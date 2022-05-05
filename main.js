const casa = document.querySelectorAll(".casa")
const jogadorX = "X"
const jogadorO = "O"
let checarTurno = true

let combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


/*element.matches() é um metodo que retorna um valor true do elemento selecionado*/
document.addEventListener('click', (event) => {
    if(event.target.matches('.casa')){
        jogar(event.target.id)
    }
})

function jogar(id) {
    const casa = document.getElementById(id)
    turno = checarTurno ? jogadorX : jogadorO
    casa.textContent = turno
    casa.classList.add(turno)
    checarVencedor(turno)
}

function checarVencedor(turno) {
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return casa[index].classList.contains(turno)
        })
    })

    if(vencedor) {
        encerraJogo(turno)
    } else if (checarEmpate()) {
        encerraJogo()
    } else {
        checarTurno = !checarTurno
    }
}

function checarEmpate() {

    let x = 0
    let o = 0

    for(index in casa) {
        if(!isNaN(index)) { 
        if(casa[index].classList.contains(jogadorX)) {
            x++
        }

        if(casa[index].classList.contains(jogadorO)) {
            o++
        }
    }
}
    return x + o === 9 ? true : false 

}

function encerraJogo(vencedor = null) {
    let result = document.getElementById('resultado')
    let h2 = document.createElement("h2")

    result.appendChild(h2)

    if (vencedor) {
       h2.innerHTML = `Vencedor <strong> ${vencedor} </strong>!!`
    } else {
        h2.innerHTML = `Empatou !!`
    }
}

/* retorna o conteudo de texto de um elemento*/
// element.textContent = "texto mudado"
/* O every()método executa uma função para cada elemento do array.

O every()método retorna truese a função retornar true para todos os elementos.

O every()método retorna falsese a função retornar false para um elemento.

O every()método não executa a função para elementos vazios.

O every()método não altera o array original*/

