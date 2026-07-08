const express = require('express'); // Importando o módulo Express

const app = express(); // Criando uma instância do Express - variável app é o objeto principal do Express, que representa a aplicação web e fornece métodos para configurar rotas, middleware e outras funcionalidades.

app.get('/', (req, res) => { // Definindo uma rota para o caminho raiz ('/')
    res.sendFile(__dirname + '/html/index.html'); // Enviando o arquivo HTML
});

// Repare que ocorre a concatenação do caminho do diretório atual (__dirname) com o caminho relativo do arquivo HTML. Isso garante que o arquivo correto seja enviado, independentemente de onde o script seja executado.

app.get('/sobre', (req, res) => { // Definindo uma rota para o caminho '/sobre'
    res.sendFile(__dirname + '/html/sobre.html'); // Enviando o arquivo HTML
});

app.get('/blog', (req, res) => { // Definindo uma rota para o caminho '/blog'
    res.sendFile(__dirname + '/html/blog.html'); // Enviando o arquivo HTML
});

app.get('/ola/:cargo/:nome/:cor', function(req, res) { // Definindo uma rota para o caminho '/ola'
    res.send(`<h1>Olá, ${req.params.nome}!</h1><p>Seja bem vindo ao servidor Express!</p>` + 
             `<h2>Seu cargo é: ${req.params.cargo}</h2>` + 
             `<h3>Sua cor favorita é: ${req.params.cor}</h3>`
            ); // Enviando uma resposta HTTP
});

app.listen(8081, () => { // Criando um servidor HTTP na porta 8081
    console.log('Servidor HTTP rodando na url "http://localhost:8081"'); // Exibindo uma mensagem no console
}); 