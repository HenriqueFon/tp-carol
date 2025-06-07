const WebSocket = require('ws');
const http = require('http');

// Cria um servidor HTTP simples (pode ser usado com express também)
const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Quando um cliente se conecta
wss.on('connection', ws => {
    console.log('Cliente conectado');

    ws.on('message', message => {
        console.log(`Mensagem recebida: ${message}`);
        
        // Reenvia a mensagem para todos os clientes conectados
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(`Outro usuário: ${message}`);
            }
        });
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

// Inicia o servidor na porta 8080
server.listen(8080, () => {
    console.log('Servidor WebSocket rodando em ws://localhost:8080');
});
