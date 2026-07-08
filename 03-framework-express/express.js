// 1) Express 

// É um framework para Node.js que facilita a criação de aplicações web e APIs.

// Fornece uma série de funcionalidades e ferramentas que simplificam o desenvolvimento, como roteamento, middleware, suporte a templates, entre outros.

// 2) Instalando o Express

// Para instalar o express, você pode usar o npm (Node Package Manager) com o seguinte comando:

// npm install express

// É um framework minimalista e flexível, que permite criar aplicações web de forma rápida e eficiente. Ele é amplamente utilizado na comunidade Node.js devido à sua simplicidade e facilidade de uso.

// 3) Criando um Servidor HTTP com o Express

const express = require('express'); // Importando o módulo Express

const app = express(); // Criando uma instância do Express - variável app é o objeto principal do Express, que representa a aplicação web e fornece métodos para configurar rotas, middleware e outras funcionalidades.

app.get('/', (req, res) => { // Definindo uma rota para o caminho raiz ('/')
    res.send('Seja bem vindo ao servidor Express!'); // Enviando uma resposta HTTP
});

// 4) Criando Rotas com o Express

// O Express permite criar rotas para diferentes caminhos da aplicação, associando funções que serão executadas quando essas rotas forem acessadas. As rotas são definidas usando os métodos HTTP (GET, POST, PUT, DELETE, etc.) e podem incluir parâmetros de rota para capturar valores dinâmicos da URL.

// Repare que o Express é um framework orientado a rotas, ou seja, ele permite definir diferentes caminhos (rotas) para a aplicação e associar funções que serão executadas quando essas rotas forem acessadas.

app.get('/sobre', (req, res) => { // Definindo uma rota para o caminho '/sobre'
    res.send('Esta é a página sobre o servidor Express!'); // Enviando uma resposta HTTP
});

app.get('/blog', (req, res) => { // Definindo uma rota para o caminho '/blog'
    res.send('Bem vindo ao blog do servidor Express!'); // Enviando uma resposta HTTP
});

// 5) Rota com Parâmetros

// PARÂMETROS DAS FUNÇÕES DE ROTA:

// As funções de rota do Express recebem dois parâmetros principais: req (request) e res (response). 

// O parâmetro req contém informações sobre a requisição HTTP feita pelo cliente, como cabeçalhos, parâmetros de URL, corpo da requisição, entre outros. 

// O parâmetro res é usado para enviar uma resposta HTTP de volta ao cliente, permitindo definir o status da resposta, enviar dados, redirecionar para outra rota, entre outras ações.

// Nosso parâmetro de rota é definido com dois pontos (:) seguido do nome do parâmetro. Por exemplo, na rota '/ola/:nome', o parâmetro de rota é 'nome'. Quando um cliente faz uma requisição para essa rota, o valor fornecido na URL será capturado e estará disponível no objeto req.params. Por exemplo, se a URL for '/ola/João', o valor 'João' será acessível através de req.params.nome.

// O req.params é um objeto que contém os parâmetros de rota capturados na URL. Cada parâmetro de rota definido na rota será uma propriedade desse objeto, permitindo acessar facilmente os valores fornecidos pelo client.

app.get('/ola/:cargo/:nome/:cor', function(req, res) { // Definindo uma rota para o caminho '/ola'
    res.send(`<h1>Olá, ${req.params.nome}!</h1><p>Seja bem vindo ao servidor Express!</p>` + 
             `<h2>Seu cargo é: ${req.params.cargo}</h2>` + 
             `<h3>Sua cor favorita é: ${req.params.cor}</h3>`
            ); // Enviando uma resposta HTTP
});

// Só se pode usar o res.send() uma vez por requisição, pois ele encerra a resposta. Se você tentar enviar múltiplas respostas, apenas a primeira será enviada e as demais serão ignoradas. Para enviar múltiplas informações em uma única resposta, você pode concatenar os dados em uma única string ou usar um objeto JSON.

app.listen(8081, () => { // Criando um servidor HTTP na porta 8081
    console.log('Servidor HTTP rodando na url "http://localhost:8081"'); // Exibindo uma mensagem no console
}); 

// IMPORTANTE: A função listen deve ser a última linha do código, pois ela inicia o servidor e bloqueia a execução de qualquer código subsequente.