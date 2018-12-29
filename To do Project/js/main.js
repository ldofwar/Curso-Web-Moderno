// Arquivos JS para auxiliar criação da lista de tarefas
function tarefas() {
    let item = document.getElementById("lista").Value
    let text = document.createTextNode(item)
    let newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("tarefas").appendChild(newItem)
}