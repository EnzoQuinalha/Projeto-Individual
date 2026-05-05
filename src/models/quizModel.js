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

function buscarDadosDash(idUsuario) {
    var instrucaoSql = `
        SELECT 
            (SELECT pontuacao_humanidade FROM resultado_quiz WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC LIMIT 1) as pontuacao_user,
            (SELECT AVG(pontuacao_humanidade) FROM resultado_quiz) as media_geral;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarQuiz(idUsuario) {
    var instrucaoSql = `
        SELECT count(fkUsuario) as tentativas FROM resultado_quiz WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarHumanidade,
    buscarMediaComunidade,
    buscarDadosDash,
    verificarQuiz
};