var database = require("../database/config")

function autenticar(nome, senha) {
    const instrucaoSql = `
        SELECT idusuario, nome, senha FROM usuario
        WHERE nome = '${nome}' AND senha = '${senha}';
    `;
    console.log("Executando SQL: ", instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, funcao, classe) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    // cria uma instrução pra cada insert
    var instrucaoSql2 = `
        INSERT INTO funcoes (funcao) VALUES ('${funcao}');
    `;

    var instrucaoSql3 = `
        INSERT INTO classes (classe) VALUES ('${classe}');
    `;
    
// executa uma por vez
    database.executar(instrucaoSql2);
    database.executar(instrucaoSql3);

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};