const { Router } = require('express');

routes = Router();

pessoa = {
    nome: 'Diogo',
    mnemonico: 'diogoaa'
}

routes.get('/', (request, response) => {    
    return response.json({ message: 'Hello World' })
});

routes.get('/test', (request, response) => {
    return response.send(request.query)
});

routes.get('/test/:atributo', (request, response) => {
    console.log(request.params.atributo);
    nome_parms = request.params.atributo
    var {nome_parms} = pessoa
    console.log(nome_parms)
    return response.json(nome_parms);
});

routes.put('/test')

module.exports = routes;