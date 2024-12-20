//captura do evento de submissão do formulário
document.getElementById('formulariio').addEventListener('submit', function(event) {
    event.preventDefault(); //Impede o envio do formulário

    //Obtém os valores dos campos A e B
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    // Elemento para exibir a mensagem
    const mensagem = document.getElementById('mensagem');

    // Limpa mensagens anteriores
    mensagem.textContent = "";

    // Verifica se os campos possuem valores válidos
    if(campoA.trim() === "" || campoB.trim() === "") {
        mensagem.textContent = "Preencha ambos os campos.";
        mensagem.className = "mensagem negativo";
        return;
    }
    
    const numeroA = parseFloat(campoA);
    const numeroB = parsefloat(campoB);

    // Verifica se os valores são válidos
    if (isNaN(numeroA) || isNaN(numeroB)){
        mensagem.textContent = "Preencha ambos os campos com números válidos.";
        mensagem.className = "mensagem negativo";
        return;    
    }

    // Validação
    if(numeroB > numeroA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem negativo";
    } else {
        mensagem.textContent = "Formulário inválido! Onúmero B deve ser maior que o número A.";
        mensagem.className = "mensagem negativo";
    }
});

// Captura do evento de submissão do formulário
document.getElementById('formulário').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos A e B
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    //Elemento para exibir a mensagem
    const mensagem = document.getElementById('mensagem');

    // Limpa mensagens anteriores
    mesnagem.textContent = "";

    if(campoA.trim() != "" && campoB.trim() != "") {
        mensagem.textContent = "Preencha ambos os campos.";
        mensagem.className = "mensagem negativo";
        return;
    }

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

    // Verifica se os valores são válidos
    if(isNaN(numeroA) || isNaN(numeroB)){
        mensagem.textContent = "Preencha ambos os campos com números válidos.";
        mensagem.className = "mensagem negativo";
        return;
    }

    // Validação
    if(numeroB > numeroA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem positivo";        
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.className = "mensagem negativo";
    }
});