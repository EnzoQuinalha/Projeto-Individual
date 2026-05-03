var database = require("../database/config");

function salvarHumanidade(idUsuario, pontuacao) {
    // CUIDADO COM SQL INJECTION: Use sempre a sintaxe da sua configuração de banco
    var instrucaoSql = `
        INSERT INTO resultado_quiz (fkUsuario, pontuacao_humanidade) 
        VALUES (${idUsuario}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para buscar as médias para o Dashboard depois
function buscarMediaComunidade() {
    var instrucaoSql = `
        SELECT AVG(pontuacao_humanidade) as media_geral FROM resultado_quiz;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarHumanidade,
    buscarMediaComunidade
};