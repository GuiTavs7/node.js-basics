//O módulo HTTP do Node.JS é bem limitado, porém, com os frameworks Express e Fastify, 
// você consegue criar aplicações web de forma mais simples e rápida.

var fs = require('fs'); // Importando o módulo File System do Node.JS - Este trabalha com arquivos do sistema operacional

// 1) Do modo original (sem Express ou Fastify), você pode criar um servidor HTTP assim:

const http = require('http'); // Importando o módulo HTTP do Node.JS

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8081); // Criando um servidor HTTP na porta 8081

console.log('Servidor HTTP rodando na porta 8081'); // Exibindo uma mensagem no console

// Para testar rode no terminal o comando: node http.js
// Em seguida, na pesquisa do navegador, digite: http://localhost:8081