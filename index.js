const express = require("express")
//Carregar as rotas do Gênero
//O comando ./ usa a pasta atual
const rotasGenero = require('./api/generoRotas')
//Adicionar as rotas do Cliente
const rotasCliente = require('./api/clienteRotas')
//Adicionar as rotas do Cliente
const rotasLocacao = require('./api/locacaoRotas')
 
//Construir o objeto do express
const backend = express();
//Configurar o backend para usar JSON
backend.use(express.json());
//Personalizar um caminho para acessar as rotas do Genero
//Nesse caso, todas as rotas do Gênero ficam dentro
//do caminho /genero
backend.use('/genero', rotasGenero)
//do caminho /genero
backend.use('/locacao', rotasLocacao)
 
//Personalizar o caminho da rota de Clientes
backend.use('/cliente', rotasCliente)
 
 
//Iniciar o backend
backend.listen(3000, ()=>{
    console.log("Backend iniciado com sucesso!");
})
 
 








   
