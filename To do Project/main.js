// Arquivos JS para auxiliar criação da lista de tarefas
function tarefas() {
    const item = document.getElementById("lista").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("tarefas").appendChild(newItem)
    item.value=""
    item.focus()
}