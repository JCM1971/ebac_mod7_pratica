/*
2. Lógica em Java Script
Crie o arquivo script.js com a lógica de validação. A ideia é capturar o evento de envio de formulário,
verificar se o número B é maior que o número A,
e exibir mensagens apropriadas.
*/

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); //impede o envio padão do formulário
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "formulário inválido! número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }

});