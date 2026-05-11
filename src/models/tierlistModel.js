var database = require("../database/config");


function publicar(idUsuario,idBoss,notaTier){
    console.log("ACESSEI O TIERLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario,idBoss,notaTier);
    var instrucaoSql = `
        INSERT INTO avaliacoes_tierlist (id_usuario, id_boss, nota) VALUES (${idUsuario}, ${idBoss}, ${notaTier});
    `
    console.log('EXECUTANDO A INSTRUÇÃO SQL:  \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    publicar
}
