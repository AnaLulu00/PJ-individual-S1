//console.log(req.body)
var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (!nome) {
        return res.status(400).send("Seu nome está undefined!");
    }
    if (!senha) {
        return res.status(400).send("Sua senha está undefined!");
    }

    console.log('teste1');

    usuarioModel.autenticar(nome, senha)
        .then(resultado => {
            console.log('teste2');
            if (resultado.length === 1) {
                const usuario = resultado[0];
                res.json({
                    id: usuario.idusuario,
                    nome: usuario.nome,
                    email: usuario.email
                });
            } else if (resultado.length === 0) {
                res.status(403).send("Nome e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com as mesmas credenciais.");
            }
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).send("Erro interno no servidor.");
        });
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var funcao = req.body.funcaoServer;
    var classe = req.body.classeServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, funcao, classe)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}