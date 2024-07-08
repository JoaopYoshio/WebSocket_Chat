import io from "./servidor.js";

io.on("connection", (socket) => {
    const historicoMensagem = [];
    console.log(`Cliente conectado! ID: ${socket.id}`);

    socket.on("mensagemServidor", (data) => {
        historicoMensagem.push(data);
        io.emit("mensagemClientes", data);
    })
})