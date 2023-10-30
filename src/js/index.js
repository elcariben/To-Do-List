const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()
}
function mostrarTarefa() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="./src/images/checked.png" alt="check-in" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="./src/images/trash.png" alt="trash" onclick="deletarItem(${index})">
        </li>
          
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefa()

}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)

    mostrarTarefa()

}

function recarregarTarefas() {
    const tarefasDoLS = localStorage.getItem('lista')

    if (tarefasDoLS) {
        minhaListaDeItens = JSON.parse(tarefasDoLS)
    }
    mostrarTarefa()
}

recarregarTarefas()
button.addEventListener('click', adicionarTarefa)