function salvarTarefa() {
    var tarefa = document.getElementById('inputTarefa').value;
    localStorage.setItem('tarefa', tarefa); //Salvar no LocalStorage

}

function mostrarTarefa() {
    var tarefa = localStorage.getItem('tarefa');
    if (tarefa) {
        document.getElementById('resultado').textContent  = `Tarefa salva: ${tarefa}`;
    } else {
        document.getElementById('resultado').textContent = "Nenhuma tarefa";
    }
}

function limparTarefa() {
    localStorage.removeItem('tarefa');
    document.getElementById('resultado').textContent = "Tarefa removida" 
}