// Array inicial contendo o nome do aluno e outros exemplos
const nomes = ["wesley", "severo", "Henriques"];

// Capturando os elementos do HTML
const lista = document.getElementById("lista");
const form = document.getElementById("form-nomes");
const inputNome = document.getElementById("nome");

// Função para exibir/atualizar os nomes na tela
function renderizarLista() {
    lista.innerHTML = ""; // Limpa a lista para não duplicar os itens anteriores
    
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

// Renderiza a lista inicial assim que a página carrega
renderizarLista();

// Adiciona o evento de escuta no formulário ao clicar em "Cadastrar"
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o form

    const novoNome = inputNome.value.trim(); // Pega o valor digitado tirando espaços vazios

    if (novoNome !== "") {
        nomes.push(novoNome); // Adiciona o novo nome ao array
        renderizarLista();    // Atualiza a tela com o novo array
        inputNome.value = ""; // Limpa o campo do input
    }
});