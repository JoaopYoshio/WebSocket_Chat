const socket = io();


function enviarMesagem(){
    const nomeInput = document.getElementById('nome-input');
    const mensagemInput = document.getElementById('mensagem-input');
    const messagem = {
        "nome": nomeInput.value.trim(),
        "texto": mensagemInput.value.trim()
    }

    socket.emit("mensagemServidor", messagem);
    mensagemInput.value = '';
}

socket.on("mensagemClientes", (data) => {
    console.log(data);
    const mensagemElement = document.createElement('div');
    mensagemElement.classList.add('mensagem');
    const horaAtual = new Date().toLocaleTimeString();

    mensagemElement.innerHTML = `
        <div class="meta">${data.nome} - ${horaAtual}</div>
        <div class="content">${data.texto}</div>
    `;

    const chat = document.getElementById('chat');
    chat.appendChild(mensagemElement);
})