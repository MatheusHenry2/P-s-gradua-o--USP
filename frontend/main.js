// Seleciona o botão e o parágrafo que exibe o contador
const button = document.getElementById('incrementButton');
const counter = document.getElementById('counter');

// Inicializa o contador
let count = 0;

// Adiciona um evento de clique ao botão
button.addEventListener('click', function() {
    count += 1; // Incrementa o contador
    counter.textContent = count; // Atualiza o texto do contador
});