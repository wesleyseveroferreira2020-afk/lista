
const nomes = ["Wesley", "Severo", "Feereira"];
const lista = document.getElementById("lista");
const form = document.getElementById("form-nomes");
const inputNome = document.getElementById("nome");

function addLista() {
    lista.innerHTML = ""; // Limpa a lista para não duplicar os itens anteriores
    
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}
addLista();

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const novoNome = inputNome.value.trim(); 

    if (novoNome !== "") {
        nomes.push(novoNome); 
        addLista();    // 
       
    }
});